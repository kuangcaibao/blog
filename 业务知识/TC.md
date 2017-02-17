[TOC]

## 委托渠道

通达信客户端这边通过送一个 `TDX_ID_XT_CLITYPE` 字段到 `TC`, `TC` 通过 `/modules/[柜台模块]/[柜台模块].ini` 中的配置，
送不同的柜台值到柜台，以区分渠道。

  [public]

  WTFS_14=7
  WTFS_19=7

左侧是通达信的委托方式，右侧是柜台的渠道字典。

这里手机送的委托方式一般都是20，这个值在登录的时候会送。


## 手机留痕的问题

  // jzxpWin.ini
  MobileStation=1