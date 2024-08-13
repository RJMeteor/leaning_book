import { NavItem, NoteItem } from "vuepress-theme-plume";


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
    text: "常用数据库",
    sidebar: [
        {
            text: "mysql",
            prefix: "mysql",
            collapsed: true,
            items: "auto"
        },
        {
            text: "redis",
            prefix: "redis",
            collapsed: true,
            items: "auto"
        }
    ]
}