[TOC]

## TPTS路由配置

文件路径： `[TPST根路径]/configs/services.xml`

	<root>

		...
		<RPC>

			<Cluster Name="TS" Type="5">
				<Server Addr="127.0.0.1" Port="7616" Timeout="10s" BaseConn="1"/>
			</Cluster>

			<!--互联网用户访问域-->
			<Domain Name="Internet" Type="Routing">
				<Route Call="CWServ*" Cluster="CWServ"/>
				<Route Call="*" Cluster="local"/>
			</Domain>

			<!--内部域:Intranet-->
			<Domain Name="Intranet" Type="Routing">
				<Route Call="CWServ*" Cluster="CWServ"/>
				<Route Call="*" Cluster="local"/>
			</Domain>

		</RPC>

		<LPC>
			...
		</LPC>
		...
	</root>

## TAS.mm

功能：商城首页数据提供模块

文件路径：`[TPST根路径]/proccalls/TAS.mm`

配置：`[TPST根路径]/proccalls/tas.ini`

		// proccalls/tas.ini
		[ZQGS]
		ZQID = 57

		QS_num = 1
		QSID_0 				= 57
		QSName_0			= 民生证券
		Account_0			= 111037651
		Account_type_0= 8
		Account_password_0= 123123
		HostType_0 = 0

		CacheFunc_Num = 2
		CacheFunc_Param_0 = {"pro_type1":"2","func":"748","needzx":"0","param":{"113":"2"}}
		CacheFunc_Param_1 = {"pro_type1":"3","func":"748","needzx":"0","param":{"113":"3"}}

		[SYSINFO]
		UpdateInfoTime = 70000,80000

## TSTCSvc.dll

功能：将 `ts` 上的 `TSTC` 请求转到 `tc` 交易中心处理。

文件路径：`[TPST根路径]/TSTCSvc.dll`

配置：

1. 服务注册，`[TPST根路径]/configs/tdx.ini`

	[MODULES]
	MODULES=TSTCSvc.dll
	SERVICES=TSTCSvc

2. 转发到 `TC` 端的功能注册，`[TPST根路径]/configs/sygn.ini`

	建议这个文件和 `TC` 上对应的文件保持一致。

3. 配置路由到 `TC`, `[TPST根路径]/configs/services.xml`

	<root>

		...
		<TSTCSvc Log="1" Timeout="1800" Refresh="1000" JobTimeOut="10000" CheckCAPTCHA="0">

			<QS QsTag="民生证券" QsTag="57" Login="100" Balance="1">
				<Site>
					<!--<ITEM Name="股票交易" Address="114.255.222.201" Port="7708" HostType="0" />-->
					<ITEM Name="股票交易" Address="192.168.0.106" Port="10123" HostType="0" />
				</Site>
				<Branch>
					<ITEM ID="3" Name="营业部" HostType="0" />
				</Branch>
			</QS>

		</TSTCSvc>
		...

	</root>

	注意：

	这里的 `Branch` 下面配置的 `ID`, 这个营业部ID要和客户端登录时候的营业部ID一致，不然会报营业部不存在的错误。



## CAPTCHA.mm

功能：验证码模块，提供验证码生成，校验接口

文件路径：`[TPST根路径]/proccalls/CAPTCHA.mm`

配置： `configs/services.xml`

	<root>
		...
		
		<TSTCSvc ... CheckCAPTCHA="1">
			...
		</TSTCSvc>

		<CAPTCHA UserAutoShow="NO" />
		...
	</root>

`CheckCAPTCHA='1'` 表示发到 `TC` 的用户验证，是否需要校验验证码

`UserAutoShow='NO'` 表示登录界面，验证码是否自适应显示，`YES(默认)`, 自适应显示， `NO`, 恒定显示

## tdx.ini

功能：`TPTS`服务器配置文件

文件路径：`[TPST根路径]/configs/tdx.ini`

详情：

	[SERVICE]
	...
	; 服务器ID
	SERVID=0001

	; 服务器监听端口
	SERVICE_PORT=7616
	

## 商城TS负载均衡说明

登录 `100` 功能，会在应答结果集里返回 `RI` 字段。
同时在 `localStorge` 中设置信息。

例如：所有的 `TSTC` 请求，在登录成功后，都路由到进行登录验证的那个 `TS`

	// TSTC.100 号功能的应答
	...
	var ri = data.rows[0]["RI"];
	localStorage.setItem("TSTC", "TSTC*"); // 这个放置所有的key值
	localStorage.setItem("TSTC*", ri); // 某个key值对应的ri值

	// 在退出的时候，手动清空对应的 ri 值
	var ri = localStorage.getItem("TSTC");
	if(ri != null && ri != "") {
		var riItems = ri.split(",");
		riItems.map(function(r) {
			localStorage.removeItem(r);
		});
	}

同时也有后台服务不可用的时候，要清空 `ri` 值，这时在 `ts_client` 中做。

涉及到配置:

	// connect.js
	...
	var client = CreateTDXClient({
		...
		isRiWork: true
	});


	// ts_client.js
	...
	// 这里添加配置 isRiWork 生效的逻辑
	if(_this.ssObj.getState("isRiWork")) {

		// code == "error" msg == "", 页面切换, 前一个页面的未返回请求被cancel掉
		// 不执行前面页面的回调了，promise写法请求未处理，还是会在 fail 分支中处理
		if(code == "error" && msg == "") {
			deferred.rejectWith(_this, [code, msg, _this]);
		} else if(code == "error" && msg != "") {

			// code == "error" msg == "E|xxxxx"  post请求 5xx 错误
			// 这里需要重置localStorage中RI的值
			var prefix = _this.ssObj.getEntryPrefix(entry);
			var keys = _this.ssObj.getItem(prefix).split(",");
			keys.map(function(key) {
	    	_this.ssObj.removeItem(key);
			});
			_this.ssObj.removeItem(prefix);

			// 这里重发请求，触发登录
			_this.ssObj.setState("ifConnect",false), _this.ssObj.setState("ifLogin",false);
			// 调用执行逻辑,复用链接和重新登陆逻辑
			_this.execute(entry, stream)
				.done(function (data, ssObj, strErrNo) {
					sendDone(data, ssObj, strErrNo);
				})
				.fail(function (code, msg, ssObj) {
					if (callback != undefined) eval(callback)(msg,code);
					deferred.rejectWith(_this, [code, msg, _this]);
				});
		} else {
	  	if (callback != undefined) eval(callback)( msg,code);
	  	deferred.rejectWith(_this, [code, msg, _this]);                                    
		} 
	}
	...