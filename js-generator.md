### 1. 背景

`JavaScript` 是一个单线程执行，如果程序 A 需要用到异步程序 B 的结果。一般的编写方式：

```

const funcB = callback => {
  
  setTimeout( () => {

    let result = 100;
    callback(result);

  }, 1000);
}

const funcA = () => {
  
  funcB( result => {

    // 处理逻辑要放到这里

  });

  // funcA 中处理 funcB 回调的结果都要移到回调中做
}

```

写法上看起来好绕，理想的是这样的一种结果

```

const funcA = () => {
  
  let result = yield funcB();

  ...
}
```

### 2. 协程

说说协程的过程：

```
第一步，协程A开始执行。
第二步，协程A执行到一半，进入暂停，执行权转移到协程B。
第三步，（一段时间后）协程B交还执行权。
第四步，协程A恢复执行
```

### 3. Generator

> Generator 函数是协程在 ES6 的实现，最大特点就是可以交出函数的执行权（即暂停执行）。

**定义**

```

  function* func() {
    ...
    
    yield foo();

    ...
  }

```

定义起来虽然看起来很不错，但是要有一个执行他的函数，类似这种：

```
  let g = func();
  g.next()
  ...
```

还是有些不够友好的。[具体代码](./code/js-generator.js)