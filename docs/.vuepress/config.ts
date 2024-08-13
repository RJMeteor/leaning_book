import { theme } from './theme';
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    // 请不要忘记设置默认语言
    lang: 'zh-CN',
    bundler: viteBundler(),
    theme,
    pagePatterns: ['**/*.md', '!**/*.snippet.md', '!.vuepress', '!node_modules'],
})