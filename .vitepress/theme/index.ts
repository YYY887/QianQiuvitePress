import DefaultTheme from 'vitepress/theme'
import CategoryList from './components/CategoryList.vue'
import HomeArticleList from './components/HomeArticleList.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeArticleList', HomeArticleList)
    app.component('CategoryList', CategoryList)
  }
}
