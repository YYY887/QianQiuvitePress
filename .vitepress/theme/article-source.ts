type Article = {
  title: string
  url: string
  date: string
  category: string
  excerpt: string
}

const modules = import.meta.glob('../../docs/*/*.md', {
  eager: true,
  import: 'default',
  query: '?raw'
}) as Record<string, string>

function field(src: string, name: string) {
  const match = src.match(new RegExp(`^${name}:\\s*(.+)$`, 'm'))
  return match?.[1]?.replace(/^['"]|['"]$/g, '').trim() || ''
}

function cleanContent(src = '') {
  return src
    .replace(/^---[\s\S]*?---/, '')
    .replace(/!\[[^\]]*]\([^)]*\)/g, '')
    .replace(/\[[^\]]*]\([^)]*\)/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/^#+\s*/gm, '')
    .replace(/[*_`>|-]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function toArticle(path: string, src: string): Article {
  const [, category = '', filename = ''] = path.match(/docs\/([^/]+)\/(.+)\.md$/) || []
  const content = cleanContent(src)

  return {
    title: field(src, 'title') || filename,
    url: `/${category}/${filename}`,
    date: field(src, 'date'),
    category,
    excerpt: field(src, 'description') || `${content.slice(0, 120)}${content.length > 120 ? '...' : ''}`
  }
}

export const articles = Object.entries(modules)
  .map(([path, src]) => toArticle(path, src))
  .sort((a, b) => +new Date(b.date) - +new Date(a.date))

export const categories = articles.reduce<Record<string, Article[]>>((result, article) => {
  result[article.category] ||= []
  result[article.category].push(article)
  return result
}, {})
