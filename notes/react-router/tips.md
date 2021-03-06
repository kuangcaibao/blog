
# 1. 父级路径总是 active，当子路径被激活的时候

2种解决方法：

- IndexLink

		import { IndexLink } from "react-router"

		<IndexLink to="/" activeClassName="avtive">Home</IndexLink>

- onlyActiveOnIndex 属性

		<Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link>


# 2. SPA 应用在 `react-router` 下，其他路径报 404

上段 `server.js` 的代码

	var webpack = require('webpack')
	var webpackDevMiddleware = require('webpack-dev-middleware')
	var webpackHotMiddleware = require('webpack-hot-middleware')
	var config = require('./webpack.config.js')
	var path = require("path")

	var express = require("express")
	var app = new express()
	var port = 3000

	var compiler = webpack(config)
	app.use(webpackDevMiddleware(compiler, { 
		noInfo: true, 
		publicPath: config.output.publicPath,
		contentBase: ".",
		historyApiFallback: true 
	}))
	app.use(webpackHotMiddleware(compiler))

	// 将example指向浏览器的根目录
	app.use("/", express.static("example"))

	// 这里将node_modules添加到静态路径，可以获取第3方包的min文件
	app.use("/node_modules", express.static("node_modules"))

	app.listen(port, function(error) {
	  if (error) {
	    console.error(error)
	  } else {
	    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
	  }
	})

在这个里面输入 `localhost:3000` 输出 `example/index.html` 文件。如果这个 `index.html` 页面是一个 `SPA` 页面，那么
会有其他的路径，比如 `localhost:3000/about` 这样，那么直接在浏览器路径中输入这个地址，会报 `404` 错误。

因为这个地方的路径被 `server.js` 接管了，而不是 `react-router`。那么怎么解决这个问题？

	app.get('*', function(req, res) {
	  res.sendFile(path.join(__dirname, 'example/index.html'));
	});

加上上面的代码，未被匹配的路径直接转到 `example/index.html`，这样输入的路径就会被 `react-router` 处理了。

参考：

<https://github.com/webpack/webpack-dev-middleware/issues/46>

<https://github.com/gaearon/react-transform-boilerplate/blob/master/devServer.js>