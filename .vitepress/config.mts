import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
      { text: '文章', link: '/posts/今日' },
      { text: '项目实战', link: '/projects' },
      { text: '每日流水账', link: '/daily/2026-06-25' },
      { text: '关于', link: '/about' }
    ],

    sidebar: [
      {
        text: '文章',
        items: [
          { text: '今日', link: '/posts/今日' },
          { text: '出彩中原项目', link: '/posts/出彩中原项目' },
          { text: '云企智创', link: '/posts/云企智创' },
          { text: 'self-design 项目', link: '/posts/self-design项目' },
          { text: 'Typora Linux 快捷键', link: '/posts/一些快捷键' }
        ]
      },
      {
        text: '每日流水账',
        items: [
          { text: '2026-06-25', link: '/daily/2026-06-25' }
        ]
      }
    ]
  }
})
