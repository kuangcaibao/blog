Ubuntu 装机过程, 使用 root 账户登录

# 1. 安装 git

	apt-get install git

# 2. 创建一个git服务器

1. 创建一个公共账户

		adduser git

2. 选定一个目录作为Git仓库，如 `/srv`, 在该目录下创建一个裸仓库（无工作区）

		git init --bare sample.git

3. 这时创建的 `sample.git` 目录的创建者是 `root`, 我们改下创建者。

		chown -R git:git sample.git

4. 禁用 git 账户登录 `shell`

		vi /ect/passwd

	修改为：`git:x:1000:1000:,,,:/home/git;/usr/bin/git-shell`

5. 到此可以在其他机器上 `clone` 该项目了

		git clone git@[ip]:/srv/sample.git

# 3. 安装 nodejs, npm, mongodb

安装nodejs

	apt-get install nodejs

检验是否安装成功

	node -v

显示版本号，表示安装成功。

安装 npm

	apt-get install python-software-properties
	add-apt-repository ppa:gias-kay-lee/npm
	apt-get update
	apt-get install npm