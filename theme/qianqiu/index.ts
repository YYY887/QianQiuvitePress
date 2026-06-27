import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import CategoryList from './components/CategoryList.vue'
import DocEnhance from './components/DocEnhance.vue'
import HomeArticleList from './components/HomeArticleList.vue'
import './style.css'

export { defineQianQiuConfig } from './config'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(DocEnhance)
    })
  },
  enhanceApp({ app }) {
    app.component('HomeArticleList', HomeArticleList)
    app.component('CategoryList', CategoryList)
  }
}
