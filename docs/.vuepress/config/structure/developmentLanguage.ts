import {NavItem, NoteItem} from "vuepress-theme-plume";
import links from "../links";


export const developmentLanguageNavbars: NavItem = {
    text: '开发语言',
    activeMatch: '^/leaning_book/developmentLanguage/',
    items: [
        {
            text: 'Java',
            link: "/developmentLanguage/java/basics/7t92c9nx/"
        },
    ],
}

export const developmentLanguageSlibars: NoteItem = {
    dir: "developmentLanguage",
    link: "/developmentLanguage/",
    text: "后端开发语言",
    sidebar: [...links.getLink(links, "后端开发语言").items]
}