import type { DefaultTheme, HeadConfig, UserConfig } from 'vitepress'

export type QianQiuThemeConfig = {
  title?: string
  description?: string
  logo?: string
  nav?: DefaultTheme.NavItem[]
  head?: HeadConfig[]
}

const defaultLogo = 'https://paper.mytx.fun/仙尊.jpg'

export function defineQianQiuConfig(config: QianQiuThemeConfig = {}): UserConfig {
  const title = config.title ?? 'QianQiu'
  const description = config.description ?? '千秋的日常琐碎'
  const logo = config.logo ?? defaultLogo

  return {
    lang: 'zh-CN',
    title,
    description,
    head: [
      ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.7.0/style.css' }],
      ['meta', { name: 'theme-color', content: '#ffffff' }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ...(config.head ?? [])
    ],
    themeConfig: {
      outline: {
        level: [2, 3],
        label: '目录'
      },
      returnToTopLabel: '回到顶部',
      sidebarMenuLabel: '相关文章',
      lastUpdatedText: '上次更新于',
      logo,
      nav: config.nav ?? [
        { text: '首页', link: '/' },
        { text: '分类', link: '/categories' },
        { text: '项目实战', link: '/projects' },
        { text: '关于', link: '/about' }
      ],
      sidebar: false
    }
  }
}
