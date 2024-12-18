import process from 'node:process'
import type {Theme} from 'vuepress'
import { hopeTheme } from "vuepress-theme-hope";

import { slibars } from './config/slibars'
import { navbars } from './config/navbars'

export const theme: Theme = hopeTheme({
    logo:"/feiji.svg",
    // 页面开启全屏
    fullscreen: true,
    breadcrumb:false,
    // 默认为 GitHub. 同时也可以是一个完整的 URL
    repo: "https://github.com/RJMeteor/leaning_book",
    // 自定义仓库链接文字。默认从 `repo` 中自动推断为
    // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "GitHub",
    // 是否在导航栏内显示仓库链接，默认为 `true`
    repoDisplay: true,
    headerDepth: 6,
    plugins: {
        // 头部导航栏搜索框
        searchPro: true,
		markdownHint: {
			// 这就是默认选项，所以你可以直接使用此功能
			hint: true,
		},
        shiki: {
            // 你想要使用的主题
            themes: {
                light: "one-light",
                dark: "one-dark-pro",
            },
        },
    },
    // 主题配置
    navbarLayout: {
        start: ["Brand"],
        end: ["Links","Search","Outlook","Repo"],
    },
    // 顶部导航栏
    navbar:navbars,
    // 侧边栏
    sidebar:slibars
});