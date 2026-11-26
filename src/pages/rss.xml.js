import { getEssays } from '../lib/essays.mjs';
import { site } from '../site.config.mjs';

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function GET(context) {
  const base = context.site.toString().replace(/\/$/, '');
  const items = getEssays()
    .map(
      (e) => `    <item>
      <title>${esc(e.title)}</title>
      <link>${base}${e.url}</link>
      <guid>${base}${e.url}</guid>
      <description>${esc(e.summary)}</description>
      <category>${esc(e.category)}</category>
    </item>`
    )
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${esc(site.name)} – Essays</title>
    <link>${base}</link>
    <description>${esc(site.description)}</description>
    <language>en</language>
${items}
  </channel>
</rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
