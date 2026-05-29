import type { MetadataRoute } from 'next';
import { ALL_ARTICLES } from '@/lib/articles';
import { CATEGORIES } from '@/lib/categories';
import { ALL_ACTUALITES, ACTUALITE_CATEGORIES } from '@/lib/actualites';
import { ALL_PLANTES } from '@/lib/plantes';
import { PLANTES_CATEGORIES } from '@/lib/plantes-categories';
import { ALL_JUS } from '@/lib/jus';
import { JUS_CATEGORIES } from '@/lib/jus-categories';
import { slugify } from '@/lib/utils';

const SITE = 'https://naturo-nutri.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    '',
    '/naturopathie',
    '/nutritherapie',
    '/plantes',
    '/jus',
    '/actualites',
    '/tags',
    '/notre-demarche',
    '/contact',
    '/naturopathie/temperaments',
    '/naturopathie/temperaments/quiz',
    '/naturopathie/contre-indications',
    '/mentions-legales',
    '/confidentialite',
    '/cgu',
    '/cookies',
  ].map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const categoryPages = CATEGORIES.map((c) => ({
    url: `${SITE}/${c.domain}/${c.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const articlePages = ALL_ARTICLES.map((a) => ({
    url: `${SITE}/${a.domain}/${a.category}/${a.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const actualiteCategoryPages = ACTUALITE_CATEGORIES.map((c) => ({
    url: `${SITE}/actualites/categorie/${c.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const actualitePages = ALL_ACTUALITES.map((a) => ({
    url: `${SITE}/actualites/${a.slug}`,
    lastModified: a.updatedAt ? new Date(a.updatedAt) : new Date(a.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // Tag pages — only tags with ≥ 2 articles
  const tagCounts = new Map<string, number>();
  for (const a of ALL_ARTICLES) for (const t of a.tags ?? []) {
    const s = slugify(t);
    tagCounts.set(s, (tagCounts.get(s) ?? 0) + 1);
  }
  for (const a of ALL_ACTUALITES) for (const t of a.tags ?? []) {
    const s = slugify(t);
    tagCounts.set(s, (tagCounts.get(s) ?? 0) + 1);
  }
  const tagPages = Array.from(tagCounts.entries())
    .filter(([, count]) => count >= 2)
    .map(([slug]) => ({
      url: `${SITE}/tags/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }));

  const plantesCategoryPages = PLANTES_CATEGORIES.map((c) => ({
    url: `${SITE}/plantes/${c.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));
  const plantesPages = ALL_PLANTES.map((p) => ({
    url: `${SITE}/plantes/${p.category}/${p.slug}`,
    lastModified: p.updatedAt ? new Date(p.updatedAt) : now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const jusCategoryPages = JUS_CATEGORIES.map((c) => ({
    url: `${SITE}/jus/${c.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));
  const jusPages = ALL_JUS.map((j) => ({
    url: `${SITE}/jus/${j.category}/${j.slug}`,
    lastModified: j.updatedAt ? new Date(j.updatedAt) : now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...articlePages,
    ...actualiteCategoryPages,
    ...actualitePages,
    ...plantesCategoryPages,
    ...plantesPages,
    ...jusCategoryPages,
    ...jusPages,
    ...tagPages,
  ];
}
