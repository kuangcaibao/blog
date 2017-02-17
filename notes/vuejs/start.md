这篇说明，是这段时间学习使用 `vue` 的一个总结开始。

## 1. 前言

语言发展的趋势，一般是为了解决某个问题来达到快速开发，快速迭代的目的，提高生产力。前端领域由于应用规模的扩大，前后端概念的普及和多种实现。
使得前端领域也类似于 `JavaWeb` 那样做 `MV*M`。 实现的框架有 `react`, `angularjs`, `vue`等。

这篇总结介绍 `vue`，介绍或者使用一种框架。个人觉得可以从以下几个方面入手：

1. 框架语法

2. [框架核心概念，或者特点](./Vue写法特色.md) 

3. 数据管理，模板，路由等等。

## 2. 语法

这里以 `browser` 形式的 `vue` 做例子。引入 `vue` 文件，`cdn` 地址 `https://unpkg.com/vue/dist/vue.js`。

### 2.1 构造函数

每个 `vue app` 都是从实例化一个实例开始，构造函数 `new Vue({...})`。一个简单的例子：

    <!--example.html-->
    <!DOCTYPE html>
    <html>
    <head>
      <title>a simple vue example</title>
      <meta charset="utf-8">
    </head>
    <body>
    <h1 id="app">{{msg}}</h1>
    </body>
    <script type="text/javascript" src="https://unpkg.com/vue/dist/vue.js"></script>
    <script type="text/javascript">

    window.onload = function() {

      var vm = new Vue({
        el: "#app",
        data: {
          msg: "Hello World"
        }
      });

      // 定时器改变 msg 值
      setInterval(function() {
        vm.msg = vm.msg.split("").reverse().join("");
      }, 2000);
      
    }

    </script>
    </html>

### 2.2 html 标签语法

网页显示内容：`标签` + `样式`。 `javascript` 的作用也是去改变 `dom` 结构和 `style`。总的来说，`vue`
也是改变数据(`model`)然后更新显示(`view`)。

html变量

    <span>{{msg}}</span>

标签绑定属性

    <span v-bind:title="msg">{{msg}}</span>

条件判断

    <span v-if="">...</span>
    
循环

    <ul>
      <li v-for="item in items">{{item}}</li>
    </ul>

绑定 `class`

    <span v-bind:class="{redClass: isred}">Vue</span>

通过变量 `isred` 来判断，该 `span` 标签是否显示样式类 `redClass`。

绑定内联样式 `style`

    <span v-bind:style="{color: 'red'}">Vue</span>

`input` 输入框，输入数据绑定

    <input v-model="inputValue" placeholder="edit me">

`textarea`

    <textarea v-model="textareaValue"></textarea>

`checkbox`

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>

`radio`

    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>

`select`

    <select v-model="selected">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>

### 2.3 数据

`Vue` 中的数据定义在 `Vue` 示例中，包括 `data`, `computed`, `methods`。

`computed` 这个计算属性，涉及的变量可以依赖 `data` 中的属性，`data` 中
属性变了，重新计算值（和 `methods` 的区别在于每次触发更新的时候，如果
`computed` 中属性涉及的变量没有改变，则不会重新计算。`methods` 每次 `render`
的时候，都会计算一遍）。

`methods` 这个用于事件处理函数。

    <!--example.html-->
    <!DOCTYPE html>
    <html>
    <head>
      <title>data</title>
    </head>
    <body>
    <h1 id="app">{{msg}}</h1>
    </body>
    <script type="text/javascript" src="https://unpkg.com/vue/dist/vue.js"></script>
    <script type="text/javascript">
      window.onload = function() {
        var vm = new Vue({
          el: "#app",
          data: {
            msg: "Hello world"
          }
        });
      }
    </script>
    </html>

### 2.4 事件

`Vue` 中可以在标签上绑定事件，与正常的 `html` 事件类似。在标签中使用 `v-on` 来做绑定。

    <button v-on:click="console.log('You have clicked!')">click me</button>

事件有修饰符：`.stop`, `.prevent`, `capture`, `.self`, `once`

    <!-- 阻止单击事件冒泡 -->
    <a v-on:click.stop="doThis"></a>
    <!-- 提交事件不再重载页面 -->
    <form v-on:submit.prevent="onSubmit"></form>
    <!-- 修饰符可以串联  -->
    <a v-on:click.stop.prevent="doThat"></a>
    <!-- 只有修饰符 -->
    <form v-on:submit.prevent></form>
    <!-- 添加事件侦听器时使用事件捕获模式 -->
    <div v-on:click.capture="doThis">...</div>
    <!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
    <div v-on:click.self="doThat">...</div>

    <!-- the click event will be triggered at most once -->
    <a v-on:click.once="doThis"></a>

对于按键事件，也有修饰符：`.enter`, `.tab`, `.delete`, `.esc`, `.space`, `.up`, `.down`, `.left`, `.right`。

这里绑定的事件处理都可以定义在 `Vue` 示例中的 `methods` 中。

### 2.5 总结

> 为什么在 HTML 中监听事件?

> 你可能注意到这种事件监听的方式违背了关注点分离（separation of concern）传统理念。不必担心，因为所有的 Vue.js 事件处理方法和表达式都严格绑定在当前视图的 ViewModel 上，它不会导致任何维护上的困难。实际上，使用 v-on 有几个好处：

> 1. 扫一眼 HTML 模板便能轻松定位在 JavaScript 代码里对应的方法。

> 2. 因为你无须在 JavaScript 里手动绑定事件，你的 ViewModel 代码可以是非常纯粹的逻辑，和 DOM 完全解耦，更易于测试。

> 3. 当一个 ViewModel 被销毁时，所有的事件处理器都会自动被删除。你无须担心如何自己清理它们。

下一篇介绍 `Vue` 的显著特点。

## 3. 参考

[https://cn.vuejs.org/v2/guide/](https://cn.vuejs.org/v2/guide/)