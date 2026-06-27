<script setup lang="ts">
import { categories } from '../article-source'

const entries = Object.entries(categories)
</script>

<template>
  <div class="category-list">
    <section v-for="[category, items] in entries" :key="category" class="category-group">
      <div class="category-head">
        <h2>{{ category }}</h2>
        <span>{{ items.length }} 篇</span>
      </div>
      <div class="category-items">
        <a v-for="item in items" :key="item.url" :href="item.url">
          <strong>{{ item.title }}</strong>
          <p>{{ item.excerpt }}</p>
        </a>
      </div>
    </section>
  </div>
</template>
