import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nutriéa — naturopathie et nutrithérapie',
    short_name: 'Nutriéa',
    description: "Portail de référence francophone en naturopathie et nutrithérapie.",
    start_url: '/',
    display: 'standalone',
    background_color: '#f2fbf4',
    theme_color: '#0f5e37',
    lang: 'fr-FR',
    categories: ['health', 'lifestyle', 'education', 'medical'],
    icons: [
      { src: '/logo-nutriea.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
    ],
  };
}
