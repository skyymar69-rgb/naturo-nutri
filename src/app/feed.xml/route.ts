import { ALL_ARTICLES } from '@/lib/articles';
import { getCategory } from '@/lib/categories';
import { ALL_ACTUALITES, getActualiteCategoryMeta } from '@/lib/actualites';

const SITE = 'https://naturo-nutri.vercel.app';

function esc(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  // Actualités d'abord (sourcées, plus récentes)
  const actualiteItems = ALL_ACTUALITES.map((a) => {
    const cat = getActualiteCategoryMeta(a.category);
    const url = `${SITE}/actualites/${a.slug}`;
    const pubDate = new Date(a.publishedAt).toUTCString();
    return `    <item>
      <title>${esc(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${esc(a.excerpt)}</description>
      <category>Actualités · ${esc(cat?.nom ?? a.category)}</category>
      <pubDate>${pubDate}</pubDate>
    </item>`;
  }).join('\n');

  const articleItems = ALL_ARTICLES.slice(0, 40).map((a) => {
    const cat = getCategory(a.domain, a.category);
    const url = `${SITE}/${a.domain}/${a.category}/${a.slug}`;
    return `    <item>
      <title>${esc(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${esc(a.excerpt)}</description>
      <category>${esc(cat?.nom ?? a.category)}</category>
    </item>`;
  }).join('\n');

  const items = `${actualiteItems}\n${articleItems}`;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Nutriéa — derniers articles</title>
    <link>${SITE}</link>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Guides de naturopathie et de nutrithérapie — Nutriéa.</description>
    <language>fr-FR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
