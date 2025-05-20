import {theme} from './theme';
import {viteBundler} from '@vuepress/bundler-vite'
import {defineUserConfig} from 'vuepress'
import {registerComponentsPlugin} from "@vuepress/plugin-register-components";
import * as path from "node:path";
import {commentPlugin} from "@vuepress/plugin-comment";
import {blog} from "vuepress-theme-hope";


//  获取动态部署类型site：npm run build --site=github|netlify
const baseUrl = ((type) => {
    if (type==undefined) return undefined
    const types = {
        netlify: {
            baseUrl: undefined
        },
        github: {
            baseUrl: "/leaning_book/"
        }
    }
    return types[type]
})(process.env.npm_config_site)

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
    // base: "/leaning_book/",
    base: baseUrl,
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