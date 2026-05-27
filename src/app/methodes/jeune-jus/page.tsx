import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SourceBadge } from '@/components/ui/SourceBadge';
import { WarningBox, MedicalDisclaimer } from '@/components/ui/WarningBox';
import { TemperamentBadge } from '@/components/ui/TemperamentBadge';
import { ButtonLink } from '@/components/ui/Button';
import { getMethode } from '@/lib/methodes';

const RECETTES = [
  {
    nom: 'Détox foie',
    pour: 'bilieux' as const,
    ingredients: ['1 pomme verte', '1 artichaut', '1 cm gingembre', '1/2 citron', '1 branche céleri'],
    bienfaits: 'Stimulation de la vésicule biliaire, drainage des toxines hépatiques.',
  },
  {
    nom: 'Reminéralisant',
    pour: 'nerveux' as const,
    ingredients: ['3 carottes', '1 petite betterave', '2 branches céleri', '1/2 citron', '1 cm curcuma frais'],
    bienfaits: 'Apport minéral profond, soutien des surrénales, calme.',
  },
  {
    nom: 'Drainant lymphatique',
    pour: 'lymphatique' as const,
    ingredients: ['1 concombre', '1 citron entier', '1 poignée persil', '2 cm gingembre', '1/4 ananas'],
    bienfaits: 'Drainage lymphatique, élimination eau, anti-inflammatoire puissant.',
  },
  {
    nom: 'Cardiovasculaire',
    pour: 'sanguin' as const,
    ingredients: ['1 betterave', '1/2 grenade', '1 carotte', '1 cm curcuma', '1/2 citron'],
    bienfaits: 'Polyphénols, lycopène, soutien tension et fluidité sanguine.',
  },
  {
    nom: 'Vert universel',
    pour: undefined,
    ingredients: ['3 feuilles kale', '1 concombre', '1 pomme verte', '1 citron', '1 poignée épinards', '1 cm gingembre'],
    bienfaits: 'Alcalinisant, chlorophylle, magnésium, fer végétal.',
  },
];

export const metadata: Metadata = {
  title: 'Jeûne aux jus : recettes par tempérament et saison',
  description:
    'Jeûne aux jus de légumes et fruits : protocole, recettes par tempérament, extracteur à froid vs centrifugeuse, planning de cure 3 à 21 jours.',
};

export default function JeuneJusPage() {
  const m = getMethode('jeune-jus')!;

  return (
    <>
      <section className="grain-bg py-16">
        <Container size="prose">
          <div className="flex items-center gap-3 mb-6">
            <SourceBadge source={m.source} />
            <Badge variant="neutral" className="capitalize">Niveau {m.niveau}</Badge>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl text-forest-900 leading-tight text-balance">
            Jeûne aux jus
          </h1>
          <p className="mt-4 text-lg text-forest-700/85 leading-relaxed">{m.resume}</p>
        </Container>
      </section>

      <Container size="prose" className="py-12 space-y-12">
        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-4">
            Hydrique ou aux jus ?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card accent="forest">
              <CardContent>
                <CardTitle className="text-lg">Jeûne hydrique</CardTitle>
                <p className="text-sm text-forest-800/90 mt-3 leading-relaxed">
                  Repos digestif <strong>total</strong>, autophagie maximale, mais épuisant en cas de
                  fragilité du terrain. Réservé aux profils robustes ou encadrés.
                </p>
              </CardContent>
            </Card>
            <Card accent="sage">
              <CardContent>
                <CardTitle className="text-lg">Jeûne aux jus</CardTitle>
                <p className="text-sm text-forest-800/90 mt-3 leading-relaxed">
                  Apport en <strong>vitamines, minéraux, enzymes</strong> sans solliciter la
                  digestion. Plus accessible, plus tolérable, surtout en début de cure ou pour
                  les tempéraments fragiles.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-4">Extracteur ou centrifugeuse ?</h2>
          <div className="prose prose-natural max-w-none text-forest-800/90 leading-relaxed">
            <p>
              <strong>Extracteur à froid (recommandé) :</strong> presse les ingrédients sans chauffer.
              Conservation maximale des enzymes et vitamines. Plus de jus, moins d'oxydation. Marques
              références : Kuvings, Hurom, Versapers.
            </p>
            <p>
              <strong>Centrifugeuse :</strong> rapide, plus accessible, mais chauffe légèrement et
              oxyde davantage. À consommer immédiatement.
            </p>
            <p>
              <strong>Smoothie :</strong> garde les fibres = plus rassasiant mais demande plus de
              digestion. Pas adapté en pur jeûne aux jus.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-6">
            5 recettes par profil
          </h2>
          <div className="space-y-4">
            {RECETTES.map((r) => (
              <Card key={r.nom} accent="cream">
                <CardContent>
                  <div className="flex items-baseline justify-between mb-3 flex-wrap gap-2">
                    <h3 className="font-display text-xl text-forest-900">{r.nom}</h3>
                    {r.pour ? (
                      <TemperamentBadge slug={r.pour} />
                    ) : (
                      <Badge variant="sage">Tous tempéraments</Badge>
                    )}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-forest-600 mb-2">Ingrédients (pour 500 ml)</p>
                    <ul className="grid sm:grid-cols-2 gap-1 text-sm text-forest-800/90">
                      {r.ingredients.map((i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-sage-600">+</span>
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-4 text-sm text-forest-700/85 italic border-t border-forest-100 pt-3">
                    {r.bienfaits}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-4">Planning type d'une cure 7 jours</h2>
          <Card accent="forest">
            <CardContent>
              <ul className="space-y-2 text-sm text-forest-800/90">
                <li>• <strong>7h</strong> : eau citronnée tiède au réveil</li>
                <li>• <strong>9h</strong> : Jus vert (concombre/épinards/citron/gingembre) — 500 ml</li>
                <li>• <strong>12h</strong> : Jus carotte/betterave/céleri/curcuma — 500 ml</li>
                <li>• <strong>15h</strong> : Tisane douce (verveine, mélisse, ortie)</li>
                <li>• <strong>17h</strong> : Jus pomme/citron/gingembre — 400 ml</li>
                <li>• <strong>19h</strong> : Bouillon de légumes filtré OU jus végétal sans amidon</li>
                <li>• <strong>Toute la journée :</strong> 1 à 1,5 L d'eau pure entre les jus</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <WarningBox variant="warning" title="Contre-indications">
          <ul>
            {m.contre_indications.map((c) => (
              <li key={c}>• {c}</li>
            ))}
          </ul>
        </WarningBox>

        <MedicalDisclaimer />

        <div className="text-center">
          <ButtonLink href="/methodes" variant="secondary">
            ← Toutes les méthodes
          </ButtonLink>
        </div>
      </Container>
    </>
  );
}
