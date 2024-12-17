
import links from "../links";
import {NavbarGroupOptions, NavbarLinkOptions, SidebarArrayOptions, SidebarItemOptions} from "vuepress-theme-hope";

const navName = "分布式"


export const bigdataNavbars:(NavbarLinkOptions | NavbarGroupOptions) = {
    text:navName,
    activeMatch: '^/leaning_book/bigdata/',
    link:"/bigdata/es/"
}

export const bigdataSlibars: SidebarArrayOptions = [...links.getLink(links,navName).children]
