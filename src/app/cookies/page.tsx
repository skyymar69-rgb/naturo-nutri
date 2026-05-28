import type { Metadata } from 'next';
import { LEGAL } from '@/lib/legal-content';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Politique cookies',
  description: 'Politique de gestion des cookies du site Nutriéa — types de cookies, finalités, durées de conservation, gestion du consentement.',
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title={LEGAL.cookies.title}
      lastUpdated="mai 2026"
      badge="ePrivacy — Directive 2009/136/CE"
      intro="Conformément aux recommandations de la CNIL (délibération n° 2020-091 du 17 septembre 2020) et à la directive ePrivacy 2009/136/CE, la présente politique vous informe des cookies et traceurs utilisés sur le site Nutriéa, de leurs finalités et de vos droits."
      sections={LEGAL.cookies.sections}
    />
  );
}
