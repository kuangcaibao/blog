什么是 flex 布局
===

## 传统的布局是基于盒模型, 什么是盒模型? 

1. margin 	外间距
2. border 	边框
3. padding 	内间距
4. 具体的内容
5. float	是否浮动?

这个布局一般是什么样的? `display` + `position` + `float`

	// 达到居中效果
	{
		display: block;
		width: 100px;
		margin: auto auto;
	}

但是垂直居中,不好实现.  `line-height`?

flex是一种新的布局,并慢慢成为主流.

## 什么是 flex

这是一个 css3 属性, 浏览器的支持情况:

![浏览器支持flex](./res/flex_browser.jpg)

flex 相对于传统的优势, 网上的例子都是使用垂直居中来说.

## 简单语法

[实例1](flex.html)

设置了 flex 后, 子节点的 block 属性失效了, float 这些浮动也失效了.

2个div放在一行上, 传统做法: 1. div 的 block 转成 inline, 2. float 浮动.