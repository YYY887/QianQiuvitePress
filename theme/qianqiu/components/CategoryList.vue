<script setup lang="ts">
import { categories } from '../article-source'

const categoryEntries = Object.entries(categories)
</script>

<template>
  <div class="category-list">
    <section v-for="[category, items] in categoryEntries" :key="category" class="category-group">
      <div class="category-head">
        <h2>{{ category }}</h2>
        <span>{{ items.length }} 篇</span>
      </div>
      <div class="category-items">
        <a v-for="article in items" :key="article.url" :href="article.url">
          <strong>{{ article.title }}</strong>
          <p>{{ article.excerpt }}</p>
        </a>
      </div>
    </section>
  </div>
</template>
