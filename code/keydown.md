在写前端页面业务的时候, 用户习惯在某个输入框输入,然后 enter, 界面自动聚焦到另外一个输入框.实现方式:

	$(document).keydown(function(event) {
		if(event.keyCode == 13) {
			var curId = event.target.id;
			switch(curId) {
				case "xxx":
					$("#xxx2").focus();
				...
			}
		}
	})