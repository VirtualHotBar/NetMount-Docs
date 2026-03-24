# 在 Mac 上使用

:::tip 提示
macOS 需要安装依赖：[macfuse](https://macfuse.github.io/) 或 [fuse-t](https://www.fuse-t.org/) 。
:::

## 安装

### 安装依赖


### 安装NetMount

在[NetMount 的官网下载页](https://www.netmount.cn/download)下载 Mac 版安装包，下载后打开安装包将 NetMount 拖到应用程序文件夹即可。

### 常见问题
#### 安装后无法打开
提示“NetMount.app”已损坏，无法打开。

因为软件包未签名，需要使用以下命令取消签名检查：

`xattr -r -d com.apple.quarantine /Applications/NetMount.app`
