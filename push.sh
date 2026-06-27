#!/usr/bin/env bash
set -euo pipefail

message="${*:-更新内容}"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "当前目录不是 Git 仓库"
  exit 1
fi

missing_links=()
while IFS= read -r file; do
  link="/${file%.md}"
  if ! grep -F "link: '$link'" .vitepress/config.mts >/dev/null \
    && ! grep -F "link: \"$link\"" .vitepress/config.mts >/dev/null; then
    missing_links+=("$file -> $link")
  fi
done < <(find posts daily -type f -name '*.md' | sort)

if [ "${#missing_links[@]}" -gt 0 ]; then
  echo "以下文章还没有配置到 .vitepress/config.mts 的 sidebar："
  printf '  - %s\n' "${missing_links[@]}"
  echo "请先补充 sidebar 入口后再推送"
  exit 1
fi

npm run docs:build

if [ -z "$(git status --porcelain)" ]; then
  echo "没有需要提交的变更"
  exit 0
fi

git add .
git commit -m "$message"
git push

echo "已推送，GitHub Pages 会自动部署"
