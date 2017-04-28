### 问题描述：

在自己写弹出框的时候，因为有个背景 shadow 配置，然后导致子节点上的内容也变成透明了。

### 处理：

将 `css` 样式：

    {
      background-color: #333;
      opacity: 0.5;
    }

改成

    {
      background: rgba(0, 0, 0, 0.5);
    }