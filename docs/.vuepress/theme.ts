import process from 'node:process'
import { plumeTheme } from 'vuepress-theme-plume'
import type { Theme } from 'vuepress'

export const theme: Theme = plumeTheme({
  plugins: {
    shiki: { twoslash: true },
    markdownPower: {
      icons: true,
    },
  },
})