import { NavItem, NoteItem } from "vuepress-theme-plume";


export const webframeNavbars: NavItem = {
    text: '前端主流开发框架',
    activeMatch: '^/pages/webframe/',
    items: [
        { text: 'vue开发框架', link: '/pages/webframe/vue/', icon: 'line-md:coffee-loop' },
        { text: 'react开发框架', link: '/pages/webframe/react/', icon: 'line-md:coffee-loop' },
        { text: 'svelet开发框架', link: '/pages/webframe/svelet/', icon: 'line-md:coffee-loop' },
        { text: 'uniapp小程序开发', link: '/pages/webframe/uniapp/', icon: 'line-md:coffee-loop' },
    ],
}

export const webframeSlibars: NoteItem = {
    dir: "webframe",
    link: "/webframe/",
    text: "前端主流开发框架",
    sidebar: [
        {
            text: "vue开发框架",
            prefix: "vue",
            collapsed: false,
            items: "auto"
        },
        {
            text: "react开发框架",
            prefix: "react",
            collapsed: true,
            items: "auto"
        },
        {
            text: "svelet开发框架",
            prefix: "svelet",
            collapsed: true,
            items: "auto"
        },
        {
            text: "微信小程序开发",
            prefix: "uniapp",
            collapsed: true,
            items: "auto"
        },
    ]
}