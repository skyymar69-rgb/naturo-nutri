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
  metadataBase: new URL('https://naturo-nutri.example'),
  title: {
    default: 'Naturo·Nutri — Le site de référence en naturopathie et nutrithérapie',
    template: '%s · Naturo·Nutri',
  },
  description:
    "Découvrez votre tempérament hippocratique et recevez un protocole de santé personnalisé inspiré d'Irène Grosjean et du Dr Jean-Paul Curtay : alimentation vivante, jeûnes, purges, compléments alimentaires, micronutriments.",
  keywords: [
    'naturopathie',
    'nutrithérapie',
    'Irène Grosjean',
    'Jean-Paul Curtay',
    'tempérament hippocratique',
    'jeûne',
    'alimentation vivante',
    'micronutriments',
    'sanguin bilieux nerveux lymphatique',
    'purge ricin',
    'monodiète',
  ],
  authors: [{ name: 'Naturo·Nutri' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Naturo·Nutri',
    title: 'Naturo·Nutri — Le site de référence en naturopathie et nutrithérapie',
    description:
      "Quiz tempérament + protocoles personnalisés combinant l'enseignement d'Irène Grosjean et du Dr Jean-Paul Curtay.",
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
