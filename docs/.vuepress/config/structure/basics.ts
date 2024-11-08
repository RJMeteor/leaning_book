import {NavItem, NoteItem} from "vuepress-theme-plume";
import links from "../links";


export const basicsNavbars: NavItem = {
    text: '计算机基础',
    activeMatch: '^/pages/basics/',
    items: [
        {text: '基础知识', link: '/pages/basics/basicKnowledge/基础.md', icon: 'line-md:coffee-loop'},
        {text: '计算机网络', link: '/pages/basics/computerNetwork/', icon: 'jam:tools'},
        {text: '数据结构', link: links.getLink(links,"数据结构").items[0].link, icon: 'carbon:friendship'},
        {text: '算法', link: '/pages/basics/algorithm/', icon: 'carbon:friendship'},
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