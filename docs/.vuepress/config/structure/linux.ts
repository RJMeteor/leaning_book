import { NavItem, NoteItem } from "vuepress-theme-plume";
import links from "../links";


export const linuxNavbars: NavItem = {
    text: 'Linux操作系统',
    activeMatch: '^/leaning_book/linux/',
    items: [
        { text: 'Shell编程', link:  links.getLink(links,"Linux操作系统").items[0].items[0].link, icon: 'line-md:coffee-loop' },
        { text: 'Docker部署', link:  links.getLink(links,"Linux操作系统").items[1].items[0].link, icon: 'line-md:coffee-loop' },
    ],
}

export const linuxSlibars:NoteItem =  {
    dir: "linux",
    link: "/linux/",
    text: "Linux操作系统",
    sidebar: [...links.getLink(links,"Linux操作系统").items]
}