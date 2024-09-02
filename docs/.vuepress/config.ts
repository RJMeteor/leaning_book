import { theme } from './theme';
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    // 请不要忘记设置默认语言
    base:"/leaning_book/",
    lang: 'zh-CN',
    // dest:"src/.vuepress/dist",
    bundler: viteBundler({
        viteOptions: {},
        vuePluginOptions: {},
    }),
    theme,
    pagePatterns: ['**/*.md', '!**/*.snippet.md', '!.vuepress', '!node_modules'],
})