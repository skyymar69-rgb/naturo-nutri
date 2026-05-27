import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://naturo-nutri.vercel.app'),
  title: {
    default: 'Naturo·Nutri — Le portail de référence en naturopathie et nutrithérapie',
    template: '%s · Naturo·Nutri',
  },
  description:
    "Le portail de référence francophone en naturopathie et nutrithérapie. Guides exhaustifs sur le jeûne, les cures, les plantes médicinales, les vitamines, les minéraux, les compléments alimentaires et les protocoles santé.",
  keywords: [
    'naturopathie',
    'nutrithérapie',
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
  authors: [{ name: 'Naturo·Nutri' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Naturo·Nutri',
    title: 'Naturo·Nutri — Le portail de référence en naturopathie et nutrithérapie',
    description:
      "Guides exhaustifs : jeûnes, cures, plantes, vitamines, minéraux, compléments alimentaires, protocoles santé.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
