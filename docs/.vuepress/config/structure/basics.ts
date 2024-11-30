import links from "../links";
import {NavbarGroupOptions, NavbarLinkOptions, SidebarArrayOptions} from "vuepress-theme-hope";


export const basicsNavbars: (NavbarLinkOptions | NavbarGroupOptions) = {
    text: '计算机基础',
    activeMatch: '^/basics/',
    children: [
        // 栈
        {text: '数据结构', link: "/basic/vd93czgm/",},
        // 排序
        {text: '算法', link: "/basic/m3foubll/",},
    ],
}

export const basicsSlibars: SidebarArrayOptions = [
    {
        text: "计算机基础知识",
        collapsible: true,
        children: []
    },
    {
        text: "计算机网络",
        collapsible: true,
        children: []
    },
    {
        text: "数据结构",
        collapsible: true,
        children: [...links.getLink(links, "数据结构").children]
    },
    {
        text: "算法",
        collapsible: true,
        children: [...links.getLink(links, "算法").children]
    }
]