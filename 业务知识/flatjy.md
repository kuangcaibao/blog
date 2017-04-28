平面化交易约定

1. 事件

各个组件的之间通过事件（发布-订阅）模式来达到解耦。

事件名称命名约定： [组件id]-[操作类型]

如： `tdx-list-xys-show-click`

这个的意思是组件 `tdx-list-xys` 这个组件中显示协议书内容点击事件。

目前已有事件：

```
tdx-list-xysqs-show-click

tdx-dialog-xys-ok-click

tdx-tree-click

tdx-list-normal-query-click

```