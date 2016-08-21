## 为什么推荐使用MarkDown语法,记录blog

Markdown 的目标是实现「易读易写」。[说明](http://www.appinn.com/markdown/)

markdown 是一种以 txt 方式记录日记, 但是可以自动生成 html, 并且显示的还特别漂亮的语法.

我们在记录Blog的时候, 会有多种数据格式的体现, 如图片,表格,代码,文字这些堆叠在一起组成一个比较好看的页面.
以前一般的做法是在某个网站上写blog, 借助他们的富文本插件,在插件输入框中输入,很不方便. 而使用 markdown 语法
写的内容, 在本地他就是一个 txt 文本.但是通过插件在浏览器中会显示的很漂亮.

markdown, 谁用谁满意.

## markdown语法简介

### 标题

	# 一个井号对应h1  依次到 h6

### 段落

每个段落间是以空行分开的.如果没有空行,看作是同一个段落.意思是不会换行.

### 引用

	> 可以嵌套

### 列表

	*  + - 无序列表

	1. xx 有序列表

### 代码块

	`````` 或者直接缩进

### 代码

	`code` 表示代码行,一般使用单词

### 分隔线

3个以上的 星号, 减号 或者 底线

### 链接

	[title](href)

参考式的

	[title][id]

	[id]: http://www.baidu.com

### 图片

	![Alt text](img url)

或者这样

	![Alt text][id]
	[id]: img url

### 强调

使用星号或者底线来表示强调

	* 或者 _  会转换成  <em>

	** 或者 __ 会转换成 <strong>


---

啰嗦了, 直接一张图可以解决

<https://en.wikipedia.org/wiki/Markdown#Example>