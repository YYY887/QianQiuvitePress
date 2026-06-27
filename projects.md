---
title: 项目实战
sidebar: false
---

# 项目实战

## 项目列表

<div class="project-grid">
  <a class="project-card" href="https://pay.mytx.fun" target="_blank" rel="noreferrer">
    <span class="project-tag">支付平台</span>
    <strong>千秋付</strong>
    <p>基于 Vue 和 FastAPI 的易支付平台。</p>
  </a>
  <a class="project-card" href="https://github.com/YYY887/QianMusic" target="_blank" rel="noreferrer">
    <span class="project-tag">音乐播放器</span>
    <strong>千秋 Music</strong>
    <p>基于 React 的网易云播放器，仿 iOS 风格。</p>
  </a>
</div>

<style>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin: 24px 0;
}
.project-card {
  display: block;
  min-height: 150px;
  padding: 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.project-card:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.project-card strong {
  display: block;
  margin-top: 10px;
  font-size: 18px;
}

.project-card p {
  margin: 10px 0 0;
  color: var(--vp-c-text-2);
  line-height: 1.7;
}

.project-tag {
  color: var(--vp-c-brand-1);
  font-size: 13px;
  font-weight: 600;
}
</style>
