这里介绍 windows 下安装 MongDB 的操作。

# 下载安装包，安装应用

类似于一般的windows应用程序安装。

安装成功后，有以下的几个 exe 文件，介绍下：

| 角色 | 文件 |
|--|--|
| server | mongod.exe |
| client | mongo.exe |

更全的介绍，[戳这里](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

# 手动启动 Server

直接在 bin 目录下，启动 mongod.exe 

	C:\Program Files\MongoDB\Server\3.2\bin>mongod.exe
	2016-08-21T11:10:13.873+0800 I CONTROL  [main] Hotfix KB2731284 or later update
	is not installed, will zero-out data files
	2016-08-21T11:10:13.874+0800 I CONTROL  [initandlisten] MongoDB starting : pid=6788 port=27017 dbpath=C:\data\db\ 64-bit host=kcb-PC
	2016-08-21T11:10:13.874+0800 I CONTROL  [initandlisten] targetMinOS: Windows 7/Windows Server 2008 R2
	2016-08-21T11:10:13.875+0800 I CONTROL  [initandlisten] db version v3.2.9
	2016-08-21T11:10:13.875+0800 I CONTROL  [initandlisten] git version: 22ec9e93b40c85fc7cae7d56e7d6a02fd811088c
	2016-08-21T11:10:13.875+0800 I CONTROL  [initandlisten] OpenSSL version: OpenSSL1.0.1p-fips 9 Jul 2015
	2016-08-21T11:10:13.876+0800 I CONTROL  [initandlisten] allocator: tcmalloc
	2016-08-21T11:10:13.876+0800 I CONTROL  [initandlisten] modules: none
	2016-08-21T11:10:13.877+0800 I CONTROL  [initandlisten] build environment:
	2016-08-21T11:10:13.877+0800 I CONTROL  [initandlisten]     distmod: 2008plus-ssl
	2016-08-21T11:10:13.877+0800 I CONTROL  [initandlisten]     distarch: x86_64
	2016-08-21T11:10:13.878+0800 I CONTROL  [initandlisten]     target_arch: x86_64
	2016-08-21T11:10:13.878+0800 I CONTROL  [initandlisten] options: {}
	2016-08-21T11:10:13.880+0800 I STORAGE  [initandlisten] exception in initAndListen: 29 Data directory C:\data\db\ not found., terminating
	2016-08-21T11:10:13.880+0800 I CONTROL  [initandlisten] dbexit:  rc: 100

可以看到，当什么参数都没有的时候，系统默认参数：  port=27017 dbpath=C:\data\db

指定了server的监听端口，文件存放的地址。但是抛出错误了，因为没有检查到 `C:\data\db`，这个路径不存在。所以启动 server 有参数的。:)

2种方式：

1. 直接在命令行中输入参数，类似于：

		> mongod.exe --dbpath D:\data_mongdb\db

2. 使用配置文件

		> mongod.exe --config mongod.conf

	config 文件的配置，[戳这里](https://docs.mongodb.com/manual/reference/configuration-options/)

# server 启动起来了，我们使用 mongo.exe 连接测试看看

	C:\Program Files\MongoDB\Server\3.2\bin>mongo.exe
	2016-08-21T11:37:03.360+0800 I CONTROL  [main] Hotfix KB2731284 or later update is not installed, will zero-out data files MongoDB shell version: 3.2.9
	connecting to: test
	Welcome to the MongoDB shell.
	For interactive help, type "help".
	For more comprehensive documentation, see
	        http://docs.mongodb.org/
	Questions? Try the support group
	        http://groups.google.com/group/mongodb-user
	> dbs
	2016-08-21T11:37:04.956+0800 E QUERY    [thread1] ReferenceError: dbs is not def
	ined :
	@(shell):1:1

到此，MongDB server 启动成功了。

# tips

在这个过程中，我们可以看到，启动 server 会在桌面上留下一个dos窗口，并且还不能关闭。多不方便。
同时，每次启动server都要在dos中去对应的目录下执行这个命令，太不方便了。

建议将 mongdb server 注册为 window 服务，开机自动启动。

使用 window 的 sc 命令创建服务。`mongDbServiceCreate.bat`

	sc create MongoDB binPath= "C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe --service --config=\"D:\data_mongodb\mongod.conf\"" start= "auto" DisplayName= "MongDB"

启动服务：

	> net start MongoDB