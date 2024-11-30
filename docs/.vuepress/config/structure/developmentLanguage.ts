import links from "../links";
import {
    NavbarGroupOptions,
    NavbarLinkOptions,
    SidebarArrayOptions,
    SidebarItemOptions,
    SidebarOptions
} from "vuepress-theme-hope";


export const developmentLanguageNavbars: (NavbarLinkOptions | NavbarGroupOptions) = {
    text: '开发语言',
    activeMatch: '^/java/',
    children: [
        {
            text: 'Java',
            link: "/java/7t92c9nx/"
        },
    ],
}

export const javaSlibars: any = {
    "/java/": [...links.getLink(links["后端开发语言"], "Java").children]
}
