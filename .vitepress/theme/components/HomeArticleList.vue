<script setup lang="ts">
import { articles } from '../article-source'

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
    </div>

    <div class="article-list">
      <a v-for="article in articles" :key="article.url" class="article-item" :href="article.url">
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
