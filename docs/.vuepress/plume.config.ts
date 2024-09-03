import { defineThemeConfig } from 'vuepress-theme-plume'
import { slibars } from './config/slibars'
import { navbars } from './config/navbars'


export default defineThemeConfig({
    notes: slibars,
    navbar: navbars,
    footer: false,
    profile: {
        name: '鹏展博',
        avatar: '/images/blogger-fav.png',
        description: '世间的美好总是不期而遇',
    },
})