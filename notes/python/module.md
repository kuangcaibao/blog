这里介绍 `python module` 特性和用法。

### 介绍

[python 官方文档](https://docs.python.org/2/tutorial/modules.html)

### 变量作用域

主模块导入的变量，是否在子模块中也可以使用。 `不能使用`

    # /test/main.py

    import time
    import sys, os

    try:
      import foo
    except ValueError as e:
      sys.path.append(os.getcwd());
      import foo

    print foo.hello();

    # /test/foo.py

    def hello():
      print "time is " + time.asctime(time.localtime(time.time()));

执行 `main.py`

    F:\my-code\blog\notes\test>python main.py
    Traceback (most recent call last):
      File "main.py", line 10, in <module>
        print foo.hello();
      File "F:\my-code\blog\notes\test\foo.py", line 2, in hello
        print "time is " + time.asctime(time.localtime(time.time()));
    NameError: global name 'time' is not defined

### 相对导入模块问题

测试代码：

    # /test/main.py

    from . import foo

    print foo.hello();

    # /test/foo.py

    import time

    def hello():
      print time.asctime(time.localtime(time.time()));

    # /test/__init__.py

执行 `main.py`:

    F:\my-code\blog\notes\python>python main.py
    Traceback (most recent call last):
      File "main.py", line 8, in <module>
        from . import foo
    ValueError: Attempted relative import in non-package

fix1:

在 `test` 目录下添加 `__init__`，将 `test` 变成一个 `package`。在上一级目录执行 `main.py`，如下：

    F:\my-code\blog\notes>python -m main

appendix:

[How to fix “Attempted relative import in non-package” even with __init__.py](http://stackoverflow.com/questions/11536764/how-to-fix-attempted-relative-import-in-non-package-even-with-init-py)