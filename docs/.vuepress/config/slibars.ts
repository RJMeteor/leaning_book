import {basicsSlibars} from "./structure/basics";
import {databasesSlibars} from "./structure/databases";
import {linuxSlibars} from "./structure/linux";
import { javaSlibars} from "./structure/developmentLanguage";
import {webframeSlibars} from "./structure/webframe";
import {othersSlibars} from "./structure/others";
import {NavbarOptions, SidebarArrayOptions, SidebarOptions} from "vuepress-theme-hope";

/**
 * 定义每章节的左侧栏
 */
export const slibars: SidebarOptions = {
    "/basic/": basicsSlibars, //基础知识
    "/webframe/": webframeSlibars, //web开发
    ...javaSlibars, // java开发
    "/databases/":databasesSlibars, //数据库
    "/linux/":linuxSlibars, //服务器
    "/others/":othersSlibars, //其他
}