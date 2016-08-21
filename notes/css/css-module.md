css-mo# 0. css module 解决什么问题

网页载入多个 `css` 文件，`css` 文件中定义的 `class` 都是全局的，也就是是说，其他小伙伴定义的 `class` 类，你也可以用到。
在这种情形下，一个大型的项目，类表有很多，类名称也会变得很多。这样会遇到一个问题，重命名的问题。后面的类会覆盖相同名称
的前面的类。

解决方法：

- 统一命名规则

- css 模块化

统一命名规则，这个需要一个 leader 了，技术高，业务熟悉。但是如果是一个新的项目的话，这个条件感觉就不成熟了，前期只能各自写着，
后面代码重构的时候，在规范命名。

模块化就很开心了，你定义你的类，我定义我的。互不干扰，多high！但是所有的 `css` 还是会载入到 `html` 中的，名称还是在全局命名空间里的。
那么这样怎么达到模块化呢？<b style='color: red'>类名哈希得到</b>。

# 1. webpack 下 css-loader

`webpack` 使用 `css-loader` 模块

	{
		test: /.css$/,
		loader: "style!css?modules&localIdentName=[你的命名规则]"	
	}

传统的命名规则可以 `google`, 如 `[hash:base64:5]`。

这样每个小伙伴都可以写自己的 `css` 了，不用关心自己的 `css` 是否和其他小伙伴的冲突，很开心。`css` 后面不是有 `sass` 和 `less` 吗？
这又是个什么东东，为什么会弄出这个呢？个人理解就是以开发语言的思维来考虑 `css` 了，让 `css` 能够继承和定义变量。当然还有
更高级的功能，个人没有深入了解。

写着写着，突然有个小伙伴觉得你这个组件的样式很不错，他也想用这个样式，但是他很懒，不想去重复你的工作，这时就需要能够把
你的这段 `css` 继承过去。并且他使用了你的 `css` 片段，如果仅仅是简单的 `copy`, 那么后期，你的组件样式改了，他不能同步了，
所以想继承你的类。

可以这样做：

	.className {
		color: green;
		background: red;
	}

	.otherClassName {
		composes: className;
		color: yellow;
	}

可以使用 `composes` 这个操作实现。也可以这样操作不同 `css` 文件中的类，如：

	// a.css
	.className {
		color: green;
		background: red;
	}

	// b.css
	.otherClassName {
		composes: className from "./a.css";
		color: yellow;
	}

- 这里的 `compose` 不是直接将 `class` 直接替换到对应的地方, 而是2个类名并列放着，类似这样： 

		<div class="className otherClassName">

参考：

<https://github.com/css-modules/css-modules>

# 2. postcss-loader

这个工具解决什么问题？

> PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.

> PostCSS is used by industry leaders including Google, Twitter, Alibaba, and Shopify. The Autoprefixer PostCSS plugin is one of the most popular CSS processors.

这个以 `js` 插件的模式来转换 `css` 样式。先给出 `webpack` 的配置：


	{
		"test": /.css$/,
		"loader": "style!css?module&localIdentName=[...]!postcss"
	}

具体完成什么功能，需要使用其他的插件。`css-module` 解决了 `class` 的继承，那么变量可以获得继承吗？最近的项目中 `react` 组件写多了，每个样式中都要一些字的颜色是相同的。
后期如果美工要求你把所有的样式的某个字颜色改下。如果去改所有的组件，想想都觉得可怕。同时目前的应用都支持换肤操作，
这样不同的肤色有不同的配色方案。这就需要我们把各个组件中的字体颜色提取出来写到公共文件中，`less` 中也有变量的定义。

`postcss-modules-values` 就是解决这个变量得共享问题的。（目前我是这样用的）