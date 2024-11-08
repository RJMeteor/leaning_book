import { NavItem, NoteItem } from "vuepress-theme-plume";
import links from "../links";


export const linuxNavbars: NavItem = {
    text: 'linux操作系统',
    activeMatch: '^/pages/linux/',
    items: [
        { text: 'shell编程', link: '/pages/linux/shell/', icon: 'line-md:coffee-loop' },
        { text: 'docker部署', link: '/pages/linux/docker/', icon: 'line-md:coffee-loop' },
    ],
}

export const linuxSlibars:NoteItem =  {
    dir: "linux",
    link: "/linux/",
    text: "Linux操作系统",
    sidebar: [...links.getLink(links,"Linux操作系统").items]
}