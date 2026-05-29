import type { Metadata, Viewport } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/JsonLd';
import { BackToTop } from '@/components/BackToTop';
import { ThemeScript } from '@/components/ThemeScript';

// Police de titre — serif éditorial élégant (remplace Fjalla One)
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const SITE = 'https://naturo-nutri.vercel.app';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f2fbf4' },
    { media: '(prefers-color-scheme: dark)',  color: '#0f5e37' },
  ],
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Nutriéa — L\'alliance de la nature et de la nutrition',
    template: '%s · Nutriéa',
  },
  description:
    "Nutriéa — portail de référence francophone en naturopathie et nutrithérapie. Guides exhaustifs sur le jeûne, les cures, les plantes médicinales, les vitamines, les minéraux et les protocoles santé.",
  applicationName: 'Nutriéa',
  generator: 'Next.js',
  keywords: [
    'naturopathie',
    'nutrithérapie',
    'Nutriéa',
    'jeûne hydrique',
    'monodiète',
    'alimentation vivante',
    'plantes médicinales',
    'vitamines',
    'minéraux',
    'compléments alimentaires',
    'magnésium',
    'vitamine D',
    'oméga-3',
    'détox',
    'drainage',
  ],
  authors: [{ name: 'Nutriéa — KAYZEN LYON' }],
  creator: 'KAYZEN LYON',
  publisher: 'KAYZEN LYON',
  alternates: {
    canonical: '/',
    types: { 'application/rss+xml': '/feed.xml' },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Nutriéa',
    title: 'Nutriéa — L\'alliance de la nature et de la nutrition',
    description:
      "Guides exhaustifs : jeûnes, cures, plantes, vitamines, minéraux, compléments alimentaires, protocoles santé. Portail éducatif gratuit.",
    images: [{ url: '/api/og', width: 1200, height: 630, alt: 'Nutriéa — naturopathie et nutrithérapie' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nutriéa — L\'alliance de la nature et de la nutrition',
    description:
      "Guides exhaustifs en naturopathie et nutrithérapie. Portail éducatif gratuit.",
    images: ['/api/og'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  formatDetection: { telephone: false, email: false, address: false },
  icons: {
    icon: [
      { url: '/logo-nutriea.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/logo-nutriea.svg' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />
        <link rel="alternate" type="application/rss+xml" title="Nutriéa — derniers articles" href="/feed.xml" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://images.pexels.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {/* Skip-to-main — accessibilité WCAG 2.1 SC 2.4.1 */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:bg-sage-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:shadow-lg"
        >
          Aller au contenu principal
        </a>

        <Navigation />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <BackToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
