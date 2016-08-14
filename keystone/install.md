安装 `node` 和 `MongoDB`

环境：

- `windows 64bit`


下载对应的安装`msi`文件，按提示安装。

### Tips

- `MongoDB` 安装成功后，我们需要将其设置为服务，并在开机的时候自动启动这个服务。
这样不用每次开机都去手动启动 `MongoDB` 的 `server` 来提供服务。

	<b>手动启动 `MongoDB server` , ( `DOS` 下进入安装目录的 `bin` 文件夹下 )</b>

		bin> mongod --logpath D:\MongoDB\logs\mongodb.log --logappend --dbpath D:\MongoDB\data --directoryperdb

	`--logpath`  log文件路径

	`--logappend` log文件内容以向后添加的方式记录

	`--dbpath`  数据库文件存放路径

	> 这里的2个文件路径要事先建立，否则报错，启动不了。

	<b>创建服务：</b>

		sc [servername] create Servicename [Optionname= Optionvalue]

	`servername` 远程服务器地址，可以远程操作。如果是本机，这个参数不用配置。

	`Servicename` 服务名，将要建立的服务名

	`Optionname= Optionvalue` 参数名称和对应的值

	- `type`, 建立服务的类型，默认为 `share`

	- `start`, 启动服务类型，默认 `demand`(手动)

	- `binPath`, 启动路径和参数

	这里创建 `MongoDB` 服务的参数

		> sc create MongoDB binPath= "\"C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe\" --dbpath \"D:\MongoDB\data\" --directoryperdb --logpath \"D:\MongoDB\log\mongodb.log\" --logappend" start= auto

	在 `win7`, `win8` 会由于安全策略问题而使得在 `Dos` 下执行失败，报 `[SC] OpenSCManager 失败 5:`。所以我们直接把这些命令写在 `bat` 文件中，以管理员的身份运行。

		:: createMongoDBService.bat
		sc create MongoDB binPath= "\"C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe\" --dbpath D:\MongoDB\data --directoryperdb --logpath D:\MongoDB\log\mongodb.log --logappend" start= auto