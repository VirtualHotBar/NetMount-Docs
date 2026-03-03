---
sidebar_position: 1
---

# 挂载
将云存储挂载到本地文件系统，方便本地访问。

## 挂载策略建议（Issue #102）
新增挂载或排查挂载问题时，建议优先按以下策略配置：

### 缓存模式（CacheMode）
- `writes`：默认推荐，读写平衡，适合大多数场景。
- `full`：兼容性更好，但本地缓存占用明显增加。
- `minimal`：磁盘占用较低，适合轻量浏览和顺序读取。
- `off`：缓存最少，但随机读取性能和兼容性相对较弱。

### macOS 挂载后端（MountType）
- 优先 `nfsmount`（推荐）
- 其次 `fuse-t`
- `macfuse` 仅在确有兼容性需求时使用

### 诊断导出
在设置页导出诊断包后，会包含以下文件用于排障：

- `netmount/config.redacted.json`
- `netmount/mount.snapshot.json`（挂载关键参数快照）
- `logs/*.tail`（组件日志尾部）

## 补充
为什么在 Windows 上挂载到盘符时可能会出现无法访问：
- https://learn.microsoft.com/zh-cn/troubleshoot/windows-client/networking/mapped-drives-not-available-from-elevated-command
- https://forum.rclone.org/t/how-to-mount-onedrive-using-winfsp/21697
