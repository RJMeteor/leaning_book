import process from 'node:process'
import type {Theme} from 'vuepress'
import { hopeTheme } from "vuepress-theme-hope";

import { slibars } from './config/slibars'
import { navbars } from './config/navbars'

export const theme: Theme = hopeTheme({
    logo:"/feiji.svg",
    breadcrumb:false,
    plugins: {
        searchPro: true,
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
        end: ["Links","Language", "Repo", "Outlook", "Search"],
    },
    navbar:navbars,
    sidebar:slibars
});