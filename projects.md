---
title: 项目实战
---

# 项目实战

## 项目列表

<div class="project-grid">
  <a class="project-card" href="/posts/出彩中原项目">
    <span class="project-tag">旅游项目</span>
    <strong>出彩中原项目</strong>
    <p>围绕旅游内容的小程序与 Web 项目实践记录。</p>
  </a>
  <a class="project-card" href="/posts/云企智创">
    <span class="project-tag">业务系统</span>
    <strong>云企智创</strong>
    <p>Vue 与 Spring Boot 方向的企业服务项目记录。</p>
  </a>
  <a class="project-card" href="/posts/self-design项目">
    <span class="project-tag">个人站</span>
    <strong>self-design 项目</strong>
    <p>个人博客、简历和作品展示方向的设计与开发记录。</p>
  </a>
</div>

## 实战记录

这里可以继续补充每个项目的目标、技术栈、开发过程、遇到的问题和最终结果。

## 复盘模板

### 项目背景

说明为什么要做这个项目，项目解决什么问题。

### 技术方案

记录前端、后端、数据库、部署方式和关键依赖。

### 开发过程

按阶段记录开发中的重要节点和调整。

### 问题复盘

整理踩坑、修复过程和后续可优化的地方。

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

