
import links from "../links";
import {NavbarGroupOptions, NavbarLinkOptions, SidebarArrayOptions, SidebarItemOptions} from "vuepress-theme-hope";


export const databasesNavbars:(NavbarLinkOptions | NavbarGroupOptions) = {
    text: '数据库',
    activeMatch: '^/leaning_book/databases/',
    children: [
        { text: 'MySQL', link: "/databases/MySQL/7t92c9nx/", },
        { text: 'Redis', link: "/databases/Redis/7t92c9nx/", },
        { text: "MongoDB", link: "/databases/MongoDB/7t92c9nx/",},
    ],
}

export const databasesSlibars: SidebarArrayOptions = [...links.getLink(links,"数据库").children]
