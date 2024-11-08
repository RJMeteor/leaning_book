import {NavItem, NoteItem} from "vuepress-theme-plume";
import links from "../links";


export const othersNavbars: NavItem = {
    text: '其他',
    activeMatch: '^/leaning_book/others/',
    link: links.getLink(links,"其他").items[0].link,
}

export const othersSlibars: NoteItem = {
    dir: "others",
    link: "/others/",
    text: "其他",
    sidebar: [...links.getLink(links,"其他").items]
}