import { theme } from './theme';
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import {registerComponentsPlugin} from "@vuepress/plugin-register-components";
import * as path from "node:path";
import {commentPlugin} from "@vuepress/plugin-comment";

export default defineUserConfig({
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
        '/': {lang: 'zh-CN', title: 'RJMeteor TIB', description: '热爱编程' },
    },
    plugins: [
        registerComponentsPlugin({
            // 配置项
            componentsDir: path.resolve(__dirname, './components')
        }),
        commentPlugin({
            provider: 'Giscus',
            comment:true,
            repo:"RJMeteor/leaning_book",
            repoId:"R_kgDOMh1ScA",
            category:"Announcements",
            categoryId:"DIC_kwDOMh1ScM4CkwEZ",
        }),
    ],
})