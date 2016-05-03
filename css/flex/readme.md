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

水平轴(main axis), 纵轴(cross axis).

## 简单语法

2个概念 `container(容器)` 和 `item(项目)`. 简单说, 如果定义一个元素为 flex 布局, 那么他的子元素自动成为了 flex 布局的项目.

`container` 有如下属性:

	flex-direction
	flex-wrap
	flex-flow
	justify-content
	align-items
	align-content

### flex-direction 

项目(item)排列方向, 可取4个值: 

1. `row` 			默认值, 水平方向排列, 起点在左端
2. `row-inverse` 	水平方向排列, 起点在右端
3. `column` 	 	纵轴方向排列, 起点在上方
4. `column-inverse`	纵轴方向排列, 起点在下方

### flex-wrap

是否换行, 可取3个值:

1. `nowrap`			默认值, 不换行
2. `wrap`			换行, 第一行在上方
3. `wrap-reverse`	换行, 第一行在下方

### flex-flow

flex-direction 和 flex-wrap 的简写

	flex-flow: row nowrap;  // 默认

### justify-content

定义 item 在主轴(水平轴)上的对齐方式, 可取5个值:

1. `flex-start`		默认值, 左对齐
2. `flex-end`		右对齐
3. `center`			居中
4. `space-between`	两端对齐, 项目(item)之间间距相等
5. `space-around`	每个项目2侧的间隔相等, 项目间的间隔比项目与边框的间隔大一倍

![效果图](./res/justify-content.png)

### align-items

定义项目在交叉轴(纵轴)上的对齐方式, 可取5个值:

1. `flex-start`		纵轴上方对齐
2. `flex-end`		纵轴下方对齐
3. `center`			纵轴中间对齐
4. `base-line`		项目第一行文字基线对齐
5. `stretch`		默认值, 如果项目未设置高度, 那么将占整个容器的高度

![效果图](./res/align-item.png)

### align-content

定义多根轴线的对齐方式. 如果只有一根轴线, 则不起作用, 可取6个值

## 实例

1. 设置 flex 后, 子节点的某些属性就失效了: float , block 等

[实例1](flex1.html)

