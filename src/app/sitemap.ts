import type { MetadataRoute } from 'next';
import { ALL_ARTICLES } from '@/lib/articles';
import { CATEGORIES } from '@/lib/categories';

const SITE = 'https://naturo-nutri.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    '',
    '/naturopathie',
    '/nutritherapie',
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

  return [...staticPages, ...categoryPages, ...articlePages];
}
