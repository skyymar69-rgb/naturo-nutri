import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { WarningBox, MedicalDisclaimer } from '@/components/ui/WarningBox';
import { TemperamentBadge } from '@/components/ui/TemperamentBadge';
import { ButtonLink } from '@/components/ui/Button';
import { Pill, AlertTriangle, Apple } from 'lucide-react';
import { MICRONUTRIMENTS, getMicronutriment } from '@/lib/complements';

export function generateStaticParams() {
  return MICRONUTRIMENTS.map((m) => ({ slug: m.slug }));
}

interface PageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const n = getMicronutriment(params.slug);
  if (!n) return {};
  return {
    title: `${n.nom} : fiche complète Curtay`,
    description: `Tout sur le/la ${n.nom} : rôles, signes de carence, sources alimentaires, formes biodisponibles, dosages selon le Dr Curtay.`,
  };
}

export default function MicronutrientPage({ params }: PageProps) {
  const n = getMicronutriment(params.slug);
  if (!n) notFound();

  return (
    <>
      <section className="grain-bg py-16">
        <Container size="prose">
          <Link
            href="/nutritherapie/micronutriments"
            className="text-sm text-forest-700/80 hover:text-forest-900 mb-4 inline-block"
          >
            ← Tous les micronutriments
          </Link>
          <Badge variant="earth" className="mb-4 capitalize">
            {n.categorie.replace('_', ' ')}
          </Badge>
          <h1 className="font-display text-5xl sm:text-6xl text-forest-900 leading-tight text-balance">
            {n.nom}
          </h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {n.temperaments_prioritaires.map((t) => (
              <TemperamentBadge key={t} slug={t} />
            ))}
          </div>
        </Container>
      </section>

      <Container size="prose" className="py-12 space-y-10">
        <section>
          <h2 className="font-display text-2xl text-forest-900 mb-4 flex items-center gap-2">
            <Pill className="h-5 w-5" /> Rôles physiologiques
          </h2>
          <ul className="space-y-1.5 text-forest-800/90">
            {n.roles.map((r) => (
              <li key={r} className="flex gap-2.5">
                <span className="text-sage-600 mt-1">●</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl text-forest-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" /> Signes de carence
          </h2>
          <ul className="space-y-1.5 text-forest-800/90">
            {n.signes_carence.map((s) => (
              <li key={s} className="flex gap-2.5">
                <span className="text-earth-500 mt-1">●</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl text-forest-900 mb-4 flex items-center gap-2">
            <Apple className="h-5 w-5" /> Sources alimentaires
          </h2>
          <Card accent="sage">
            <CardContent>
              <ul className="space-y-1.5 text-sm text-forest-800/90">
                {n.sources_alimentaires.map((s) => (
                  <li key={s} className="flex gap-2.5">
                    <span className="text-sage-600">+</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="grid sm:grid-cols-2 gap-4">
          <Card accent="forest">
            <CardContent>
              <CardTitle className="text-base text-sage-700 mb-3">
                ✓ Formes recommandées
              </CardTitle>
              <ul className="space-y-1.5 text-sm text-forest-800/90">
                {n.formes_recommandees.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-sage-600">●</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          {n.formes_a_eviter && n.formes_a_eviter.length > 0 && (
            <Card accent="earth">
              <CardContent>
                <CardTitle className="text-base text-earth-700 mb-3">
                  ✗ Formes à éviter
                </CardTitle>
                <ul className="space-y-1.5 text-sm text-forest-800/90">
                  {n.formes_a_eviter.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-earth-500">●</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </section>

        <section className="grid sm:grid-cols-2 gap-4">
          {n.ajr_officiel && (
            <Card accent="cream">
              <CardContent>
                <p className="text-xs uppercase tracking-wider text-forest-600 font-medium mb-2">
                  AJR officiel
                </p>
                <p className="text-forest-800/90 text-sm">{n.ajr_officiel}</p>
              </CardContent>
            </Card>
          )}
          {n.dosage_curtay && (
            <Card accent="earth">
              <CardContent>
                <p className="text-xs uppercase tracking-wider text-earth-600 font-medium mb-2">
                  Dosage Curtay
                </p>
                <p className="text-forest-800/90 text-sm font-medium">{n.dosage_curtay}</p>
              </CardContent>
            </Card>
          )}
        </section>

        {n.interactions && n.interactions.length > 0 && (
          <section>
            <h2 className="font-display text-2xl text-forest-900 mb-4">Interactions</h2>
            <Card accent="cream">
              <CardContent>
                <ul className="space-y-1.5 text-sm text-forest-800/90">
                  {n.interactions.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-forest-600">↔</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        )}

        {n.note_curtay && (
          <WarningBox variant="info" title="Note du Dr Curtay">
            <p>{n.note_curtay}</p>
          </WarningBox>
        )}

        {n.contre_indications && n.contre_indications.length > 0 && (
          <WarningBox variant="warning" title="Contre-indications">
            <ul className="space-y-1">
              {n.contre_indications.map((c) => (
                <li key={c}>• {c}</li>
              ))}
            </ul>
          </WarningBox>
        )}

        <MedicalDisclaimer />

        <div className="text-center pt-4">
          <ButtonLink href="/nutritherapie/micronutriments" variant="secondary">
            ← Tous les micronutriments
          </ButtonLink>
        </div>
      </Container>
    </>
  );
}
