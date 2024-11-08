import { NavItem, NoteItem } from "vuepress-theme-plume";
import links from "../links";


export const webframeNavbars: NavItem = {
    text: '前端开发',
    activeMatch: '^/pages/webframe/',
    items: [
        { text: '前端开发基础', link: '/pages/webframe/web/', icon: 'line-md:coffee-loop' },
        { text: 'vue开发框架', link: '/pages/webframe/vue/', icon: 'line-md:coffee-loop' },
        { text: 'react开发框架', link: '/pages/webframe/react/', icon: 'line-md:coffee-loop' },
        { text: 'node开发', link: '/pages/webframe/web/', icon: 'line-md:coffee-loop' },
        { text: '前端工程化', link: '/pages/webframe/web/', icon: 'line-md:coffee-loop' },
        { text: 'svelet开发框架', link: '/pages/webframe/svelet/', icon: 'line-md:coffee-loop' },
        { text: 'uniapp小程序开发', link: '/pages/webframe/uniapp/', icon: 'line-md:coffee-loop' },
    ],
}

export const webframeSlibars: NoteItem = {
    dir: "webframe",
    link: "/webframe/",
    sidebar: [links.getLink(links,"前端开发").items]
}