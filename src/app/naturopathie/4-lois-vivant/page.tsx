import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ButtonLink } from '@/components/ui/Button';
import { Wind, Apple, Moon, Droplet } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Les 4 lois du vivant selon Irène Grosjean',
  description:
    "Respirer, se nourrir, dormir, éliminer : les 4 lois universelles de la santé selon l'école de naturopathie d'Irène Grosjean.",
};

const LOIS = [
  {
    num: 1,
    icon: Wind,
    titre: 'Respirer',
    sous_titre: "Le premier nutriment",
    contenu: [
      "L'oxygène est le seul nutriment dont le corps ne peut se passer plus de quelques minutes. C'est le carburant cellulaire universel.",
      'La respiration profonde abdominale active le système parasympathique (apaisement, digestion, régénération).',
      "Une respiration superficielle = stress chronique = ralentissement de tous les processus de réparation.",
    ],
    pratiques: [
      'Respiration abdominale consciente : 5 min, 2 fois/jour',
      "Marche en plein air, idéalement nature, 30 min/jour minimum",
      "Aération quotidienne du domicile (matin et soir)",
      "Cohérence cardiaque : 5 min, 3 fois/jour (méthode 365)",
      'Plantes vertes dans le foyer (oxygénation, dépollution intérieure)',
    ],
  },
  {
    num: 2,
    icon: Apple,
    titre: 'Se nourrir',
    sous_titre: "D'aliments vivants",
    contenu: [
      "L'alimentation construit littéralement le corps : 'tu es ce que tu manges'. Chaque cellule est renouvelée tous les 7 ans en moyenne.",
      "Privilégier l'alimentation VIVANTE (crue, peu chauffée < 42°C, biologique, locale, de saison).",
      "Selon Grosjean : transition progressive vers 75% de cru pour un terrain solide, sans dogmatisme.",
      "Manger en pleine conscience : mastiquer 30 à 50 fois chaque bouchée libère les sucs digestifs et l'effet rassasiant.",
    ],
    pratiques: [
      'Crudités à chaque repas (au moins en entrée)',
      'Graines germées 2 à 3 fois par semaine',
      'Lacto-fermentations quotidiennes (choucroute crue, kéfir, miso)',
      'Eau pure entre les repas (PAS pendant — dilue les sucs)',
      "Mastication consciente, repas dans le calme",
      'Repas du soir LÉGER au moins 3h avant le coucher',
    ],
  },
  {
    num: 3,
    icon: Moon,
    titre: 'Dormir',
    sous_titre: "L'élimination nocturne",
    contenu: [
      "Le sommeil est le moment d'autophagie cellulaire profonde : le corps répare l'ADN, élimine les déchets, consolide la mémoire.",
      "L'horloge circadienne dicte un rythme : 22h-2h = phase de sommeil PROFOND, irremplaçable. Se coucher après minuit dérègle tout.",
      "Le foie travaille entre 1h et 3h du matin : si on dort mal à cette heure, c'est souvent lui qui se manifeste.",
      "La mélatonine, hormone du sommeil, ne se sécrète qu'en obscurité totale.",
    ],
    pratiques: [
      'Couchage avant 23h, idéalement 22h',
      'Pas d\'écrans 1h avant le coucher (lumière bleue = blocage mélatonine)',
      'Chambre fraîche (17-18°C) et OBSCURITÉ TOTALE',
      'Pas de bruit (boules quies si besoin)',
      'Pas de Wi-Fi dans la chambre, pas de téléphone à côté',
      'Tisanes du soir : verveine, mélisse, passiflore, camomille',
    ],
  },
  {
    num: 4,
    icon: Droplet,
    titre: 'Éliminer',
    sous_titre: "Les 5 émonctoires",
    contenu: [
      "Sans élimination, accumulation. Sans accumulation, pas de toxémie. Pas de toxémie, pas de maladie chronique.",
      "Les 5 émonctoires (portes de sortie) : foie, reins, intestins, peau, poumons. Chacun doit fonctionner librement.",
      "Le foie est le grand chef : il traite l'essentiel des déchets puis répartit vers les autres émonctoires.",
      "Un émonctoire bouché compense un autre : si les selles sont rares, la peau et les reins surchargent.",
    ],
    pratiques: [
      'Selles : idéalement 1 à 2 fois/jour, sans effort, complètes',
      'Urines : couleur jaune clair, pas trop foncées, 5 à 6 mictions/jour',
      "Sueur : suer ABONDAMMENT au moins 1 fois/semaine (sauna, sport, hammam)",
      'Peau : brossage à sec quotidien avant la douche',
      "Poumons : respiration profonde + activité physique aérobie",
      'Cures saisonnières : drainage hépatique au printemps, monodiète automne',
    ],
  },
];

export default function QuatreLoisPage() {
  return (
    <>
      <section className="grain-bg py-16">
        <Container size="prose">
          <Badge variant="forest" className="mb-6">École Grosjean</Badge>
          <h1 className="font-display text-5xl sm:text-6xl text-forest-900 leading-tight text-balance">
            Les 4 lois du vivant
          </h1>
          <p className="mt-4 text-lg text-forest-700/85 leading-relaxed">
            Pour Irène Grosjean, la santé n'est pas une affaire compliquée. Elle repose sur quatre
            lois universelles, qu'il suffit de respecter dans cet ordre : respirer, se nourrir,
            dormir, éliminer. Tout le reste en découle.
          </p>
        </Container>
      </section>

      <Container size="prose" className="py-12 space-y-12">
        {LOIS.map((loi) => {
          const Icon = loi.icon;
          return (
            <article key={loi.num} className="relative">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-display text-7xl text-earth-300 leading-none">{loi.num}</span>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-forest-700 text-cream-50">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl text-forest-900 leading-tight">
                    {loi.titre}
                  </h2>
                  <p className="text-sm text-forest-600 italic mt-1">{loi.sous_titre}</p>
                </div>
              </div>

              <div className="prose prose-natural max-w-none mb-6 text-forest-800/90 leading-relaxed">
                {loi.contenu.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <Card accent="sage">
                <CardContent>
                  <CardTitle className="text-base text-sage-700 mb-3">
                    En pratique au quotidien
                  </CardTitle>
                  <ul className="space-y-2 text-sm text-forest-800/90">
                    {loi.pratiques.map((p) => (
                      <li key={p} className="flex gap-2.5">
                        <span className="text-sage-600 font-bold mt-0.5">▸</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </article>
          );
        })}

        <div className="text-center pt-8">
          <p className="text-forest-700/80 mb-4">
            Et maintenant, allons explorer comment ces lois s'appliquent à votre tempérament.
          </p>
          <ButtonLink href="/quiz-temperament" variant="primary" size="lg">
            Découvrir mon tempérament
          </ButtonLink>
        </div>
      </Container>
    </>
  );
}
