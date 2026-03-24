# 在 Mac 上使用

:::tip 提示
macOS 需要安装依赖：[macfuse](https://macfuse.github.io/) 或 [fuse-t](https://www.fuse-t.org/) 。
:::

## 安装

### 安装依赖

以m1芯片的macbook安装[macfuse](https://macfuse.github.io/) 为例
需要“启动安全性实用工具”，具体操作如下：
- 将电脑关机
- 待电脑关机后按住开机键不放，直到进入mac电脑的恢复模式
- 选择用户，并输入开机密码
- 选择选项
<img width="968" height="720" alt="image" src="https://github.com/user-attachments/assets/2e2e32f0-8d3a-4643-b4de-50c70ea638e6" />

- 在顶部导航栏找到“实用工具” -->启动安全性实用工具
<img width="968" height="720" alt="image" src="https://github.com/user-attachments/assets/c527e1e9-a53c-4bb8-8a85-48769a232d80" />

- 选择“安全策略”
<img width="976" height="720" alt="image" src="https://github.com/user-attachments/assets/0293b68e-8c6c-4e77-bcbe-f125c4bf3987" />

- 根据需要选择相关设置
<img width="966" height="720" alt="image" src="https://github.com/user-attachments/assets/0e7105c7-674c-4954-a88a-87c0a9211b88" />

- 设置完成后重启电脑即可

### 安装NetMount

在[NetMount 的官网下载页](https://www.netmount.cn/download)下载 Mac 版安装包，下载后打开安装包将 NetMount 拖到应用程序文件夹即可。

### 常见问题
#### 安装后无法打开
提示“NetMount.app”已损坏，无法打开。

因为软件包未签名，需要使用以下命令取消签名检查：

`xattr -r -d com.apple.quarantine /Applications/NetMount.app`

