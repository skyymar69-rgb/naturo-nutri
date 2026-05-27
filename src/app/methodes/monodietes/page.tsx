import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SourceBadge } from '@/components/ui/SourceBadge';
import { WarningBox, MedicalDisclaimer } from '@/components/ui/WarningBox';
import { TemperamentBadge } from '@/components/ui/TemperamentBadge';
import { ButtonLink } from '@/components/ui/Button';
import { getMethode } from '@/lib/methodes';

export const metadata: Metadata = {
  title: 'Monodiètes : raisin, pomme, riz, pastèque — guide par saison',
  description:
    "Toutes les monodiètes traditionnelles : raisin (automne), pomme (printemps/automne), riz semi-complet (hiver), pastèque (été). Protocoles par tempérament.",
};

const MONODIETES = [
  {
    nom: 'Raisin',
    saison: 'automne',
    emoji: '🍇',
    duree: '1 à 7 jours',
    temperaments: ['sanguin', 'bilieux', 'lymphatique'] as const,
    benefices: [
      'La "reine des monodiètes" selon Grosjean',
      'Polyphénols antioxydants exceptionnels',
      'Drainage hépatique profond',
      'Hydratation cellulaire',
      'Régulation intestinale',
    ],
    protocole: [
      '1 à 1,5 kg de raisin bio/jour, idéalement avec pépins',
      'Réparti en 4 à 6 prises sur la journée',
      'Mastiquer pépins compris (apport en OPC)',
      'Eau pure entre les prises',
      'Aucun autre aliment',
    ],
    note: 'À pratiquer en septembre-octobre quand le raisin est local et mûr. Préférer chasselas, muscat ou raisin de cuve bio.',
  },
  {
    nom: 'Pomme',
    saison: 'printemps & automne',
    emoji: '🍎',
    duree: '1 à 3 jours',
    temperaments: ['bilieux', 'sanguin'] as const,
    benefices: [
      'Drainage hépato-biliaire doux',
      'Pectine = nettoyage intestinal',
      'Régulation du transit',
      'Détoxification métaux lourds (pectine)',
      'Effet alcalinisant',
    ],
    protocole: [
      '1,5 kg de pommes bio/jour',
      'Variétés acides en priorité (Granny, Reinette)',
      '6 à 8 prises dans la journée',
      'Croquer entières si possible, mâcher soigneusement',
      'Compote sans sucre acceptée si problèmes dentaires',
    ],
    note: 'Cure idéale en monodiète d\'introduction au jeûne. Très bien tolérée. Peut être pratiquée 1 jour/semaine en entretien.',
  },
  {
    nom: 'Riz semi-complet',
    saison: 'automne & hiver',
    emoji: '🌾',
    duree: '1 à 3 jours',
    temperaments: ['nerveux', 'lymphatique'] as const,
    benefices: [
      'Nourrit et apaise (chaleur intérieure)',
      'Repose le foie et le système nerveux',
      'Reminéralisation douce',
      'Idéale pour tempérament fragile',
      'Régulation transit',
    ],
    protocole: [
      '200g de riz semi-complet bio sec/jour',
      'Cuit longtemps dans 5x son volume d\'eau (riz crémeux)',
      'Sans sel, sans matière grasse, sans accompagnement',
      'Réparti en 3 à 4 prises tièdes',
      'Tisanes douces acceptées',
    ],
    note: 'Monodiète de référence pour le nerveux et le lymphatique (chaud, doux, reminéralisant). Évite la décompensation du jeûne strict.',
  },
  {
    nom: 'Pastèque',
    saison: 'été',
    emoji: '🍉',
    duree: '1 à 3 jours',
    temperaments: ['sanguin', 'lymphatique'] as const,
    benefices: [
      'Hydratation maximale',
      'Drainage rénal et urinaire',
      'Lycopène (antioxydant cardiovasculaire)',
      'Idéale en canicule',
      'Effet rafraîchissant',
    ],
    protocole: [
      '1,5 à 2 kg de pastèque bio/jour',
      'Mâcher les graines aussi (sources de minéraux)',
      '4 à 6 prises dans la journée',
      'Eau plate à température ambiante en complément',
    ],
    note: 'Réservée aux journées chaudes d\'été. Très drainante — prévoir accès facile aux toilettes.',
  },
  {
    nom: 'Carotte crue',
    saison: 'toute saison',
    emoji: '🥕',
    duree: '1 à 3 jours',
    temperaments: ['nerveux', 'lymphatique', 'bilieux'] as const,
    benefices: [
      'Caroténoïdes (vit A naturelle)',
      'Drainage doux',
      'Régulation transit',
      'Reminéralisation',
    ],
    protocole: [
      '1 à 1,5 kg de carottes bio/jour',
      'Variété ancienne idéalement',
      'Râpées ou en jus à l\'extracteur',
      'Ajouter persil frais pour minéraux',
    ],
    note: 'Monodiète douce, accessible toute l\'année. Riche en bêta-carotène, soutient peau, vision, muqueuses.',
  },
];

export default function MonodietesPage() {
  const m = getMethode('monodietes')!;
  return (
    <>
      <section className="grain-bg py-16">
        <Container size="prose">
          <div className="flex items-center gap-3 mb-6">
            <SourceBadge source={m.source} />
            <Badge variant="neutral" className="capitalize">Niveau {m.niveau}</Badge>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl text-forest-900 leading-tight text-balance">
            Monodiètes
          </h1>
          <p className="mt-4 text-lg text-forest-700/85 leading-relaxed">{m.resume}</p>
        </Container>
      </section>

      <Container size="prose" className="py-12 space-y-12">
        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-4">Pourquoi pratiquer ?</h2>
          <div className="prose prose-natural max-w-none text-forest-800/90 leading-relaxed">
            <p>
              La monodiète consiste à se nourrir d'un <strong>seul aliment</strong> pendant 1 à 7
              jours. Plus accessible que le jeûne, elle offre la plupart de ses bénéfices : repos
              digestif, détoxification, élimination des surcharges, repos enzymatique.
            </p>
            <p>
              Selon Irène Grosjean, la monodiète est <strong>la porte d'entrée idéale</strong> pour
              qui n'ose pas le jeûne hydrique. Une journée par semaine en monodiète suffit à
              transformer la vitalité sur le long terme.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-8">
            Les 5 monodiètes essentielles
          </h2>
          <div className="space-y-6">
            {MONODIETES.map((mono) => (
              <Card key={mono.nom} accent="cream">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-5xl">{mono.emoji}</span>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between flex-wrap gap-2">
                        <h3 className="font-display text-2xl text-forest-900">{mono.nom}</h3>
                        <Badge variant="earth" className="capitalize">{mono.saison}</Badge>
                      </div>
                      <p className="text-sm text-forest-600 mt-1">Durée : {mono.duree}</p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {mono.temperaments.map((t) => (
                          <TemperamentBadge key={t} slug={t} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-sm text-sage-700 mb-2 uppercase tracking-wider">
                        Bénéfices
                      </h4>
                      <ul className="space-y-1 text-sm text-forest-800/90">
                        {mono.benefices.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="text-sage-600">●</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-forest-700 mb-2 uppercase tracking-wider">
                        Protocole
                      </h4>
                      <ul className="space-y-1 text-sm text-forest-800/90">
                        {mono.protocole.map((p) => (
                          <li key={p} className="flex gap-2">
                            <span className="text-forest-600">▸</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-forest-100/60">
                    <p className="text-sm text-forest-700/85 italic">{mono.note}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <WarningBox variant="warning" title="Recommandations générales">
          <ul className="space-y-1">
            <li>• Pratiquer une <strong>journée de monodiète par semaine</strong> est un excellent entretien</li>
            <li>• Sortie progressive : 1 jour de fruits/légumes crus après une monodiète de 3 jours+</li>
            <li>• Hydratation importante en parallèle (1 à 2 L d'eau/jour)</li>
            <li>• Crises de guérison fréquentes : maux de tête, fatigue, irritabilité = c'est positif</li>
            <li>• En cas de diabète, hypoglycémie sévère, ou pathologie chronique : avis médical</li>
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
