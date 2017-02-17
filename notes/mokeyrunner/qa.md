## 1. `monkeyrunner` `raw_input()` 接收输入后不运行后面的代码

这个被发现是 `jpython` 的一个 `bug`, `python` 版本 `jython-standalone-2.5.3.jar`。
当前你使用的 `jpython` 版本可以在 `${ANDROID_HOME}\tools\lib` 下可以看到。

fix：

[https://code.google.com/p/android/issues/detail?id=56318](https://code.google.com/p/android/issues/detail?id=56318)