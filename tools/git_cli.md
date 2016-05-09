在这里介绍 git 的控制台命令

git流程:  src -> staged -> commit

### git init

本地初始化一个库

### git clone

克隆版本库, 可以支持多种协议, 网络协议或者本地协议.

	git clone [url] [your rep name]

	git clone git@github.com:kuangcaibao/blog.git
	git clone ./blog blog-clone  // 将本地的 blog 库克隆成 blog-clone 库


克隆远程仓库中的某个分支  (没有这个写法  :( )

	git clone git@github.com:kuangcaibao/kuangcaibao-pro.git -b master local-less




### git status

blabla, 你修改了一些文件, 执行 `git status` 命令查看修改了哪些文件

### git add

	git add *

将修改的文件推到 stage 阶段.

### git commit

将 stage 阶段的文件提交到 git 仓库, 版本更新.

### git branch