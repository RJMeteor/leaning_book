---
title: GitHub
author: RJMeteor
createTime: 2024/11/08 10:12:41
permalink: /others/bgt18a3c/
---
## **免密提交和拉取代码**
### 1. windows/linux 生成密钥对

~~~shell
ssh-keygen -t rsa -C "your_email@example.com"
~~~
`your_email@example.com`为注册github账号（可选）、`rsa`为加密算法

找到`.ssh`下的公钥文件`id_rsa.pub`复制里面的内容。

### 2. 登录github账号，进入设置面板，添加SSH授权

<span style="display:flex;justify-content:center;">![feiji.svg](/github/setting_ssh1.png)</span>

<span style="display:flex;justify-content:center;">![feiji.svg](/github/setting_ssh2.png)</span>

<span style="display:flex;justify-content:center;">![feiji.svg](/github/setting_ssh3.png)</span>

### 3. 用SSH地址拉去代码

~~~shell
git clone git@github.com:RJMeteor/handwriting_rpc.git
~~~

<template>

</template>

<script>
export default {
  mounted() {
    // 页面挂载后，检查是否需要重定向
    this.redirectToOtherPage();
  },
  methods: {
    redirectToOtherPage() {
      // 你的重定向逻辑，例如用户是从特定页面打开的
      if (this.$route.query.from === 'specificPage') {
        // 使用Vue Router的push方法进行重定向
        this.$router.push('/other/page');
      }
    },
  },
};
</script>


