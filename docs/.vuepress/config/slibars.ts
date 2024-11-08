import {definePlumeNotesConfig} from "vuepress-theme-plume";
import {basicsSlibars} from "./structure/basics";
import {databasesSlibars} from "./structure/databases";
import {linuxSlibars} from "./structure/linux";
import {developmentLanguageSlibars} from "./structure/developmentLanguage";
import {webframeSlibars} from "./structure/webframe";
import {othersSlibars} from "./structure/others";

/**
 * 定义每章节的左侧栏
 */
export const slibars = definePlumeNotesConfig({
    dir: "pages",
    link: "/",
    notes: [
        basicsSlibars, //基础知识
        webframeSlibars, //web开发
        developmentLanguageSlibars, // java开发
        databasesSlibars, //数据库
        linuxSlibars, //服务器
        othersSlibars, //其他
    ]
})