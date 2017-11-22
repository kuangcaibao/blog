> 介绍 web 端交易项目设计

## 1. 文件目录结构

```
webJy/
  jycx/                                 <!--交易功能实现部分-->
    trade/                              <!--公共文件-->
      pages/                            <!--组件实现文件夹-->
        ...
      commons/                          <!--公共函数处理-->
        ...
      flows/                            <!--业务流程处理实现-->
        app.js                          <!--程序入口js文件-->
        controller.js                   <!---->
    trade57/                            <!--对应券商定制组件-->
      ...
    works/                              <!--公版交易实现-->
      ggt/                              <!--功能大类，如 ggt：港股通-->
        ggtmr.html                      <!--具体交易功能页面文件，如港股通买入-->
        ggtmr_config.js                 <!--具体交易功能界面配置文件-->
        ggtmr_func.js                   <!--具体交易功能业务逻辑文件-->
        ...
      ...                               <!--其他功能文件夹-->
      runtime.js                        <!--这里统一引入其他js文件-->
    works57/                            <!--对应券商定制功能-->
      ...
    config.js                           <!--配置文件，券商配置-->
  libs/                                 <!--第三方库-->
    jquery.js
    sea.js
    seajs-css.js
    vue.js
  tlibs/                                <!--tdx 内部文件-->
    ts_client.js
    connect.js
```

## 2. 一个功能包含文件

每个具体的功能，包含 3 个文件: `[name].html`, `[name]_func.js` 和 `[name]_config.js`。

### 2.1 [name]_config.js

功能配置文件，界面配置，包含内容：

```

```