import { NavItem, NoteItem } from "vuepress-theme-plume";

export const webNavbars: NavItem = {
    text: '前端三件套',
    activeMatch: '^/pages/web/',
    items: [
        { text: 'css', link: '/pages/web/css/', icon: 'line-md:coffee-loop' },
        { text: 'html', link: '/pages/web/html/', icon: 'line-md:coffee-loop' },
        { text: 'js', link: '/pages/web/js/', icon: 'line-md:coffee-loop' },
    ],
}

export const webSlibars:NoteItem = {
    dir: "web",
    link: "/web/",
    text: "前端三件套",
    sidebar: [
        {
            text: "css",
            prefix: "css",
            collapsed: false,
            items: "auto"
        },
        {
            text: "html",
            prefix: "html",
            collapsed: true,
            items: "auto"
        },
        {
            text: "js",
            prefix: "js",
            collapsed: true,
            items: "auto"
        }
    ]
}