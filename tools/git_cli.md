在这里介绍 git 的控制台命令

git 操作流程一般：

1. 初始化一个仓库， 或者 clone 一个已有的仓库

2. 修改文件， 添加修改的文件到暂存区（Index）

3. 提交修改文件到 HEAD 区


### Step1

初始化一个仓库

	> mkdir a-git-pro
	> cd a-git-pro
	> git init 

clone一个已有的仓库

	> git clone git@github.com:kuangcaibao/blog.git [name]

	> git clone https://github.com/kuangcaibao/blog.git [name]

	> git clone ../blog [name]

### Step2

现在有一个仓库了，我们需要干点事。修改，添加文件， blabla ...

`git status`

检查当前分支下修改过的文件。


`git add`

添加文件到暂存区（Index）中。可以 

`git add <filename>` 添加单个文件

`git add *` 添加所有的修改文件


### Step3

`git commit -m [msg]`

提交修改文件到 HEAD 区，会有一个 commit SHA 值，表示版本号。

## 分支操作

## 更新操作

## 冲突解决