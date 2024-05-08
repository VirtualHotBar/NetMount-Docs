---
sidebar_position: 0.1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# OneDrive


## 过程

### 创建应用
#### 打开Microsoft Azure 应用注册页面, 点击`新注册`按钮:
- [世纪互联](https://entra.microsoftonline.cn/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade/quickStartType~/null/sourceType/Microsoft_AAD_IAM)
- [国际版](https://entra.microsoft.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade/quickStartType~/null/sourceType/Microsoft_AAD_IAM)


#### 填写应用信息，点击`注册`按钮:
- 名称: 填写任意名称
- 支持的帐户类型: 选择`任何组织目录中的帐户和 Microsoft 个人帐户（例如 Skype、Xbox、Outlook）`
- 重定向 URI: 选择Web 填写`http://localhost:53682/`

#### 注册完成后，**复制`应用(客户端) ID`**，在后续步骤中会用到。

![](https://p1.hotpe.top/i/p/1/663b09abcacd7.png)

### 添加权限

#### 点击`API权限`，点击`Microsoft Graph`:
- 选择搜索`File`相关权限
- 选择`Files.ReadWrite.All`(推荐勾选:`Files.Read Files.ReadWrite Files.Read.All Files.ReadWrite.All Sites.Read.All offline_access`)
- 点击`添加权限`按钮
![](https://p1.hotpe.top/i/p/1/663b0fa720752.png)


#### 点击`证书和密码`，点击`新建客户端密码`按钮:
- 说明: 填写任意说明
- 过期时间: 选择`在2年后过期`(建议选最长)
- 点击`添加`按钮

添加完成后，**复制`值`**（客户端密码，仅显示一次），在后续步骤中会用到。

![](https://p1.hotpe.top/i/p/1/663b0d835b735.png)

### 添加存储

在NetMount中输入`应用(客户端) ID`和`客户端密码`，选择对应区域，点击`保存`按钮:
- 可能会打开浏览器，请登录账号，并授权应用

<!-- ![](https://p1.hotpe.top/i/p/1/663b1272c71d2.png) -->

## 参数
详见:https://rclone.org/onedrive/#standard-options