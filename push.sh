#!/usr/bin/env bash
set -euo pipefail

message="${*:-更新内容}"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "当前目录不是 Git 仓库"
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
