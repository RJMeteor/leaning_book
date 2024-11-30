---
title: Java收集
author: RJMeteor
createTime: 2024/11/08 10:12:41
permalink: /others/javastudy/
---

## XSD

- [XML Schema 参考手册 (w3school.com.cn)](https://www.w3school.com.cn/schema/schema_elements_ref.asp)
- [XSD语法解析 - 简书 (jianshu.com)](https://www.jianshu.com/p/cad6e82de16f)
- [XSD 文件学习_xsd sequence-CSDN博客](https://blog.csdn.net/liankui6027/article/details/119989938)
- [XML之命名空间的作用(xmlns)_xml namespace作用-CSDN博客](https://blog.csdn.net/zhch152/article/details/8191377/)
- [XML中的xmlns、xmlns:xsi和xsi:sechemaLoacation的具体含义是什么？ - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/372022140?utm_id=0)

## 实战案例

- [【二十】springboot整合ElasticSearch实战（万字篇）_springboot集成elasticsearch-CSDN博客](https://blog.csdn.net/weixin_56995925/article/details/123873580?spm=1001.2014.3001.5502)
- [【二十四】springboot整合spring事务详解以及实战_springboot实现事务-CSDN博客](https://blog.csdn.net/weixin_56995925/article/details/125577851?spm=1001.2014.3001.5502)
- [Redisson的基本使用 - wq9 - 博客园 (cnblogs.com)](https://www.cnblogs.com/wq-9/articles/16423575.html)
- [Spring Boot 整合多 Redis 数据源配置及操作_springboot redis多数据源-CSDN博客](https://blog.csdn.net/qq_45607784/article/details/135383831)
- [【限流】从0开始实现常见的四种限流算法，基于Redis结合AOP实现【固定窗口】、【滑动窗口】、【令牌桶算法】、【漏桶算法】_aop redis滑动时间窗口算法-CSDN博客](https://blog.csdn.net/lucky_morning/article/details/121619047)
- [基于SpringBoot+Redis实现查找附近用户的功能_redis new circle()-CSDN博客](https://blog.csdn.net/Cai181191/article/details/134557255)
- [【二十六】springboot整合jedis和redisson布隆过滤器处理缓存穿透_springboot redisson-CSDN博客](https://blog.csdn.net/weixin_56995925/article/details/126208394)
- [Redis经典问题：缓存击穿 (baidu.com)](https://baijiahao.baidu.com/s?id=1798720309512218422&wfr=spider&for=pc)

## Spring 源码

- [Vip-Augus/spring-analysis-note: 学习 spring 5 源码分析笔记 (github.com)](https://github.com/Vip-Augus/spring-analysis-note?tab=readme-ov-file)
- [wuyouzhuguli/SpringAll: 循序渐进，学习Spring Boot、Spring Boot & Shiro、Spring Batch、Spring Cloud、Spring Cloud Alibaba、Spring Security & Spring Security OAuth2，博客Spring系列源码：https://mrbird.cc (github.com)](https://github.com/wuyouzhuguli/SpringAll?tab=readme-ov-file)
- [coderbruis/JavaSourceCodeLearning: Java流行框架源码分析：Spring源码、SpringBoot源码、SpringAOP源码、SpringSecurity源码、SpringSecurity OAuth2源码、JDK源码、Netty源码 (github.com)](https://github.com/coderbruis/JavaSourceCodeLearning?tab=readme-ov-file)
- [forezp/SpringCloudLearning: 《史上最简单的Spring Cloud教程源码》 (github.com)](https://github.com/search?q=spring 源码&type=repositories)
- spring事务：[一文搞通Spring事务的七种传播机制（通俗易懂）_Java-CSDN专栏](https://download.csdn.net/blog/column/12302624/131993937)
  - REQUIRED：如果当前存在事务，则加入该事务；如果当前没有事务，则创建一个新的事务。
  - REQUIRES_NEW：创建一个新的事务,如果当前存在事务,则把当前事务挂起。
  - SUPPORTS：如果当前存在事务，则加入该事务；如果当前没有事务，则以非事务的方式继续运行。
  - NOT_SUPPORTED：以非事务方式运行，如果当前存在事务，则把当前事务挂起。
  - MANDATORY：如果当前存在事务，则加入该事务；如果当前没有事务，则抛出异常。
  - NEVER：以非事务方式运行，如果当前存在事务，则抛出异常。
  - NESTED：：如果当前存在事务，则创建一个事务作为当前事务的嵌套事务来运行；如果当前没有事务，则该取值等价于REQUIRED。

## Java

[Overview (Java SE 11 & JDK 11 ) (runoob.com)](https://www.runoob.com/manual/jdk11api/index.html)

### 基础

- [Java中的 ＜＜ ， ＞＞ ， 和 ＞＞＞所代表的含义](https://blog.csdn.net/weixin_49149614/article/details/107531270)
- [java精确除法运算（BigDecimal）](https://blog.csdn.net/qq_37080455/article/details/98964856)
- [java中compareTo()方法使用整理](https://blog.csdn.net/weixin_41697018/article/details/116459619)
- [Java 序列化 之 Serializable](https://www.jianshu.com/p/af2f0a4b03b5)
- [Java函数式编程入门：探索四大函数式接口](https://zhuanlan.zhihu.com/p/671649762)
- [Java多线程二： Thread中几个比较重要的方法](https://mp.weixin.qq.com/s?__biz=MzI5MTkxMDU2MQ==&mid=2247484007&idx=1&sn=3df45c7d2655c14c079c3273b30a9fad&chksm=ec0824a9db7fadbfe367fc3657562b6e36ab8043668a62c0200a15df57b740904e93b873ec99&scene=27)
- [Java类加载策略之双亲委派机制全面分析讲解_java_脚本之家 (jb51.net)](https://www.jb51.net/program/310489t2a.htm)
- [Stream流](https://www.cnblogs.com/wangstudyblog/p/14909857.html)

### JUC

- [Java多线程：中断机制interrupt以及InterruptedException出现的原因](https://www.cnblogs.com/2015110615L/p/6736323.html)
- [Java中的juc并发包](https://blog.csdn.net/qq_46130027/article/details/131420291)
- [Java JUC 笔记(1)](https://blog.csdn.net/Hantou_crazy/article/details/136416091)
- [Java JUC 笔记(2)](https://blog.csdn.net/Hantou_crazy/article/details/136619063?spm=1001.2014.3001.5502)
- [什么是JUC?](https://www.cnblogs.com/q151860/p/8589683.html)
- [JUC详解](https://blog.csdn.net/weixin_52850476/article/details/123615976)
- [Java处理并发编程工具集合(JUC)详解](https://blog.csdn.net/ZGL_cyy/article/details/133209350)
- [线程同步器AQS源码简析/JUC](https://blog.csdn.net/Hantou_crazy/article/details/136531423?spm=1001.2014.3001.5502)
- [Java-CAS 原理与 JUC 原子类](https://blog.csdn.net/lvyuanj/article/details/136783307)
- [深入理解Java中的AQS - 夏末秋涼 - 博客园 (cnblogs.com)](https://www.cnblogs.com/fsmly/p/11274572.html)

### Optional

- [理解、学习与使用 JAVA 中的 Optional](https://www.cnblogs.com/zhangboyu/p/7580262.html)

## 设计模式

- [免费在线学习代码重构和设计模式](https://refactoringguru.cn/)
- [java 23种设计模式 深入理解](https://www.cnblogs.com/foryang/p/5849402.html)

## 面试

- [Java学到什么程度可以找工作 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/117292318)
- [小林coding](https://xiaolincoding.com/)
- [JavaGuide](https://javaguide.cn/)
- [CS-Notes 面试笔记](http://www.cyc2018.xyz/)
- [Java 全栈知识体系](https://pdai.tech/)
- [方志朋,Java,Spring,Spring Boot,Spring Cloud,Java后端技术 (fangzhipeng.com)](http://blog.fangzhipeng.com/)
https://www.mujicv.com/editor/?id=template-3857ae6041bd6bfe
https://jianli.chinaz.com/editor?mouldId=1
https://sky-xl.cn/img-to-pdf
https://2pdf.com/zh/convert-jpg-to-pdf/

## Maven

- [Maven](https://maven.apache.org/)
- [将jar包安装到maven仓库](https://www.cnblogs.com/laoyeye/p/8933185.html)



## Java工具

- [Hutool](https://www.hutool.cn/)
- [Guava-retrying - 飞书云文档 (feishu.cn)](https://j3q80mf3ig.feishu.cn/docx/QxYVdHuTbobRMsxtxlrcjjJJnfh)
- [protobuf: 高性能对象序列化工具](https://github.com/protocolbuffers/protobuf)
  - [在Java中使用protobuf序列化对象 - 盛夏群岛 - 博客园 (cnblogs.com)](https://www.cnblogs.com/chxyshaodiao/p/12616535.html)
  - [java中使用Protobuf的实例(Demo) - 星朝 - 博客园 (cnblogs.com)](https://www.cnblogs.com/jpfss/p/10881357.html)
  - [java序列化系列之protobuf (baidu.com)](https://baijiahao.baidu.com/s?id=1640808908734152688&wfr=spider&for=pc)

## MySql	

- [肝了一周，这下彻底把 MySQL的锁搞懂了 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/570570330)
- [MySQL的隔离级别详解_mysql隔离级别-CSDN博客](https://blog.csdn.net/kaka_buka/article/details/140010495)

## Spring

- [Spring官网](https://docs.spring.io/)
- [Spring源码编译](https://www.cnblogs.com/dlcode/p/14178028.html)
- [设计模式与框架源码 | 理论与实践的完美结合](https://www.bilibili.com/video/BV1Yy411Y79c/?spm_id_from=333.999.0.0&vd_source=b9c96b09f6a61394b053d5682a45cb67)
- [SpEL表达式总结](https://www.jianshu.com/p/e0b50053b5d3)

## log4j：日志框架

- [logback配置文件XML详解](https://zzk.cnblogs.com/)

## MyBatis

- [MyBatis教程](https://www.hxstrive.com/subject/mybatis/67.htm)
- [MyBatis Puls教程](https://baomidou.com/)

## Redis

- [redis的三种集群方案(主从复制、哨兵模式、集群模式) ](https://www.cnblogs.com/shenStudy/p/16859463.html)
- [实现缓存和数据库一致性方案：mysql+canal+rabbitmq+redis](https://blog.csdn.net/JACK_SUJAVA/article/details/129842761)

## Nginx

- [Nginx 基础入门](https://www.cnblogs.com/48xz/p/15781821.html)
- [Lua在Nginx的应用 ](https://www.cnblogs.com/wangzhaobo/p/12768707.html)
- [nginx中使用lua脚本](https://www.jianshu.com/p/3ea9312a619a)

## Canel：数据同步

- [Canal全家桶的安装和配置](https://blog.csdn.net/YangCheney/article/details/122118469)

## Rabbitmq：消息队列

- [RabbitMQ核心概念及工作原理](https://mp.weixin.qq.com/s?__biz=MzIxODQxMjc0MA==&mid=2247521998&idx=1&sn=d7d939e7820c884a1830c994755c5a64&chksm=97e83565a09fbc736e9f240ef0d89e70bd68ef08745cbb53b3f943647da666ef88128e322c78&scene=27)
- [RabbitMQ概念详解](https://blog.csdn.net/licux/article/details/118093275)
- [RabbitMQ使用教程](https://blog.csdn.net/weixin_45486926/article/details/127170831)
- [RabbitMQ 之topics (通配符)篇 初学](https://www.cnblogs.com/vhviqd/p/11968523.html)
- [详解SpringBoot整合RabbitMQ如何实现消息确认](https://www.jb51.net/article/249347.htm#_lab2_1_3)
- [springboot + rabbitmq 消息确认机制（避坑指南）](https://zhuanlan.zhihu.com/p/296295283)
- [RabbitMQ手动确认模式(项目开发常用模式)](https://blog.csdn.net/weixin_43822632/article/details/119606666)
- [SpringBoot RabbitMQ死信队列](https://www.cnblogs.com/happyhuangjinjin/p/17363599.html)
- [SpringBoot集成RabbitMQ实现消息重试机制，消息重试3次失败后写入死信队列，消息重试3次失败后入库](https://blog.csdn.net/yyongsheng/article/details/132081803)
- [SpringBoot 集成 RabbitMq 消费者手动确认消息，失败重试后发送至死信队列](https://blog.csdn.net/qq1427231253/article/details/131811291)
- [RabbitMQ 如何实现延迟队列？]()

## minio：资源存储

- [SpringBoot集成Minio入门教程](https://mp.weixin.qq.com/s?__biz=MzAxMjY5NDU2Ng==&mid=2651868354&idx=1&sn=6bd4dc0717316ba364a0073267a0d999&chksm=8049098bb73e809dbcf432bdc3a5a3799aea6eea73a9ade5054a11b6530005112305637f6b71&scene=27)：[示例代码厂库](https://github.com/Harries/springboot-demo)
- [Minio入门系列【16】Minio分片上传文件putObject接口流程源码分析](https://blog.csdn.net/qq_43437874/article/details/120968543)
- [Minio分片上传](https://blog.csdn.net/qq_39940205/article/details/128795362)
- [MinIO 介绍使用](https://www.cnblogs.com/lwqstyle/p/16587503.html)

## Elasticsearch：搜索引擎

- [Easy es](https://www.easy-es.cn/)
- [ElasticSearch入门篇（保姆级教程） ](https://www.cnblogs.com/coderxz/p/13268417.html)
- [采用Canal进行Mysql to ElasticSearch数据同步](https://zhuanlan.zhihu.com/p/159751188)

## Shiro：权限认证

- [Shiro (yuque.com)](https://www.yuque.com/anethesi/java/wbefexhdgdt5x8pt)
- [shiro授权认证原理分析 (yuque.com)](https://www.yuque.com/bianxinyu-vnymc/cs4c09/fiz8s8)
- [Shiro框架 (yuque.com)](https://www.yuque.com/iamadmin/gs8mnm/urowinxx00frhy6n)
- [Shiro (yuque.com)](https://www.yuque.com/qiongren-aqpo0/ctdpm2/shiro#AFoHX)
- [Springboot整合Shiro后对登录session超时自动跳转登录页、异地登录提醒、权限控制的使用 (yuque.com)](https://www.yuque.com/beyourself-f0wio/gkga1n/boqfd9bs3ecga8t0#fOMR3)
- [理解这9大内置过滤器，才算是精通Shiro - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/140454269)
- [一文搞定Shiro - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/673227410)
- [Shiro安全框架详解及springboot使用示例-CSDN博客](https://blog.csdn.net/m0_67400973/article/details/124343963)
- [Shiro超详细学习笔记(附源码)-阿里云开发者社区 (aliyun.com)](https://developer.aliyun.com/article/1245449)
- [Shiro之注解篇_shiro常用注解-CSDN博客](https://blog.csdn.net/qq_43654581/article/details/120776947)
- [Shiro之并发在线篇_shiro并发请求-CSDN博客](https://blog.csdn.net/qq_43654581/article/details/120795408)
- [shiro源码全面分析 - 掘金 (juejin.cn)](https://juejin.cn/post/6902331060672348167)
- [Shiro 入门到实战_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1vE411i7ij/?spm_id_from=333.1007.top_right_bar_window_default_collection.content.click&vd_source=b9c96b09f6a61394b053d5682a45cb67)

## Activiti：审批流程

- [解决idea2020.3.3版本无法使用actiBPM插件问题-CSDN博客](https://blog.csdn.net/qq_67929543/article/details/125343525)
- [JetBrains Marketplace](https://plugins.jetbrains.com/)
- [Activiti入门体验 (yuque.com)](https://www.yuque.com/chenjin0503/qy545i/vvbgs6)
- [认识Activiti (yuque.com)](https://www.yuque.com/yzxb/index/gndu7p81u22y39hb)
- [Activiti 组任务 (cnblogs.com)](https://www.cnblogs.com/dw3306/p/16122794.html)
- [Activiti7工作流引擎_activity7下载-CSDN博客](https://blog.csdn.net/Java_Mr_Jin/article/details/126605752)
- [activiti（十）组任务Group_activiti group-CSDN博客](https://blog.csdn.net/sdaujsj1/article/details/79776172)
- [Activiti7并行子流程的使用 - SpringBoot_activiti7在哪里设置collection-CSDN博客](https://blog.csdn.net/u014131617/article/details/113242130)
- [activiti学习之task与execution的关系 - Alfresco技术博客 (alfrescocn.com)](http://www.alfrescocn.com/activiti-task-execution/)
- [Activiti架构分析及源码详解 - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000021570331?sort=newest)
- [【完整版】2021最新工作流引擎Activiti7最全讲解，从基础到进阶_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1j44y1m7ao/?spm_id_from=333.788.top_right_bar_window_custom_collection.content.click)

类说明：

- ExecutionEntity：正在执行的活动信息	

  [Activiti流程引擎 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/171725431)

- ProcessDefinitionEntity：ProcessDefinitionEntity就是获取xml内容的对象

  [Activiti5 学习笔记（三）—— 流程元素_processdefinitionentity-CSDN博客](https://blog.csdn.net/q42368773/article/details/103979161)

- PvmTransition、PvmActivity等

  [activiti源码学习之pvm篇 (360doc.com)](http://www.360doc.com/content/15/1225/10/5054188_522969354.shtml)