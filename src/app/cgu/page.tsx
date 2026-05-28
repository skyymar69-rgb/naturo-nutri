import type { Metadata } from 'next';
import { LEGAL } from '@/lib/legal-content';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation",
  description: "CGU du site Nutriéa — conditions d'accès et d'utilisation, droits et obligations des utilisateurs, propriété intellectuelle.",
  robots: { index: true, follow: true },
};

export default function CguPage() {
  return (
    <LegalPage
      title={LEGAL.cgu.title}
      lastUpdated="mai 2026"
      badge="CGU — Accès et utilisation"
      intro="Les présentes Conditions Générales d'Utilisation (CGU) régissent les modalités d'accès et d'utilisation du site Nutriéa (service de KAYZEN LYON). Tout accès au site vaut acceptation sans réserve des présentes conditions."
      sections={LEGAL.cgu.sections}
    />
  );
}
