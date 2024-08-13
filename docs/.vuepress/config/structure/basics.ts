import { NavItem, NoteItem } from "vuepress-theme-plume";


export const basicsNavbars: NavItem = {
    text: '计算机基础',
    activeMatch: '^/pages/basics/',
    items: [
        { text: '基础知识', link: '/pages/basics/basicKnowledge/基础.md', icon: 'line-md:coffee-loop' },
        { text: '计算机网络', link: '/pages/basics/computerNetwork/', icon: 'jam:tools' },
        { text: '数据结构', link: '/pages/basics/dateStructure/', icon: 'carbon:friendship' },
        { text: '算法', link: '/pages/basics/algorithm/', icon: 'carbon:friendship' },
    
    ],
}

export const basicsSlibars: NoteItem = {
    dir: "basics",
    link: "/basics/",   
    text: "计算机基础知识",
    sidebar: [
        {
            text: "计算机基础知识",
            dir: "basicKnowledge",
            collapsed: false,
            items: "auto"
        },
        {
            text: "计算机网络",
            dir: "computerNetwork",
            collapsed: true,
            items: "auto"
        },
        {
            text: "数据结构",
            dir: "dateStructure",
            collapsed: true,
            items: "auto"
        },
        {
            text: "算法",
            dir: "algorithm",
            collapsed: true,
            items: "auto"
        }
    ]
}