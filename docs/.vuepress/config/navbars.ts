import type {NavItem} from 'vuepress-theme-plume'
import {basicsNavbars} from './structure/basics'
import {webframeNavbars} from './structure/webframe'
import {developmentLanguageNavbars} from './structure/developmentLanguage'
import {databasesNavbars} from './structure/databases'
import {linuxNavbars} from './structure/linux'
import {othersNavbars} from "./structure/others";

/**
 * 定义顶部导航栏
 */
export const navbars: NavItem[] = [
    basicsNavbars, //基础知识
    webframeNavbars, //web开发
    developmentLanguageNavbars, // java开发
    databasesNavbars, //数据库
    linuxNavbars, //服务器
    othersNavbars, // 其他
]