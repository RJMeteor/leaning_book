import process from 'node:process'
import { plumeTheme } from 'vuepress-theme-plume'
import type { Theme } from 'vuepress'

export const theme: Theme = plumeTheme({
  logo:"/feiji.svg",
  plugins: {
    shiki: { twoslash: true },
    markdownPower: {
      icons: true,
    },
  },
  social: [
    { icon: 'github', link: 'https://github.com/RJMeteor/leaning_book' }
  ],
})