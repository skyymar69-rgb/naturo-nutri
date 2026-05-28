import type { Metadata } from 'next';
import { Fjalla_One, DM_Sans } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';

const fjallaOne = Fjalla_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-fjalla',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://naturo-nutri.vercel.app'),
  title: {
    default: 'Nutriéa — L\'alliance de la nature et de la nutrition',
    template: '%s · Nutriéa',
  },
  description:
    "Nutriéa — portail de référence francophone en naturopathie et nutrithérapie. Guides exhaustifs sur le jeûne, les cures, les plantes médicinales, les vitamines, les minéraux et les protocoles santé.",
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
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Nutriéa',
    title: 'Nutriéa — L\'alliance de la nature et de la nutrition',
    description:
      "Guides exhaustifs : jeûnes, cures, plantes, vitamines, minéraux, compléments alimentaires, protocoles santé. Portail éducatif gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
  // RGPD / accessibility
  other: {
    'theme-color': '#0f5e37',
    'color-scheme': 'light',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fjallaOne.variable} ${dmSans.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/logo-nutriea.svg" />
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
        <CookieBanner />
      </body>
    </html>
  );
}
