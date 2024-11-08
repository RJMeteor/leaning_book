import { NavItem, NoteItem } from "vuepress-theme-plume";
import links from "../links";


export const webframeNavbars: NavItem = {
    text: '前端开发',
    activeMatch: '^/leaning_book/webframe/',
    items: [
        { text: '前端开发基础', link: "/webframe/basics/c7sc9bni/", },
        { text: '前端工程化', link: "/webframe/engineer/7t92c9nx/", },
        { text: 'Vue开发框架', link: "/webframe/Vue/7t92c9nx/", },
        { text: 'React开发框架', link: "/webframe/React/7t92c9nx/", },
        { text: 'Svelet开发框架', link:"/webframe/Svelet/7t92c9nx/", },
        { text: 'Node开发', link: "/webframe/Node/7t92c9nx/", },
        { text: 'Uniapp小程序开发', link: "/webframe/Uniapp/7t92c9nx/", },
    ],
}

export const webframeSlibars: NoteItem = {
    dir: "webframe",
    link: "/webframe/",
    sidebar: [...links.getLink(links,"前端开发").items]
}