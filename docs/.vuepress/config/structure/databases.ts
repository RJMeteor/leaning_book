import { NavItem, NoteItem } from "vuepress-theme-plume";
import links from "../links";


export const databasesNavbars: NavItem = {
    text: '数据库',
    activeMatch: '^/pages/databases/',
    items: [
        { text: 'mysql', link: '/pages/databases/mysql/', icon: 'line-md:coffee-loop' },
        { text: 'redis', link: '/pages/databases/redis/', icon: 'jam:tools' },
    ],
}

export const databasesSlibars:NoteItem =  {
    dir: "databases",
    link: "/databases/",
    text: "数据库",
    sidebar: [...links.getLink(links,"数据库").items]
}