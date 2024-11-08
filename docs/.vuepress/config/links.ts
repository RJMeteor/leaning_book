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
                collapsed: true,
                items: []
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
            if (Reflect.ownKeys(loopTarget).includes("items")) loopTarget.items.push(ele)
            if (Reflect.ownKeys(ele).includes("items")) {
                for (const eleKey in target[item]) {
                    ele.items.push(this.getLink(target[item],eleKey))
                }
            }
        }
        return loopTarget;
    },
    "数据结构": {
        "栈": "/basics/dataStructure/vd93czgm/",
        "队列": "/basics/dataStructure/vd93dcgm/",
        "链表": "/basics/dataStructure/vd93lcgm/",
        "树": "/basics/dataStructure/vd93scgm/",
        "图": "/basics/dataStructure/vd93tcgm/",
    },
    "算法": {
        "排序": {
            "冒泡排序": "/basics/algorithm/sort/m3foubll/",
            "选择排序": "/basics/algorithm/sort/rjs72r6u/",
            "插入排序": "/basics/algorithm/sort/7mdber5g/",
            "希尔排序": "/basics/algorithm/sort/5zzc68z1/",
            "归并排序": "/basics/algorithm/sort/theey3ib/",
            "快速排序": "/basics/algorithm/sort/dkzhql8g/",
            "推排序": "/basics/algorithm/sort/xsys6q62/",
        }
    },
    "其他": {
        "GitHub": "/others/bgt18a3c/",
        "学习渠道和工具": "/others/studyresource/",
        "Java收集": "/others/javastudy/",
        "前端收集": "/others/webstudy/",
    },
    "数据库": {
        "MySQL": {
            "基础": "/databases/MySQL/7t92c9nx/"
        },
        "Redis": {
            "基础": "/databases/Redis/7t92c9nx/"
        },
        "MongoDB": {
            "基础": "/databases/MongoDB/7t92c9nx/"
        },
    },
    "后端开发语言": {
        "Java": {
            "Java基础": {
                "基础": "/developmentLanguage/java/basics/7t92c9nx/",
                "IO流": "/developmentLanguage/java/basics/i3dtdkfy/",
                "JVM": "/developmentLanguage/java/basics/jpeeg4ew/",
                "设计模式": "/developmentLanguage/java/basics/przrwqhp/",
                "高并发": "/developmentLanguage/java/basics/9eerap60/",
            },
            "Maven": {
                "基础": "/developmentLanguage/java/Maven/7t92c9nx/"
            },
            "Tomcat": {
                "基础": "/developmentLanguage/java/Tomcat/7t92c9nx/"
            },
            "Spring": {
                "基础": "/developmentLanguage/java/Spring/7t92c9nx/"
            },
            "MyBatis": {
                "基础": "/developmentLanguage/java/MyBatis/7t92c9nx/"
            },
            "SpringBoot": {
                "基础": "/developmentLanguage/java/SpringBoot/7t92c9nx/"
            },
            "RabbitMQ": {
                "基础": "/developmentLanguage/java/RabbitMQ/7t92c9nx/"
            },
            "Elasticsearch": {
                "基础": "/developmentLanguage/java/ES/7t92c9nx/"
            },
            "Netty": {
                "基础": "/developmentLanguage/java/Netty/7t92c9nx/"
            },
            "Nginx": {
                "基础": "/developmentLanguage/java/Nginx/7t92c9nx/"
            },
            "Zookeeper": {
                "基础": "/developmentLanguage/java/Zookeeper/7t92c9nx/"
            },
            "Kafka": {
                "基础": "/developmentLanguage/java/Kafka/7t92c9nx/"
            },
            "SpringCloud": {
                "基础": "/developmentLanguage/java/SpringCloud/7t92c9nx/"
            },
        },
    },
    "前端开发": {
        '前端开发基础': {
            "CSS":"/webframe/basics/c7sc9bni/",
            "HTML":"/webframe/basics/ksyg9p5e/",
            "JS":"/webframe/basics/f6bfwjuw/",
        },
        '前端工程化': {
            "基础":"/webframe/engineer/7t92c9nx/",
        },
        'Vue开发框架': {
            "基础":"",
        },
        'React开发框架': {
            "基础":"/webframe/React/7t92c9nx/",
        },
        'Node开发': {
            "基础":"/webframe/Node/7t92c9nx/",
        },
        'Svelet开发框架':{
            "基础":"/webframe/Svelet/7t92c9nx/",
        },
        'Uniapp小程序开发': {
            "基础":"/webframe/Uniapp/7t92c9nx/",
        },
    },
    "Linux操作系统": {
        "Shell": {
            "基础": "/linux/Shell/7t92c9nx/"
        },
        "Docker": {
            "基础": "/linux/Docker/7t92c9nx/"
        },
    }
}