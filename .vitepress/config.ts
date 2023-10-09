import { defineConfig } from 'vitepress'
import nav from './nav'
import sidebar from './sidebar'

export default defineConfig({
  title: "keverjs",
  description: "node.js framework",
  base: '/docs',
  themeConfig: {
    i18nRouting: true,
    nav: nav,
    sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/keverjs/kever' }
    ],
    lastUpdated: {
      text: 'Last Updated'
    }
  }
})
