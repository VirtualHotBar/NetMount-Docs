# 在 Mac 上使用

:::tip 提示
macOS 挂载后端建议优先使用 `nfsmount`，其次 `fuse-t`。仅在有兼容性需求时再使用 `macfuse`。
:::

## 安装
**Intel 处理器的 Mac 请暂时使用旧版[(1.0.4)](https://github.com/VirtualHotBar/NetMount/releases/tag/v1.0.4)**

在[NetMount 的官网下载页](https://www.netmount.cn/download)下载 Mac 版安装包，下载后打开安装包将 NetMount 拖到应用程序文件夹即可。

### 常见问题
#### 安装后无法打开
提示“NetMount.app”已损坏，无法打开。

因为软件包未签名，需要使用以下命令取消签名检查：

`xattr -r -d com.apple.quarantine /Applications/NetMount.app`
