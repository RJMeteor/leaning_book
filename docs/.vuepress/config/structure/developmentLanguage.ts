import { NavItem, NoteItem } from "vuepress-theme-plume";
import links from "../links";


export const developmentLanguageNavbars: NavItem = {
    text: '开发语言',
    activeMatch: '^/leaning_book/developmentLanguage/',
    items: [
        { text: 'java', link: links.getLink(links,"后端开发语言").items[0].items[0].items[0].link, icon: 'line-md:coffee-loop' },
    ],
}

export const developmentLanguageSlibars:NoteItem =   {
    dir: "developmentLanguage",
    link: "/developmentLanguage/",
    text: "后端开发语言",
    sidebar: [...links.getLink(links,"后端开发语言").items]
}