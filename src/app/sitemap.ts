import type { MetadataRoute } from 'next';
import { ALL_ARTICLES } from '@/lib/articles';
import { CATEGORIES } from '@/lib/categories';
import { ALL_ACTUALITES, ACTUALITE_CATEGORIES } from '@/lib/actualites';

const SITE = 'https://naturo-nutri.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    '',
    '/naturopathie',
    '/nutritherapie',
    '/actualites',
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

  return [
    ...staticPages,
    ...categoryPages,
    ...articlePages,
    ...actualiteCategoryPages,
    ...actualitePages,
  ];
}
