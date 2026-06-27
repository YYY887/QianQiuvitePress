<script setup lang="ts">
import { computed } from 'vue'
import { articles } from '../article-source'

function formatDate(date: string) {
  if (!date) return ''
  const value = new Date(date)
  if (Number.isNaN(value.getTime())) return date
  return value.toISOString().slice(0, 10)
}

const year = computed(() => {
  const firstDate = articles.find(article => article.date)?.date
  const value = firstDate ? new Date(firstDate).getFullYear() : new Date().getFullYear()
  return Number.isNaN(value) ? new Date().getFullYear() : value
})

const heatmapDays = computed(() => {
  const start = new Date(year.value, 0, 1)
  const end = new Date(year.value, 11, 31)
  const counts = new Map<string, number>()

  articles.forEach((article) => {
    const day = formatDate(article.date)
    if (day.startsWith(String(year.value))) {
      counts.set(day, (counts.get(day) || 0) + 1)
    }
  })

  const days = []
  const cursor = new Date(start)
  cursor.setDate(cursor.getDate() - cursor.getDay())

  while (cursor <= end || cursor.getDay() !== 0) {
    const key = cursor.toISOString().slice(0, 10)
    days.push({
      key,
      count: counts.get(key) || 0,
      inYear: cursor.getFullYear() === year.value,
      month: cursor.getMonth() + 1
    })
    cursor.setDate(cursor.getDate() + 1)
  }

  return days
})

const monthLabels = computed(() => {
  const labels: { month: number, column: number }[] = []
  let previous = 0

  heatmapDays.value.forEach((day, index) => {
    if (day.inYear && day.month !== previous) {
      labels.push({ month: day.month, column: Math.floor(index / 7) + 1 })
      previous = day.month
    }
  })

  return labels
})

function level(count: number) {
  if (count <= 0) return 0
  if (count === 1) return 1
  if (count === 2) return 2
  if (count === 3) return 3
  return 4
}
</script>

<template>
  <section class="heatmap-section" aria-label="文章发布热力图">
    <div class="heatmap-title">
      <h2>文章发布热力图</h2>
      <span>{{ year }}</span>
    </div>
    <div class="heatmap-wrap">
      <div class="heatmap-months">
        <span
          v-for="label in monthLabels"
          :key="label.month"
          :style="{ gridColumn: label.column }"
        >
          {{ label.month }}月
        </span>
      </div>
      <div class="heatmap-body">
        <div class="heatmap-weekdays">
          <span>一</span>
          <span>三</span>
          <span>五</span>
        </div>
        <div class="heatmap-grid">
          <span
            v-for="day in heatmapDays"
            :key="day.key"
            class="heatmap-cell"
            :class="[`level-${level(day.count)}`, { muted: !day.inYear }]"
            :title="`${day.key}: ${day.count} 篇`"
          />
        </div>
      </div>
      <div class="heatmap-legend">
        <span>少</span>
        <i class="level-0" />
        <i class="level-1" />
        <i class="level-2" />
        <i class="level-3" />
        <i class="level-4" />
        <span>多</span>
      </div>
    </div>
  </section>

  <section id="articles" class="article-section">
    <div class="section-head">
      <p>Articles</p>
      <h2>全部文章</h2>
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
