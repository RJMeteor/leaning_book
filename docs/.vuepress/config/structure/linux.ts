import { NavItem, NoteItem } from "vuepress-theme-plume";
import links from "../links";


export const linuxNavbars: NavItem = {
    text: 'Linux操作系统',
    activeMatch: '^/leaning_book/linux/',
    items: [
        { text: 'Shell编程', link: "/linux/Shell/7t92c9nx/", },
        { text: 'Docker部署', link: "/linux/Docker/7t92c9nx/", },
    ],
}

export const linuxSlibars:NoteItem =  {
    dir: "linux",
    link: "/linux/",
    text: "Linux操作系统",
    sidebar: [...links.getLink(links,"Linux操作系统").items]
}