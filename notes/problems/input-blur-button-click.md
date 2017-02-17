### 问题描述

点击 `li` 下的 `button`，也触发了 `input` 标签的 `blur` 事件，目前看到只执行了 `input` 的 `blur` 事件，`button` 点击事件未执行，why？

### Reporduction Link

[https://jsfiddle.net/kuangcaibao/9x5L2khr/](https://jsfiddle.net/kuangcaibao/9x5L2khr/)

### 原因分析

    This is a standard behavior of the browser. You might want to listen for the mousedown event instead.

    A proper way would be to use more complicated logic:

    Give the button a moment to disappear after the input blur.
    Force the button to be visible if the button itself is focused.

### 参考

[https://github.com/vuejs/vue/issues/3350](https://github.com/vuejs/vue/issues/3350)