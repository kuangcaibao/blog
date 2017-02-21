### 问题描述

在 `Vue` 页面中有一个 `button` 按钮，绑定一个 `click` 事件。`input` 输入框，绑定 `blur` 事件。

`input blur` 事件处理逻辑是隐藏 `button` 按钮。

开始的时候，焦点聚焦到 `input` 中，`button` 按钮显示出来。点击 `button`，事件处理顺序是 `input blur` > `button click`

这时，由于 `button` 隐藏起来了，所以 `click` 事件没有被执行。

why？

### Reporduction Link

[https://jsfiddle.net/kuangcaibao/9x5L2khr/](https://jsfiddle.net/kuangcaibao/9x5L2khr/)

### 原因分析

    This is a standard behavior of the browser. You might want to listen for the mousedown event instead.

    A proper way would be to use more complicated logic:

    Give the button a moment to disappear after the input blur.
    Force the button to be visible if the button itself is focused.

### 参考

[https://github.com/vuejs/vue/issues/3350](https://github.com/vuejs/vue/issues/3350)