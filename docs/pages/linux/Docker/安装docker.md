---
title: 安装Docker
author: RJMeteor
createTime: 2024/11/08 04:41:42
permalink: /linux/dockerbasic/
---

## 1.安装docker

### 1.1 操作yum

~~~shell
yum update #更新yum
yum install -y yum-utils #安装工具包
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo #设置yum国内镜像源
~~~

### 1.2 安装前卸载原有的docker

~~~shell
yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
~~~

### 1.3 安装docker

~~~shell
yum install docker-ce docker-ce-cli containerd.io [docker-buildx-plugin | docker-compose-plugin]

# docker-ce[必须]：Docker Community Edition（社区版）的核心引擎，负责管理容器的生命周期，包括创建、运行、停止和删除容器。
# docker-ce-cli[必须]：Docker 命令行工具（CLI），用于与 Docker 引擎交互，执行命令如 docker run、docker ps 等
# containerd.io[必须]：一个工业级的容器运行时，负责底层容器的管理和运行。
# docker-buildx-plugin：Docker Buildx 是一个扩展插件，用于增强 Docker 的构建能力，支持多平台镜像构建（如 ARM、x86 等）
# docker-compose-plugin：Docker Compose 插件，用于定义和运行多容器应用程序。
~~~

### 1.4 启动docker

~~~shell
systemctl start docker #启动docker
systemctl enable docker #设置开机启动docker
~~~

### 1.5 配置容器镜像加速地址

~~~shell
tee /etc/docker/daemon.json <<-'EOF'
{"registry-mirrors": ["https://docker.1ms.run"]}
EOF
~~~

### 1.6 重启启动docker

~~~shell
systemctl daemon-reload #重载配置
systemctl restart docker #重启Docker
~~~



## 2.远程连接docker

### 2.1 修改docker.service开放远程访问

~~~shell
# 编辑
vim /lib/systemd/system/docker.service
~~~

找到该文件中的

~~~sh
ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
~~~

注释或删除改行，替换为如下命令

~~~sh
ExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock
~~~

### 2.2 重启Docker服务

~~~shell
systemctl daemon-reload && systemctl restart docker
~~~

2.3 开放端口

~~~shell
firewall-cmd --add-port=2375/tcp --permanent #开放2375端口
firewall-cmd --reload  #重载，让开放端口生效
~~~

2.4 验证

~~~shell
curl http://[服务器ip]:2375/version
~~~



