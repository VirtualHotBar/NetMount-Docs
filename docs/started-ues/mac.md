# 在 Mac 上使用

:::tip 提示
在Mac上使用NetMount需要安装MacFUSE才能挂载存储，下载地址：[https://osxfuse.github.io/](https://osxfuse.github.io/)。
:::

## 安装
在[NetMount的官网下载页](https://www.netmount.cn/download)上下载Mac版安装包，下载后打开安装包将NetMount拖到程序文件夹中即可。

### 常见问题
#### 安装后无法打开
提示“NetMount.app”已损坏，无法打开。 

因为软件包未签名，需要使用以下命令取消签名检查：

`xattr -r -d com.apple.quarantine ./NetMount.app`
<!-- ![](https://p1.hotpe.top/i/p/1/665b21e5e60ee.png) -->
