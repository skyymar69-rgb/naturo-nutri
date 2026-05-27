import type { Metadata } from 'next';
import { Fjalla_One, DM_Sans } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

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
    default: 'NaturoNutri — Portail de référence en naturopathie et nutrithérapie',
    template: '%s · NaturoNutri',
  },
  description:
    "Le portail de référence francophone en naturopathie et nutrithérapie. Guides exhaustifs sur le jeûne, les cures, les plantes médicinales, les vitamines, les minéraux et les protocoles santé.",
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
  authors: [{ name: 'NaturoNutri' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'NaturoNutri',
    title: 'NaturoNutri — Portail de référence en naturopathie et nutrithérapie',
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
    <html lang="fr" className={`${fjallaOne.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
