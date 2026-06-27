import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'docs',
  lang: 'zh-CN',
  title: "QianQiu",
  description: "千秋的日常琐碎",
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { property: 'og:title', content: 'QianQiu' }],
    ['meta', { property: 'og:description', content: '千秋的日常琐碎，记录项目、日常和学习碎片。' }]
  ],
  themeConfig: {
    outline: {
      level: [2, 3],
      label: '目录'
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',
    logo: 'https://paper.mytx.fun/仙尊.jpg',
    nav: [
      { text: '首页', link: '/' },
      { text: '分类', link: '/categories' },
      { text: '项目实战', link: '/projects' },
      { text: '关于', link: '/about' }
    ],
    sidebar: false
  }
})
