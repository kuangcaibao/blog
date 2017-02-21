### 1. device.getProperty

获取屏幕分辨率

    from com.android.monkeyrunner import MonkeyRunner, MonkeyDevice

    device = MonkeyRunner.waitForConnection(timeout, devid);
    dw = device.getProperty("display.width");
    dh = device.getProperty("display.height");

### 2. chimpchat.hierarchyviewer 

通过控件 `id` 来操作控件

    from com.android.monkeyrunner import MonkeyRunner, MonkeyDevice, MonkeyImage
    from com.android.chimpchat.hierarchyviewer import HierarchyViewer
    from com.android.monkeyrunner.easy import By

    device = MonkeyRunner.waitForConnection(1, "127.0.0.1:30054");

    # 获取 HierarchyViewer 句柄
    hv = device.getHierarchyViewer();

    # 根据 id 获取 ViewNode
    vnode = hv.findViewById("id/[控件id]");

    # 获取控件的 text 属性
    print hv.getText(vonde);

    # 获取控件的位置
    # getAbsolutePositionOfView  获取控件左上点的绝对位置
    print hv.getAbsolutePositionOfView(vnode);

    # 绝对中心位置
    print hb.getAbsoluteCenterOfView(vnode);


    # 参考 ViewNode.java 中的代码，了解其属性做一些事情
    childnodes = vnode.children;  // 返回对象 List<ViewNode>


[https://android.googlesource.com/platform/tools/swt/+/android-sdk-4.4.2_r1/chimpchat/src/main/java/com/android/chimpchat/hierarchyviewer/HierarchyViewer.java](https://android.googlesource.com/platform/tools/swt/+/android-sdk-4.4.2_r1/chimpchat/src/main/java/com/android/chimpchat/hierarchyviewer/HierarchyViewer.java)

[https://android.googlesource.com/platform/tools/swt/+/android-4.3_r2.1/hierarchyviewer2/hierarchyviewer2lib/src/main/java/com/android/hierarchyviewerlib/models/ViewNode.java](https://android.googlesource.com/platform/tools/swt/+/android-4.3_r2.1/hierarchyviewer2/hierarchyviewer2lib/src/main/java/com/android/hierarchyviewerlib/models/ViewNode.java)