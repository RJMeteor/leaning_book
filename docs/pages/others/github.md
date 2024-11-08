---
title: GitHub
author: RJMeteor
createTime: 2024/11/08 10:12:41
permalink: /others/bgt18a3c/
---
### **免密提交和拉取代码**
::: details
1. windows/linux 生成密钥对
~~~ shell
ssh-keygen -t rsa -C "your_email@example.com"
~~~
`your_email@example.com`为注册github账号（可选）、`rsa`为加密算法

3. 找到`.ssh`下的公钥文件`id_rsa.pub`复制里面的内容。

4. 登录github账号，进入设置面板，添加SSH授权
<span style="display:flex;justify-content:center;">![feiji.svg](/github/setting_ssh1.png)</span>

<span style="display:flex;justify-content:center;">![feiji.svg](/github/setting_ssh2.png)</span>

<span style="display:flex;justify-content:center;">![feiji.svg](/github/setting_ssh3.png)</span>

5. 用SSH地址拉去代码
~~~
git clone git@github.com:RJMeteor/handwriting_rpc.git
~~~
:::




