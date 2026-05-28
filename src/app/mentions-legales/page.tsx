import type { Metadata } from 'next';
import { LEGAL } from '@/lib/legal-content';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site Nutriéa — éditeur, hébergeur, propriété intellectuelle.',
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      title={LEGAL.mentionsLegales.title}
      lastUpdated="mai 2026"
      badge="LCEN — Art. 6-I"
      intro="Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'Économie Numérique (LCEN), les présentes mentions légales précisent l'identité des différents intervenants dans le cadre du site Nutriéa."
      sections={LEGAL.mentionsLegales.sections}
    />
  );
}
