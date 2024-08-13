import { NavItem, NoteItem } from "vuepress-theme-plume";


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
    text: "开发语言",
    sidebar: [
        {
            text: "java",
            prefix: "java",
            collapsed: true,
            items: [
                {
                    text:"spring框架",
                    collapsed:true,
                    items:"auto",
                }
            ]
        }
    ]
}