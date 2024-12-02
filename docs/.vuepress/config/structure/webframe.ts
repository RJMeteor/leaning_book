import links from "../links";
import {NavbarGroupOptions, NavbarLinkOptions, SidebarArrayOptions, SidebarItemOptions} from "vuepress-theme-hope";


export const webframeNavbars: (NavbarLinkOptions | NavbarGroupOptions) = {
    text: '前端开发',
    activeMatch: '^/leaning_book/webframe/',
    children: [
        {text: '前端开发基础', link: "/webframe/javascript/",},
        {text: '前端工程化', link: "/webframe/monorepo/",},
        {text: 'Vue开发框架', link: "/webframe/vuebasic/",},
        {text: 'React开发框架', link: "/webframe/reactbasic/",},
        {text: 'Svelet开发框架', link: "/webframe/sveletbasic/",},
        {text: 'Node开发', link: "/webframe/nodebasic/",},
        {text: 'Uniapp小程序开发', link: "/webframe/uniappbasic/",},
    ],
}

export const webframeSlibars: SidebarArrayOptions = [...links.getLink(links, "前端开发").children]
