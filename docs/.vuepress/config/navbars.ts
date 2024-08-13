import type { NavItem } from 'vuepress-theme-plume'
import { basicsNavbars } from './structure/basics'
import { webNavbars } from './structure/web'
import { webframeNavbars } from './structure/webframe'
import { developmentLanguageNavbars } from './structure/developmentLanguage'
import { databasesNavbars } from './structure/databases'
import { linuxNavbars } from './structure/linux'

/**
 * 定义顶部导航栏
 */
export const navbars: NavItem[] = [
    basicsNavbars, //基础知识
    webNavbars, //web前端
    webframeNavbars, //web开发框架
    developmentLanguageNavbars, // java开发
    databasesNavbars, //数据库
    linuxNavbars, //服务器
] 