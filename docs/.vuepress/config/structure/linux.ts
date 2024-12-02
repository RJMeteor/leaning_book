
import links from "../links";
import {NavbarGroupOptions, NavbarLinkOptions, SidebarArrayOptions, SidebarItemOptions} from "vuepress-theme-hope";


export const linuxNavbars:(NavbarLinkOptions | NavbarGroupOptions) = {
    text: 'Linux操作系统',
    activeMatch: '^/leaning_book/linux/',
    children: [
        { text: 'Shell编程', link: "/linux/shellbasic/", },
        { text: 'Docker部署', link: "/linux/dockerbasic/", },
    ],
}

export const linuxSlibars: SidebarArrayOptions  =  [...links.getLink(links,"Linux操作系统").children]
