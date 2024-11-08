import { NavItem, NoteItem } from "vuepress-theme-plume";
import links from "../links";


export const databasesNavbars: NavItem = {
    text: '数据库',
    activeMatch: '^/pages/databases/',
    items: [
        { text: 'MySQL', link: links.getLink(links,"数据库").items[0].items[0].link, icon: 'line-md:coffee-loop' },
        { text: 'Redis', link: links.getLink(links,"数据库").items[1].items[0].link, icon: 'jam:tools' },
    ],
}

export const databasesSlibars:NoteItem =  {
    dir: "databases",
    link: "/databases/",
    text: "数据库",
    sidebar: [...links.getLink(links,"数据库").items]
}