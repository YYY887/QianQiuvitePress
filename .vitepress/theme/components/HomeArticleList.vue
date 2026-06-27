<script setup lang="ts">
import { computed, ref } from 'vue'
import { articles, categories } from '../article-source'

const activeCategory = ref('')
const categoryNames = Object.keys(categories)
const visibleArticles = computed(() =>
  activeCategory.value
    ? articles.filter(article => article.category === activeCategory.value)
    : articles
)

function formatDate(date: string) {
  if (!date) return ''
  const value = new Date(date)
  if (Number.isNaN(value.getTime())) return date
  return value.toISOString().slice(0, 10)
}
</script>

<template>
  <section id="articles" class="article-section">
    <div class="section-head">
      <p>Articles</p>
      <div class="category-filter" aria-label="文章分类筛选">
        <button :class="{ active: activeCategory === '' }" type="button" @click="activeCategory = ''">
          全部
        </button>
        <button
          v-for="category in categoryNames"
          :key="category"
          :class="{ active: activeCategory === category }"
          type="button"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <div class="article-list">
      <a v-for="article in visibleArticles" :key="article.url" class="article-item" :href="article.url">
        <div class="article-content">
          <div class="article-title-row">
            <h3>{{ article.title }}</h3>
            <span v-if="article.category">{{ article.category }}</span>
          </div>
          <time>{{ formatDate(article.date) }}</time>
          <p>{{ article.excerpt }}</p>
        </div>
      </a>
    </div>
  </section>
</template>
