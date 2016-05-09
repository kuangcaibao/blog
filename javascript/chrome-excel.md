### 参考链接

<http://stackoverflow.com/questions/2153979/chrome-extension-how-to-save-a-file-on-disk>

<https://developer.chrome.com/apps/app_codelab_filesystem>

<http://stackoverflow.com/questions/17126453/html-table-to-excel-javascript>

### 网上搜索的常见做法:

## 1. 将数据拼成一个 table 页面, 然后 javascript 代码导出

		var exportExcel = (function() {

			var uri = 'data:application/vnd.ms-excel;charset=utf-8;base64,';
			var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta charset="utf-8"></head><body><table>{table}</table></body></html>';

			var base64 = function(s) { 
				var str = window.btoa(unescape(encodeURIComponent(s))) 
				// console.log(decodeURIComponent(str));
				return str;
				// return window.btoa(unescape(s));
			};

			var format = function(s, c) {
				return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) 
			};

			var formTableStr = function() {

				var tableStr = "";

				// 表头部分添加
				tableStr += "<tr>"
							+ "<td>" + "表头1" + "</td>"
							+ "<td>" + "表头2" + "</td>"
							+ "<td>" + "表头3" + "</td>"
							+ "<td>" + "表头4" + "</td>"
							+ "<td>" + "表头5" + "</td>"
							+ "<td>" + "表头6" + "</td>"
							+ "<td>" + "表头7" + "</td>"
							+ "<td>" + "表头8" + "</td>"
							+ "<td>" + "表头9" + "</td>"
							+ "<td>" + "表头10" + "</td>"
						+ "</tr>";

				// 数据部分添加
				for(var i = 0; i< data.length; i++) {
					tableStr += "<tr>"
								+ "<td>" + data[i]["A01"] + "</td>"
								+ "<td>" + data[i]["A02"] + "</td>"
								+ "<td>" + data[i]["A03"] + "</td>"
								+ "<td>" + data[i]["A04"] + "</td>"
								+ "<td>" + data[i]["A05"] + "</td>"
								+ "<td>" + data[i]["A06"] + "</td>"
								+ "<td>" + data[i]["A07"] + "</td>"
								+ "<td>" + data[i]["A08"] + "</td>"
								+ "<td>" + data[i]["A09"] + "</td>"
								+ "<td>" + data[i]["A10"] + "</td>"
							+ "</tr>";
				}

				return tableStr;

			}

			return function() {
				var ctx = {
					worksheet: name || 'Worksheet', 
					table: formTableStr()
				}

				window.location.href = uri + base64(format(template, ctx));
			}

		})()

这种方式是通过 URI 的方式来下载文件.

注: 

template 中的 `<meta charset="utf-8">` 这个加上可以去掉表格中汉字乱码的情形.

<https://developer.mozilla.org/en-US/docs/Web/HTTP/data_URIs>


## 2. 直接调用api来操作文件???

html5 新特性???

<http://www.html5rocks.com/en/tutorials/file/filesystem/>
<https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications>

### <input type="file">

这个是选取本地文件, 获得本地文件信息, 上传文件.

	// html

	<input type="file" id="file">

	// js
	var file = document.getElementById("file");
	file.files  // 这个获得你选择的文件列表

`File` 这个对象


### FileEntry