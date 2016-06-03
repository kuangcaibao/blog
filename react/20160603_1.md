介绍 `jquery` 等价于 `dom` 原生操作。

# empty()

> $("#id").empty()

	var el = document.getElementById("app");
	var child, nextChild;
	for(child = el.firstChild; child; ) {
		nextChild = child.nextSibling;
		el.removeChild(child);
		child = nextChild;
	}

# append()

> $("#id").append()

这里的 `append` 可以使用 `react` 的 `render` 函数来做

	render(
		<div>Hello wolrd</div>,
		document.getElementById("app")
	)

# css()

> $(".tdxmask").css({ display: "none" });

	var els = document.getElementsByClassName("tdxmask");
	els.forEach(function(el) {
		el.style.display = "none";
	})

# extend() 

> $.extend({}, item.hot.style, {"background-image": "none" })

	style = Object.assign({}, item.hot.style, {"background-image": "none" });

# sibings(), find(), removeClass() 

> $el.siblings().find("span").removeClass("sortup").removeClass("sortdown")

	// 查找某个节点的所有兄弟节点，并返回数组列表
	function siblings(el) {
		var s = [];
		var preEl, nextEl;
		preEl = el.previousSibling;
		nextEl = el.nextSibling;

		// 前面的兄弟节点
		while (preEl) {
			s.push(preEl);
			preEl = preEl.previousSibling;
		}

		// 后面的兄弟节点
		while (nextEl) {
			s.push(nextEl);
			nextEl = nextEl.nextSibling;
		}

		return s;
	}

	// 查询子节点中的某个标签
	function findChildNodesByTagName(el, tagName) {
		var s = [];
		var childNodeList = el.childNodes;

		for(var i = 0; i < childNodeList.length; i++) {
			var cnode = childNodeList[i];
			if(cnode.nodeName.toUpperCase() == tagName.toUpperCase()) {
				s.push(cnode);
			}
		}

		return s;
	}

	let sibs = siblings(el);
	sibs.map( sib => {
		findChildNodesByTagName(sib, "span").map( node => {
			// debugger;
			node.className = "";
		})
	} )