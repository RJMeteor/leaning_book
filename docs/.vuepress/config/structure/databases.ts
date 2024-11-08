import { NavItem, NoteItem } from "vuepress-theme-plume";
import links from "../links";


export const databasesNavbars: NavItem = {
    text: '数据库',
    activeMatch: '^/leaning_book/databases/',
    items: [
        { text: 'MySQL', link: "/databases/MySQL/7t92c9nx/", },
        { text: 'Redis', link: "/databases/Redis/7t92c9nx/", },
        { text: "MongoDB", link: "/databases/MongoDB/7t92c9nx/",},
    ],
}

export const databasesSlibars:NoteItem =  {
    dir: "databases",
    link: "/databases/",
    text: "数据库",
    sidebar: [...links.getLink(links,"数据库").items]
}