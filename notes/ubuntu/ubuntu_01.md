这是一个 `Ubuntu` 操作的学习专题，从一个小白开始入门。

# 1. 准备一个 `Ubuntu` 云服务器

阿里云还是腾讯云，随便选择。

选择计费模式：按时计费，按量收费。这里本人选择阿里云。

# 2. 有了一个 `Ubuntu` 系统，做什么

生成示例后，我们可以使用 `SSH客户端` 来连接我们的云服务器。

连接上了后，做什么，看看目录结构，还是安装一个包试试？？？

## 2.1 `Ubuntu` 包管理命令 `apt-*`

我们以一个安装 `nodejs` 包，为例。

### 1. 查询包

查询我们要安装的包, 查找软件包名称和描述包含 pattern 的软件包 (可以是安装了也可以是没有安装)，可以用参数来限制是否已经安装

	apt-cache search node

擦，太多内容了，没什么用。后面的那个 `node` 名称，可以支持正则表达式，来过滤没有用的包名。例如我们要搜索 `nodejs`, 而不是
包含这个词语的包名，`apt-cache search ^nodejs$`

### 2. 安装包

	apt-get install nodejs

`nodejs` 安装成功后，使用 `node -v` 可以查看 `node` 的版本，如果安装成功，会显示版本号。但是这个时候，如果输入 `npm -v` 会报错，
说 `npm` 没有安装。why? 
[https://github.com/nodejs-tw/nodejs-wiki-book/blob/master/zh-tw/node_npm.rst](https://github.com/nodejs-tw/nodejs-wiki-book/blob/master/zh-tw/node_npm.rst)

### 3. 卸载包

	apt-get remove nodejs


链接  
[http://wiki.ubuntu.org.cn/%E5%8C%85%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%E6%8C%87%E5%8D%97](http://wiki.ubuntu.org.cn/%E5%8C%85%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%E6%8C%87%E5%8D%97)

### 4. 我们再来安装一个 `git`

	apt-get install git

### 5. apt-get install 安装的包一般安装在哪里

