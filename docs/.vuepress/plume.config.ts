import { defineThemeConfig } from 'vuepress-theme-plume'
import { slibars } from './config/slibars'
import { navbars } from './config/navbars'


export default defineThemeConfig({
    notes: slibars,
    navbar: navbars,
    footer:false
})