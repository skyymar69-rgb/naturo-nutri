import type { Metadata } from 'next';
import { LEGAL } from '@/lib/legal-content';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité RGPD du site Nutriéa — traitement des données personnelles, droits des utilisateurs.',
  robots: { index: true, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <LegalPage
      title={LEGAL.confidentialite.title}
      lastUpdated="mai 2026"
      badge="RGPD — Règlement UE 2016/679"
      intro="Nutriéa (service de KAYZEN LYON) est pleinement engagé dans la protection de vos données à caractère personnel. Cette politique décrit les traitements effectués, vos droits et les modalités pour les exercer."
      sections={LEGAL.confidentialite.sections}
    />
  );
}
