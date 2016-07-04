### Ctrl + p
---

1. 可以输入文件名， 打开对应文件。

2. @ 跳转到对应的 Symbols， 在 markdown 语法中，可以跳转到 # 内容。

3. `#` 在当前文件内查找。

4. :num  定位到哪一行。

### Ctrl + Shift + p
---

1. 可以在命令行中切换文本的渲染语法： javascript, markdown, css 等。

### Ctrl + Shift + L
---

多行选择操作。

### Ctrl + d
---

操作相同的多块内容。

### Ctrl + `
---

进入命令行模式

在命令行模式下，install packages 功能注册：（sublime3命令）

	import urllib.request,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)

运行后，可以 Ctrl + Shift + p 中输入 install ，选择安装包操作。

<https://packagecontrol.io/installation>

### 不错的插件工具

1. OmniMarkupPreviewer, 将 markdown 语法文件，可以在浏览器预览，可以导出 html 文件。

	快捷键设置： 

	`Ctrl` + `Alt` + `o` 在浏览器中预览 md 文件

	`Ctrl` + `Alt` + `x` 将 md 文件导出为 html 文件, 

	生成的文件名命名规则修改:  在插件的默认设置中，

		{
			...
			"export_options": {
				// format string for filename timestamp
		        // "timestamp_format" : "_%y%m%d%H%M%S",  // 这个是原来的配置，所以生成的 html 文件名后面带上了这个 format 内容。
				"timestamp_format": "",
			}
		}

2.  Code Snipper Helper

	快捷键来设置 markdown 链接内容。

	`img` + `tab` 等价于  `![Image Title](Image Source)` 
