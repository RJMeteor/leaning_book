import { definePlumeNotesConfig } from "vuepress-theme-plume";
import { basicsSlibars } from "./structure/basics";
import { databasesSlibars } from "./structure/databases";
import { linuxSlibars } from "./structure/linux";
import { developmentLanguageSlibars } from "./structure/developmentLanguage";
import { webframeSlibars } from "./structure/webframe";
import { webSlibars } from "./structure/web";

/**
 * 定义每章节的左侧栏
 */
export const slibars = definePlumeNotesConfig({
    dir: "pages",
    link: "/",
    notes: [
        basicsSlibars, //基础知识
        webSlibars, //web前端
        webframeSlibars, //web开发框架
        developmentLanguageSlibars, // java开发
        databasesSlibars, //数据库
        linuxSlibars, //服务器
    ]
})