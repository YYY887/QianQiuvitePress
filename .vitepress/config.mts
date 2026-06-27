import { defineConfig } from 'vitepress'
import { defineQianQiuConfig } from '../theme/qianqiu/config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...defineQianQiuConfig({
    title: 'QianQiu',
    description: '千秋的日常琐碎',
    logo: 'https://paper.mytx.fun/仙尊.jpg'
  }),
  srcDir: 'docs',
})
