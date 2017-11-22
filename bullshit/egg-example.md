使用 `egg` 框架过程中的一些笔记。

# 1. 设置跨域访问

插件：`egg-cors`

使用：`npm install --save egg-cors`

配置内容：

```
// config/config.default.js
exports.security = {
  "domainWhiteList": [ <域名或者ip列表> ]
}

// config/plugin.js
exports.cors = {
  enable: true,
  package: 'egg-cors'
}
```

# 2. 连接数据库

## 2.1 Mysql

插件：`egg-mysql`

使用： `npm install --save egg-mysql`

配置：

```
// config/config.default.js
exports.mysql = {
  // 单数据库信息配置
  client: {
    // host
    host: '127.0.0.1',
    // 端口号
    port: '3306',
    // 用户名
    user: 'root',
    // 密码
    password: '',
    // 数据库名
    database: 'wxaward',
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
};

// config/plugin.js
exports.mysql = {
  // 数据库连接
  enable: true,
  package: 'egg-mysql',
};

```

[参考 https://eggjs.org/zh-cn/tutorials/mysql.html](https://eggjs.org/zh-cn/tutorials/mysql.html)