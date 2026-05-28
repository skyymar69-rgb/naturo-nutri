/**
 * JSON-LD structured data — Schema.org.
 * Server component, posé dans le <head> via dangerouslySetInnerHTML (recommandé Next).
 */

interface Crumb {
  name: string;
  url: string;
}

export function ArticleJsonLd({
  title, description, datePublished, dateModified, url, imageUrl, authorName, readingTimeMin,
}: {
  title: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  url: string;
  imageUrl?: string;
  authorName: string;
  readingTimeMin?: number;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: datePublished ?? new Date().toISOString(),
    dateModified: dateModified ?? datePublished ?? new Date().toISOString(),
    author: { '@type': 'Organization', name: authorName },
    publisher: {
      '@type': 'Organization',
      name: 'Nutriéa',
      logo: { '@type': 'ImageObject', url: 'https://naturo-nutri.vercel.app/logo-nutriea.svg' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    ...(imageUrl ? { image: [imageUrl] } : {}),
    ...(readingTimeMin ? { timeRequired: `PT${readingTimeMin}M` } : {}),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({ crumbs }: { crumbs: Crumb[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQJsonLd({ faq }: { faq: { question: string; answer: string }[] }) {
  if (!faq || faq.length === 0) return null;
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Nutriéa',
    url: 'https://naturo-nutri.vercel.app',
    inLanguage: 'fr-FR',
    description: "Portail de référence francophone en naturopathie et nutrithérapie.",
    publisher: { '@type': 'Organization', name: 'Nutriéa', '@id': 'https://naturo-nutri.vercel.app/#org' },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://naturo-nutri.vercel.app/tags/{search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nutriéa',
    url: 'https://naturo-nutri.vercel.app',
    logo: 'https://naturo-nutri.vercel.app/logo-nutriea.svg',
    description: "Portail de référence francophone en naturopathie et nutrithérapie.",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
