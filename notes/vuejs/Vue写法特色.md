抛开 `angularjs`，我们比较 `react` 和 `vue` 的区别。渲染效率的问题先放开，个人主要2个方面：

1. 文件书写格式方面

2. 组件组织方式

## 1. 写法格式不同

`react` 的 `jsx` 语法，主要将模板写到 `js` 文件中，虽然模板写法不再是字符串格式，类似 `html` 格式。但是在
`js` 文件中，无语法高亮，语法查错不明显。

    // react 写法

    <!-- html -->
    <div id="example"></div>

    <!-- js -->
    class LikeButton extends React.Component {
      constructor() {
        super();
        this.state = {
          liked: false
        };
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick() {
        this.setState({liked: !this.state.liked});
      }
      render() {
        const text = this.state.liked ? 'liked' : 'haven\'t liked';
        return (
          <div onClick={this.handleClick}>
            You {text} this. Click to toggle.
          </div>
        );
      }
    }

    ReactDOM.render(
      <LikeButton />,
      document.getElementById('example')
    );

这里看到，`react` 的数据管理是在组件的 `state` 中管理，`state` 改变触发。现在看看 `Vue` 的类似实现。

// vue 写法

    <!-- html -->
    <div id="example" @click="handleClick">
      You {{liked ? "liked" : "haven\'t liked"}} this. Click to toggle.
    </div>

    <!-- js -->
    var vm = new Vue({
      el: "#example",
      data: {
        liked: false
      },
      methods: {
        handleClick: function() {
          this.liked = !this.liked;
        }
      }
    })

可以看到，`react` 的实现，类似于 `Java` 或者 `C++` 这类编译型语言。对 `html` 语法没有那种连贯性。
学习前端知识的初学者，遇到这个看起来比较困难。

`Vue` 的实现就比较好看形象了。如果再修改下那个三目表达式，那么看起来和 `html` 没什么两样。类似这样

    <!-- html -->
    <div id="example" @click="handleClick">
      You {{text}} this. Click to toggle.
    </div>

    <!-- js -->
    var vm = new Vue({
      el: "#example",
      data: {
        liked: false
      },
      computed: {
        text: function() {
          return this.liked ? "liked" : "haven\'t liked";
        }
      },
      methods: {
        handleClick: function() {
          this.liked = !this.liked;
        }
      }
    })

这样看来，`Vue` 的写法，更贴近前端开发人员的思路，学习也容易些。

## 2. 组件组织方式

借助于 `babel` 工具，`react` 和 `vue` 的组件实现都可以分成一个个文件。组件的引用方式2者都遵循 
`CommonJS` 模块规范。

    <!-- react 写法 -->
    <!-- example.html -->
    <div id="example"></div>

    <!-- hello.js -->
    class Hello extends React.Component {
      
      render() {
        return <h1>Hello world</h1>;
      }
    }

    module.exports = Hello;

    <!-- app.js -->
    var Hello = require("./hello");

    ReactDOM.render(
      <Hello />,
      document.getElementById("example")
    );

下面是 `Vue` 实现

    <!-- vue 写法 -->
    <!-- example.html -->
    <div id="app"></div>

    <!-- hello.vue -->
    <template>
      <h1>Hello world</h1>
    </template>

    <script>
      
      module.exports = {
        data: function() {
          return {
            msg: "hello world"
          }
        }
      }
    </script>

    <!-- app.js -->
    import Hello from "./hello.vue"

    new Vue({
      el: "#app",
      render: function(h) {
        return h(Hello);
      }
    })

下面，我们需要为我们的 `Hello world` 添加一个红色样式。

    <!-- react hello.js -->
    var clsRed = {
      color: "red"
    };

    class Hello extends React.Component {
          
      render() {
        return <h1 style={clsRed}>Hello world</h1>;
      }
    }
    ...

    <!-- vue hello.vue -->
    ...
    <style>
      h1 {
        color: red;
      }
    </style>

区别：

`react` 内联的是 `style`, 同时如果需要引入 `class`，这里需要单独写个 `css`
文件，然后引入。可以是全局或者局部，使用 `webpack` 可以做到。`vue` 可以很轻松
的做到，添加 `style` 或者 `class` 样式。