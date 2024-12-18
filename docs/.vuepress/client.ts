import {defineClientConfig} from "@vuepress/client";


export default defineClientConfig({
    enhance({app, router, siteData}) {
        // 在这里可以注册全局组件或者添加路由守卫
        router.beforeEach((to, from, next) => {
            // 在这里执行你的逻辑
            // 如果需要拦截跳转，可以不调用next或者调用next(false)
            if (Object.is(to.path, "/")) {
                next(false);
                router.push({
                    path: "/others/javazl/"
                })
            }
            next();
        });
    },
    setup() {
        // 在这里可以使用组合式 API 或者执行客户端特有的操作
    },
    layouts: {
        // 在这里注册布局组件
    },
    rootComponents: [
        // 在这里注册全局根组件
    ],
});