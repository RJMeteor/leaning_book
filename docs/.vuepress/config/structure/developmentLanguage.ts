import { NavItem, NoteItem } from "vuepress-theme-plume";
import links from "../links";


export const developmentLanguageNavbars: NavItem = {
    text: '开发语言',
    activeMatch: '^/pages/developmentLanguage/',
    items: [
        { text: 'java', link: '/pages/developmentLanguage/java/', icon: 'line-md:coffee-loop' },
    ],
}

export const developmentLanguageSlibars:NoteItem =   {
    dir: "developmentLanguage",
    link: "/developmentLanguage/",
    text: "后端开发语言",
    sidebar: [...links.getLink(links,"后端开发语言").items]
}