## 1. `monkeyrunner` `raw_input()` 接收输入后不运行后面的代码

这个被发现是 `jpython` 的一个 `bug`, `python` 版本 `jython-standalone-2.5.3.jar`。
当前你使用的 `jpython` 版本可以在 `${ANDROID_HOME}\tools\lib` 下可以看到。

fix：

[https://code.google.com/p/android/issues/detail?id=56318](https://code.google.com/p/android/issues/detail?id=56318)

## 2. 使用天天模拟器创建一个虚拟设备，使用 `adb devices` 检查不出来

这里是因为我们要手动连接天天模拟器，这里需要 `ip` 和 `port`。

![ttmnq.png](./imgs/ttmnq.png)

从上面的截图，可以看到文件夹 `TianTian`, `TianTian_1`, `TianTian_2` ...

这里的每一个文件夹内容表示一个模拟器，我这里创建了3个模拟器，所以有三个文件夹。要连接哪个模拟器，查看对应
模拟器下的连接 `ip` 地址，可以查看下面内容：

    <!--/TianTian.vbox-->
    <VirtualBox ...>
      <Machine ...>
        ...
        <Hardware ...>
          ...
          <Network>
            <Adapter ...>
              ...
              <NAT>
                ...
                <Forwarding name="AdbPort" proto="1" hostip="127.0.0.1" hostport="6555" guestip="10.0.2.15" guestport="5555"/>
              </NAT>
            </Adapter>
          </Network>
        </Hardware>
      </Machine>
    </VirtualBox>

这里看到连接地址：`hostip`, `hostport`

在 `dos` 下运行命令：

    adb connect [hostip]:[hostport]

连接模拟器，到此 `type` 下面命令就可以查询到模拟器了。

    adb devices

## 3. MonkeyRunner 字符编码问题

`dos` 命令 `chcp` 的介绍和使用，[点击这里](https://my.oschina.net/HIJAY/blog/333221)

显示当前 `dos` 环境下的编码格式

    > chcp

切换到简体中文编码格式

    > chcp 936

切换到英文编码格式

    > chcp 437

切换到 `utf-8` 编码格式

    > chcp 65001

如果在 `monkeyrunner` 中打印内容，报如下错误：

    LookupError: unknown encoding 'ms936'

这个就是编码问题，执行上面的 `chcp` 命令，切换我们需要的编码。