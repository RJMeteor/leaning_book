import {NavItem, NoteItem} from "vuepress-theme-plume";
import links from "../links";


export const basicsNavbars: NavItem = {
    text: '计算机基础',
    activeMatch: '^/leaning_book/basics/',
    items: [
        // 栈
        {text: '数据结构', link: "/basics/dataStructure/vd93czgm/",},
        // 排序
        {text: '算法', link: "/basics/algorithm/sort/m3foubll/",},
    ],
}

export const basicsSlibars: NoteItem = {
    dir: "basics",
    link: "/basics/",
    sidebar: [
        {
            text: "计算机基础知识",
            dir: "basicKnowledge",
            collapsed: false,
            items: "auto"
        },
        {
            text: "计算机网络",
            dir: "computerNetwork",
            collapsed: true,
            items: "auto"
        },
        {
            text: "数据结构",
            collapsed: true,
            items:[...links.getLink(links,"数据结构").items]
        },
        {
            text: "算法",
            collapsed: true,
            items:[...links.getLink(links,"算法").items]
        }
    ]
}