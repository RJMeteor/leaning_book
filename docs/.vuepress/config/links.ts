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
                    ele.children.push(this.getLink(target[item],eleKey))
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
        "学习渠道和工具": "/others/studyresource/",
        "Java收集": "/others/javastudy/",
        "前端收集": "/others/webstudy/",
    },
    "数据库": {
        "MySQL": {
            "基础": "/7t92c9nx/"
        },
        "Redis": {
            "基础": "/7t92c9nx/"
        },
        "MongoDB": {
            "基础": "/7t92c9nx/"
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
            "JavaFx":{
                "基础":"/java/lmmbxrp9/",
                "开始工作":"/java/e7uj38ay/",
                "布局容器":"/java/2xpy1llu/",
                "UI组件":"/java/o7h0s1fn/",
                "FXML":"/java/6t9nz65s/",
            },
            "Maven": {
                "Maven基础": "/java/mavenbasic/",
                "Maven多模块": "/java/mavenmodule/",
            },
            "Tomcat": {
                "基础": "/java/tomcat/"
            },
            "Spring": {
                "基础": "/java/spring/"
            },
            "MyBatis": {
                "基础": "/java/mybatis/"
            },
            "SpringBoot": {
                "基础": "/java/springboot/"
            },
            "RabbitMQ": {
                "基础": "/java/rabbitmq/"
            },
            "Elasticsearch": {
                "基础": "/java/es/"
            },
            "Netty": {
                "基础": "/java/netty/"
            },
            "Nginx": {
                "基础": "/java/nginx/"
            },
            "Zookeeper": {
                "基础": "/java/zookeeper/"
            },
            "Kafka": {
                "基础": "/java/kafka/"
            },
            "SpringCloud": {
                "基础": "/java/springcloud/"
            },
        },
    },
    "前端开发": {
        '前端开发基础': {
            "CSS":"/c7sc9bni/",
            "HTML":"/ksyg9p5e/",
            "JS":"/f6bfwjuw/",
        },
        '前端工程化': {
            "monorepo":"/webframe/monorepo/",
            "prettier":"/webframe/prettier/",
            "eslint":"/webframe/eslint/",
            "husky":"/webframe/husky/",
        },
        'Vue开发框架': {
            "基础":"/7t92c9nx/",
        },
        'React开发框架': {
            "基础":"/7t92c9nx/",
        },
        'Node开发': {
            "基础":"/7t92c9nx/",
        },
        'Svelet开发框架':{
            "基础":"/7t92c9nx/",
        },
        'Uniapp小程序开发': {
            "基础":"/7t92c9nx/",
        },
    },
    "Linux操作系统": {
        "Shell": {
            "基础": "/7t92c9nx/"
        },
        "Docker": {
            "基础": "/7t92c9nx/"
        },
    }
}