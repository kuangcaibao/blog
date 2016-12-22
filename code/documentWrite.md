
    <html>

    <head>
      <title>write example</title>

      <!-- 情形1 -->
      <script type="text/javascript">

        document.write("<h1>Hello world</h1>");

      </script>

    </head>

    <body onload="newContent();">
      <p>Some original document content.</p>
    </body>
      <script>
        <!-- 情形4 -->
        function newContent() {
          // alert("load new content");
          // document.open();
          document.write("<h1>Hello world</h1>");
          // document.close();
        }

        <!-- 情形2 -->
        document.write("<h1>Hello world</h1>");
        
        <!-- 情形3 -->
        setTimeout(function() {
          document.write("<h1>Hello world</h1>");
        }, 1000);

      </script>

    </html>


页面开始构建的时候，document 处于打开状态，类似于 `document.open()` 的效果。

这时可以通过 `document.write` 向文档流中添加内容，（文档的当前位置）。

### 情形1,2

2条信息都显示了。因为在执行 `document.write` 的时候，文档没有被关闭。

### 情形3,4

这个时候，代码执行的时候，页面已经渲染完成，文档处于关闭状态。后面再
执行 `document.write` 的时候，文档重新打开，再向里面写内容，这时会覆盖掉原来的内容。