import {basicsSlibars} from "./structure/basics";
import {databasesSlibars} from "./structure/databases";
import {linuxSlibars} from "./structure/linux";
import { javaSlibars} from "./structure/developmentLanguage";
import {webframeSlibars} from "./structure/webframe";
import {othersSlibars} from "./structure/others";
import {NavbarOptions, SidebarArrayOptions, SidebarOptions} from "vuepress-theme-hope";
import {bigdataSlibars} from "./structure/bigdata";

/**
 * 定义每章节的左侧栏
 */
export const slibars: SidebarOptions = {
    "/basic/": basicsSlibars, //基础知识
    "/webframe/": webframeSlibars, //web开发
    ...javaSlibars, // java开发
    "/databases/":databasesSlibars, //数据库
    "/linux/":linuxSlibars, //服务器
    "/bigdata/":bigdataSlibars, //分布式
    "/others/":othersSlibars, //其他
}