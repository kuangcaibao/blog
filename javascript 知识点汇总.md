> 这里是 JavaScript 中一些比较有趣的知识点汇总

## JavaScript 异步编程

问题：`callback hell` 回调噩梦，代码可读性和逻辑性不好掌控

解决：

1. [Promise](./js-promise.md)

2. 协程处理 [Generator](./js-generator.md)

3. async await 方式

  相对于 `generator`，它有一个内置的执行器，不需要想 `generator` 那样需要一个执行器（类似的库 `co`）。