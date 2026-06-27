<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { inBrowser, useData, useRoute } from 'vitepress'

const route = useRoute()
const { page } = useData()
const previewSrc = ref('')
const previewAlt = ref('')
const isArticlePage = computed(() => {
  const path = page.value.relativePath
  return path.startsWith('文章/') || path.startsWith('每日流水账/')
})

let cleanups: Array<() => void> = []

function closePreview() {
  previewSrc.value = ''
  previewAlt.value = ''
}

function bindImagePreview() {
  cleanups.forEach(cleanup => cleanup())
  cleanups = []

  if (!inBrowser || !isArticlePage.value) return

  document.querySelectorAll<HTMLImageElement>('.vp-doc img').forEach(img => {
    img.classList.add('zoomable-image')
    const handler = () => {
      previewSrc.value = img.currentSrc || img.src
      previewAlt.value = img.alt || '文章图片'
    }
    img.addEventListener('click', handler)
    cleanups.push(() => {
      img.removeEventListener('click', handler)
      img.classList.remove('zoomable-image')
    })
  })
}

watch(
  () => route.path,
  async () => {
    closePreview()
    await nextTick()
    bindImagePreview()
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  cleanups.forEach(cleanup => cleanup())
})
</script>

<template>
  <div v-if="isArticlePage" class="doc-action-bar">
    <a class="doc-back-link" href="/">返回首页</a>
  </div>

  <Teleport to="body">
    <div v-if="previewSrc" class="image-preview" role="dialog" aria-modal="true" @click="closePreview">
      <button class="image-preview-close" type="button" aria-label="关闭图片预览" @click.stop="closePreview">
        关闭
      </button>
      <img :src="previewSrc" :alt="previewAlt" @click.stop />
    </div>
  </Teleport>
</template>
