
import links from "../links";
import {NavbarGroupOptions, NavbarLinkOptions, SidebarArrayOptions, SidebarItemOptions} from "vuepress-theme-hope";


export const othersNavbars:(NavbarLinkOptions | NavbarGroupOptions) = {
    text: '其他',
    activeMatch: '^/leaning_book/others/',
    link: links.getLink(links,"其他").children[0].link,
}

export const othersSlibars: SidebarArrayOptions =   [...links.getLink(links,"其他").children]
