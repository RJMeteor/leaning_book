export default {
    getType(check: any) {
        return Object.prototype.toString.call(check).slice(8, -1)
    },
    newDeep(target: any, check: string) {
        const flag = {
            text: check,
        }
        if (Object.is(this.getType(target[check]), "Object")) {
            return {
                ...flag,
                collapsible: true,
                children: []
            }
        } else {
            return {
                ...flag,
                link: target[check],
            }
        }
    },
    getLink(resource: any, name: string) {
        let target = resource[name];
        const loopTarget = this.newDeep(resource, name);
        for (let item in target) {
            const ele = this.newDeep(target, item)
            if (Reflect.ownKeys(loopTarget).includes("children")) loopTarget.children.push(ele)
            if (Reflect.ownKeys(ele).includes("children")) {
                for (const eleKey in target[item]) {
                    ele.children.push(this.getLink(target[item], eleKey))
                }
            }
        }
        return loopTarget;
    },
    "数据结构": {
        "栈": "/basic/vd93czgm/",
        "队列": "/basic/vd93dcgm/",
        "链表": "/basic/vd93lcgm/",
        "树": "/basic/vd93scgm/",
        "图": "/basic/vd93tcgm/",
    },
    "算法": {
        "排序": {
            "冒泡排序": "/basic/m3foubll/",
            "选择排序": "/basic/rjs72r6u/",
            "插入排序": "/basic/7mdber5g/",
            "希尔排序": "/basic/5zzc68z1/",
            "归并排序": "/basic/theey3ib/",
            "快速排序": "/basic/dkzhql8g/",
            "推排序": "/basic/xsys6q62/",
        }
    },
    "其他": {
        "Java资料": "/others/javazl/",
        "GitHub": "/others/bgt18a3c/",
        "效率工具": "/others/studyresource/",
        "Java收集": "/others/javastudy/",
        "前端收集": "/others/webstudy/",
    },
    "数据库": {
        "MySQL": {
            "基础": "/databases/mysql/",
            "Mysql有哪些锁？": "/databases/mysqllock/",
            "什么是回表？": "/databases/mysqlhuibiao/",
            "什么是MVCC？": "/databases/mysqlmvcc/",
            "binlog、redo log和undo log详情": "/databases/mysqllog/"
        },
        "Redis": {
            "基础": "/databases/redis/"
        },
        "MongoDB": {
            "基础": "/databases/mongodb/"
        },
    },
    "分布式": {
        "Elasticsearch 搜索和分析引擎": {
            "基础": "/bigdata/es/",
        },
        "Zookeeper 分布式协调服务": {
            "Zookeeper基础": "/bigdata/zookeeper/",
            "Zookeeper集群": "/bigdata/zookeepercs/",
        },
        "Dubbo 远程过程调用框架": {
            "基础": "/bigdata/dubbo/",
        },
        "Kafka 分布式流处理平台": {
            "基础": "/bigdata/kafka/",
        },
		"Cannal数据同步": {
                "基础": "/bigdata/cannal/",
            },
		"大数据":{
			"HDFS 分布式文件系统": {
            "基础": "/bigdata/hdfs/",
        },
        "Flink 分布式流处理框架": {
            "基础": "/bigdata/flink/",
        },
        "Spark 大数据处理框架": {
            "基础": "/bigdata/spark/",
        },
			},
        "Serverless 云计算架构": {
            "基础": "/bigdata/serverless/",
        },
    },
    "后端开发语言": {
        "Java": {
            "Java基础": {
                "基础": "/java/7t92c9nx/",
                "IO流": "/java/i3dtdkfy/",
                "JVM": "/java/jpeeg4ew/",
                "设计模式": "/java/przrwqhp/",
                "高并发": "/java/9eerap60/",
            },
            "JavaFx 构建富客户端应用程序": {
                "基础": "/java/lmmbxrp9/",
                "开始工作": "/java/e7uj38ay/",
                "布局容器": "/java/2xpy1llu/",
                "UI组件": "/java/o7h0s1fn/",
                "FXML": "/java/6t9nz65s/",
            },
            "Maven 项目管理工具": {
                "Maven基础": "/java/mavenbasic/",
                "Maven多模块": "/java/mavenmodule/",
            },
            "Tomcat WEB服务器": {
                "基础": "/java/tomcat/"
            },
            "Spring框架": {
                "基础": "/java/spring/"
            },
            "MyBatis 数据持久化框架": {
                "基础": "/java/mybatis/"
            },
            "SpringBoot框架": {
                "基础": "/java/springboot/"
            },
            "Minio 对象存储服务": {
                "基础": "/java/minio/"
            },
            "RabbitMQ 消息队列": {
                "基础": "/java/rabbitmq/"
            },
            "Netty 网络编程框架": {
                "基础": "/java/netty/"
            },
            "Nginx 反向代理服务器": {
                "基础": "/java/nginx/"
            },
            "SpringCloud分布式框架": {
                "基础": "/java/springcloud/"
            },
        },
    },
    "前端开发": {
        '前端开发基础': {
            "CSS": "/webframe/css/",
            "HTML": "/webframe/html/",
            "JavaScript": {
                "JS": "/webframe/javascript/",
                "WebRTC": "/webframe/webrtc/"
            }
        },
        '前端工程化': {
            "monorepo 项目代码架构": "/webframe/monorepo/",
            "prettier 代码美化": "/webframe/prettier/",
            "eslint 代码检查": "/webframe/eslint/",
            "husky Git钩子": "/webframe/husky/",
        },
        'Vue开发框架': {
            "基础": "/webframe/vuebasic/",
        },
        'React开发框架': {
            "基础": "/webframe/reactbasic/",
        },
        'Node开发': {
            "基础": "/webframe/nodebasic/",
        },
        'Svelet开发框架': {
            "基础": "/webframe/sveletbasic/",
        },
        'Uniapp小程序开发': {
            "基础": "/webframe/uniappbasic/",
        },
    },
    "Linux操作系统": {
        "Shell": {
            "基础命令": "/linux/shellbasic/",
            "Shell脚本": "/linux/shellscript/",
        },
        "Docker 容器化技术": {
            "基础": "/linux/dockerbasic/"
        },
    }
}