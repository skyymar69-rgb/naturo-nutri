import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ButtonLink } from '@/components/ui/Button';
import { Droplet, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Toxémie : comprendre la cause avant le symptôme',
  description:
    "Le concept de toxémie selon la naturopathie : accumulation de déchets métaboliques, dysfonctionnement des émonctoires, et stratégies de drainage.",
};

export default function ToxemiePage() {
  return (
    <>
      <section className="grain-bg py-16">
        <Container size="prose">
          <Badge variant="forest" className="mb-6">Concept fondamental</Badge>
          <h1 className="font-display text-5xl sm:text-6xl text-forest-900 leading-tight text-balance">
            La toxémie
          </h1>
          <p className="mt-4 text-lg text-forest-700/85 leading-relaxed">
            Pour la naturopathie vitaliste, la maladie chronique ne tombe pas du ciel. Elle est le
            résultat d'une accumulation lente de déchets dans le terrain, que l'organisme finit
            par expulser sous forme de crise. Comprendre la toxémie, c'est comprendre la cause.
          </p>
        </Container>
      </section>

      <Container size="prose" className="py-12 space-y-10">
        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-4">Définition</h2>
          <div className="prose prose-natural max-w-none text-forest-800/90 leading-relaxed">
            <p>
              La <strong>toxémie</strong> est l'accumulation de toxines et de déchets métaboliques
              dans les liquides du corps (sang, lymphe, milieu interstitiel) au-delà des capacités
              d'élimination de l'organisme.
            </p>
            <p>
              Ces toxines proviennent de deux sources :
            </p>
            <ul>
              <li>
                <strong>Endogènes :</strong> déchets cellulaires normaux (urée, acide urique,
                créatinine), produits de la digestion, hormones usées, débris cellulaires.
              </li>
              <li>
                <strong>Exogènes :</strong> additifs alimentaires, pesticides, métaux lourds, médicaments,
                pollution atmosphérique, perturbateurs endocriniens, micro-plastiques.
              </li>
            </ul>
            <p>
              Tant que les <strong>émonctoires</strong> (organes d'élimination) traitent ces déchets,
              tout va bien. Mais lorsqu'ils sont dépassés, surchargés ou paresseux, les toxines
              s'accumulent dans les tissus.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-6">Les 5 émonctoires</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { titre: 'Foie', desc: "Émonctoire MAJEUR. Détoxifie 99% des substances étrangères. Sécrète la bile pour évacuer les toxines liposolubles vers les intestins." },
              { titre: 'Reins', desc: "Filtrent le sang, éliminent les déchets hydrosolubles via l'urine. Cible : urines claires et abondantes (1,5 L/jour)." },
              { titre: 'Intestins', desc: "Évacuent les déchets digestifs. Idéalement 1 à 2 selles/jour, formées, complètes, sans effort. Lieu de 70% de l'immunité." },
              { titre: 'Peau', desc: "Émonctoire de SECOURS quand foie/reins surchargés. Sueur = élimination de toxines. Eczéma, acné = signaux de toxémie." },
              { titre: 'Poumons', desc: "Élimination CO2 mais aussi de substances volatiles. Mucosités, glaires = signe que les autres émonctoires saturent." },
            ].map((e) => (
              <Card key={e.titre} accent="cream">
                <CardContent className="p-5">
                  <Droplet className="h-5 w-5 text-forest-600 mb-2" />
                  <h3 className="font-display text-lg text-forest-900">{e.titre}</h3>
                  <p className="text-sm text-forest-800/85 mt-2">{e.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-4">
            Signes d'une toxémie chronique
          </h2>
          <Card accent="earth">
            <CardContent>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-forest-800/90">
                {[
                  "Fatigue chronique inexpliquée",
                  "Troubles digestifs récurrents",
                  "Maux de tête fréquents",
                  "Problèmes cutanés (eczéma, acné, psoriasis)",
                  "Allergies, intolérances multiples",
                  "Infections ORL à répétition",
                  "Sommeil non réparateur",
                  "Brouillard mental",
                  "Mauvaise haleine, langue chargée",
                  "Cernes, teint terne",
                  "Tendinites, douleurs articulaires",
                  "Prise de poids inexpliquée",
                ].map((s) => (
                  <li key={s} className="flex gap-2">
                    <AlertCircle className="h-4 w-4 mt-0.5 text-earth-500 flex-shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-4">
            Le concept de crise de guérison
          </h2>
          <div className="prose prose-natural max-w-none text-forest-800/90 leading-relaxed">
            <p>
              Selon Grosjean, quand on adopte une hygiène vitale (alimentation vivante, jeûnes,
              repos), le corps profite de cet apport en énergie nouvelle pour <strong>relarguer</strong>{' '}
              les toxines accumulées. Cette mise en mouvement provoque souvent des symptômes
              désagréables que l'on appelle <strong>crises de guérison</strong> :
            </p>
            <ul>
              <li>Maux de tête, vertiges</li>
              <li>Mauvaise haleine, langue très chargée</li>
              <li>Urines très foncées, odorantes</li>
              <li>Selles abondantes et malodorantes</li>
              <li>Éruptions cutanées passagères</li>
              <li>Fièvre légère, fatigue intense</li>
              <li>Émotions exacerbées (colères, larmes)</li>
            </ul>
            <p>
              Ces symptômes ne sont pas des effets secondaires : ce sont des signaux POSITIFS
              d'élimination active. Il faut les <strong>accompagner</strong> (hydratation, repos,
              chaleur) plutôt que les <strong>combattre</strong>. C'est l'inverse du paradigme
              allopathique qui veut faire taire le symptôme.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-4">Stratégies de drainage</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card accent="sage">
              <CardContent>
                <CardTitle className="text-lg mb-3">Hygiène quotidienne</CardTitle>
                <ul className="space-y-1.5 text-sm text-forest-800/90">
                  <li>• Eau citronnée tiède au réveil</li>
                  <li>• Hydratation 1,5 L/jour entre les repas</li>
                  <li>• Crudités à chaque repas</li>
                  <li>• Activité physique quotidienne</li>
                  <li>• Coucher avant 23h</li>
                  <li>• Brossage à sec quotidien</li>
                </ul>
              </CardContent>
            </Card>
            <Card accent="sage">
              <CardContent>
                <CardTitle className="text-lg mb-3">Cures saisonnières</CardTitle>
                <ul className="space-y-1.5 text-sm text-forest-800/90">
                  <li>• Printemps : cure hépatique (radis noir, citron, artichaut)</li>
                  <li>• Été : jeûnes longs ou aux jus</li>
                  <li>• Automne : monodiète de raisin</li>
                  <li>• Hiver : reminéralisation, tisanes chaudes</li>
                  <li>• Trimestriel : purge à l'huile de ricin</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="text-center pt-8">
          <ButtonLink href="/methodes" variant="primary">
            Explorer les méthodes de drainage
          </ButtonLink>
        </div>
      </Container>
    </>
  );
}
