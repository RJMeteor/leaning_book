import { NavItem, NoteItem } from "vuepress-theme-plume";
import links from "../links";


export const webframeNavbars: NavItem = {
    text: '前端开发',
    activeMatch: '^/pages/webframe/',
    items: [
        { text: '前端开发基础', link: links.getLink(links,"前端开发").items[0].items[0].link, icon: 'line-md:coffee-loop' },
        { text: '前端工程化', link: links.getLink(links,"前端开发").items[1].items[0].link, icon: 'line-md:coffee-loop' },
        { text: 'Vue开发框架', link: links.getLink(links,"前端开发").items[2].items[0].link, icon: 'line-md:coffee-loop' },
        { text: 'React开发框架', link: links.getLink(links,"前端开发").items[3].items[0].link, icon: 'line-md:coffee-loop' },
        { text: 'Svelet开发框架', link: links.getLink(links,"前端开发").items[4].items[0].link, icon: 'line-md:coffee-loop' },
        { text: 'Node开发', link: links.getLink(links,"前端开发").items[5].items[0].link, icon: 'line-md:coffee-loop' },
        { text: 'Uniapp小程序开发', link: links.getLink(links,"前端开发").items[6].items[0].link, icon: 'line-md:coffee-loop' },
    ],
}

export const webframeSlibars: NoteItem = {
    dir: "webframe",
    link: "/webframe/",
    sidebar: [...links.getLink(links,"前端开发").items]
}