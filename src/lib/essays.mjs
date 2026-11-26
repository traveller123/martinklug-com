// Collects all essays from src/pages/essays/*.md, newest-first by `order`.
export function getEssays() {
  const modules = import.meta.glob('../pages/essays/*.md', { eager: true });
  return Object.values(modules)
    .filter((m) => !m.frontmatter.draft)
    .map((m) => ({
      ...m.frontmatter,
      url: m.url,
      words: (m.rawContent?.() || '').split(/\s+/).filter(Boolean).length,
    }))
    .sort((a, b) => (b.order ?? 0) - (a.order ?? 0));
}

export function readingTime(words) {
  return Math.max(1, Math.round(words / 230));
}
