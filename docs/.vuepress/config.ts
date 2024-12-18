import {theme} from './theme';
import {viteBundler} from '@vuepress/bundler-vite'
import {defineUserConfig} from 'vuepress'
import {registerComponentsPlugin} from "@vuepress/plugin-register-components";
import * as path from "node:path";
import {commentPlugin} from "@vuepress/plugin-comment";
import {blog} from "vuepress-theme-hope";


export default defineUserConfig({
    head: [
        [
            "link",
            {
                "rel": "icon",
                "href": "/leaning_book/feiji.svg"
            }
        ],
        [
            "link",
            {
                "rel": "manifest",
                "href": "/leaning_book/manifest.json"
            }
        ]
    ],
    // 请不要忘记设置默认语言
    base: "/leaning_book/",
    lang: 'zh-CN',
    // dest:"src/.vuepress/dist",
    bundler: viteBundler({
        viteOptions: {},
        vuePluginOptions: {},
    }),
    theme,
    pagePatterns: ['**/*.md', '!**/*.snippet.md', '!.vuepress', '!node_modules'],
    locales: {
        '/': {lang: 'zh-CN', title: 'RJMeteor TIB', description: '热爱编程'},
    },
    plugins: [
        // 支持pwa
        [
            "@vuepress/pwa",
            {
                "serviceWorker": true,
            }
        ],
        // 全局注册自定义组件
        registerComponentsPlugin({
            // 配置项
            componentsDir: path.resolve(__dirname, './components')
        }),
        // 开启文章评论功能
        commentPlugin({
            provider: 'Giscus',
            comment: true,
            repo: "RJMeteor/leaning_book",
            repoId: "R_kgDOMh1ScA",
            category: "Announcements",
            categoryId: "DIC_kwDOMh1ScM4CkwEZ",
        }),
    ],
})