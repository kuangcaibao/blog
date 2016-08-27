存放入门代码示例：

	import React from "react";
	import { render } from "react-dom";
	import { browserHistory, Router, Route } from "react-router";

	render(

		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="/about" component={About} />
			<Route>
		</Router>, document.getElementById("app")
	)


将 route 独立出来。

	var routes = (
		<Route path="/" component={App}>
			<Route path="/about" component={About} />
		</Route>
	);

	render(
		<Router history={browserHistory} routes={routes} />,
		document.getElementById("app")
	)


## Link 我们可以对 Link 进行封装

	// NavLink.js
	import React, { Component } from "react";
	import { Link } from "react-router";

	export default class NavLink extends Component {

		render() {

			return <Link {...this.props} activeClassName="active" />
		}
	}

	// App.js
	import NavLink from "./NavLink.js"

	// ...

	<NavLink to="/about">About</NavLink>

## Link

我们可以根据 `Link` 中的 `to` 属性来指定路由的切换，这个交给了 `react-router` 处理。但是如果我要手动切换路径呢？

[stackoverflow](http://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router)