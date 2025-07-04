import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  editLink: true,

  title: 'Telomerase Database',
  description: 'The Telomerase Database is a web-based tool for the study of structure, function, and evolution of the telomerase ribonucleoprotein.',

  theme: defaultTheme({
    logo: '/images/hero.jpg',

    navbar: [
      '/',
      '/Overview',
      '/Review Articles',
      {
        text: "Sequences",
        icon: "circle-info",
        prefix: "/Sequences/",
        children: [
          "Summary",
          "TR Sequences",
          "TERT Sequences",
          "Telomere Sequences",
          "Other Sequences"
        ]
      },
      '/Alignments',
      '/Structures',
      '/Diseases',
      '/Researchers',
      '/Contact'
    ],
  }),

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器',
    },
  },

  bundler: viteBundler(),
})
