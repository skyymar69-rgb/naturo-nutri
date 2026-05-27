import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SourceBadge } from '@/components/ui/SourceBadge';
import { WarningBox, MedicalDisclaimer } from '@/components/ui/WarningBox';
import { TemperamentBadge } from '@/components/ui/TemperamentBadge';
import { ButtonLink } from '@/components/ui/Button';
import { Droplets, Calendar, Clock, ArrowRight } from 'lucide-react';
import { getMethode } from '@/lib/methodes';

export const metadata: Metadata = {
  title: 'Jeûne hydrique : protocole complet selon Irène Grosjean',
  description:
    'Tout sur le jeûne hydrique : préparation, jour par jour, sortie, contre-indications. Méthode naturopathique de référence pour la régénération profonde.',
};

export default function JeuneHydriquePage() {
  const m = getMethode('jeune-hydrique')!;

  return (
    <>
      <section className="grain-bg py-16">
        <Container size="prose">
          <div className="flex items-center gap-3 mb-6">
            <SourceBadge source={m.source} />
            <Badge variant="neutral" className="capitalize">
              Niveau {m.niveau}
            </Badge>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl text-forest-900 leading-tight text-balance">
            Jeûne hydrique
          </h1>
          <p className="mt-4 text-lg text-forest-700/85 leading-relaxed">{m.resume}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-forest-700">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" /> {m.duree}
            </span>
            <span className="inline-flex items-center gap-2 capitalize">
              <Calendar className="h-4 w-4" /> {m.saisons.join(', ')}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-xs text-forest-700/70 mr-1">Adapté aux :</span>
            {m.temperaments_recommandes.map((t) => (
              <TemperamentBadge key={t} slug={t} />
            ))}
          </div>
        </Container>
      </section>

      <Container size="prose" className="py-12 space-y-12">
        <MedicalDisclaimer />

        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-4">
            Comprendre le jeûne hydrique
          </h2>
          <div className="prose prose-natural max-w-none text-forest-800/90 leading-relaxed">
            <p>
              Le jeûne hydrique consiste à s'abstenir de toute nourriture solide et liquide
              calorique pendant une période définie. Seule l'<strong>eau pure</strong> (1,5 à 2 L
              par jour) est autorisée. Certaines écoles tolèrent les tisanes douces sans sucre.
            </p>
            <p>
              Pratique millénaire (Hippocrate, Bouddha, Jésus, Mahomet jeûnaient), le jeûne est
              aujourd'hui validé scientifiquement : l'<strong>autophagie cellulaire</strong>{' '}
              déclenchée à partir de 16-24h de jeûne a valu le prix Nobel de médecine 2016 à Yoshinori
              Ohsumi. C'est un mécanisme de recyclage des composants cellulaires endommagés.
            </p>
            <p>
              Selon Irène Grosjean, le jeûne est aussi une <em>cure spirituelle</em> autant que
              physiologique : il met l'organisme au repos, libère les surcharges, restaure la
              lucidité mentale et réveille la vitalité endormie.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-6">Bénéfices observés</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {m.benefices.map((b) => (
              <div key={b} className="flex gap-3">
                <Droplets className="h-5 w-5 mt-0.5 text-sage-600 flex-shrink-0" />
                <p className="text-sm text-forest-800/90">{b}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-6">Protocole détaillé</h2>

          <Card accent="forest" className="mb-4">
            <CardContent>
              <CardTitle className="text-lg mb-3 text-forest-900">
                J-3 à J-1 : préparation alimentaire
              </CardTitle>
              <ul className="space-y-2 text-sm text-forest-800/90">
                <li>• <strong>J-3 :</strong> arrêt café, alcool, viandes, produits laitiers, sucres raffinés</li>
                <li>• <strong>J-2 :</strong> céréales complètes, légumineuses, légumes vapeur et crus</li>
                <li>• <strong>J-1 :</strong> uniquement fruits, légumes crus, jus de légumes</li>
                <li>• Soir J-1 : monodiète de pomme ou bouillon de légumes</li>
              </ul>
            </CardContent>
          </Card>

          <Card accent="forest" className="mb-4">
            <CardContent>
              <CardTitle className="text-lg mb-3 text-forest-900">
                J1 à Jn : pendant le jeûne
              </CardTitle>
              <ul className="space-y-2 text-sm text-forest-800/90">
                <li>• <strong>1,5 à 2 L d'eau</strong> par jour, à température ambiante</li>
                <li>• Tisanes douces autorisées : mélisse, verveine, fenouil, romarin léger</li>
                <li>• Repos physique : éviter sport intense, privilégier marche douce, sieste</li>
                <li>• Garder le corps au chaud (frilosité fréquente)</li>
                <li>• Tenir un journal de jeûne : ressentis, émotions, crises</li>
                <li>• Ne pas conduire si sensations vertigineuses</li>
              </ul>
            </CardContent>
          </Card>

          <Card accent="earth" className="mb-4">
            <CardContent>
              <CardTitle className="text-lg mb-3 text-earth-700">
                Crises de guérison : ne pas s'inquiéter
              </CardTitle>
              <p className="text-sm text-forest-800/90 leading-relaxed mb-3">
                Selon Irène Grosjean, les <strong>crises de guérison</strong> sont des signaux
                POSITIFS d'élimination active : maux de tête, langue chargée, mauvaise haleine,
                nausées légères, urines très foncées, irritabilité émotionnelle. L'organisme est en
                train de relarger les toxines.
              </p>
              <p className="text-sm text-forest-800/90">
                Si la crise devient ingérable (vertiges sévères, vomissements répétés, douleurs
                inhabituelles), STOPPER le jeûne immédiatement et consulter.
              </p>
            </CardContent>
          </Card>

          <Card accent="sage">
            <CardContent>
              <CardTitle className="text-lg mb-3 text-sage-700">
                Sortie de jeûne (CRUCIAL — autant que le jeûne lui-même)
              </CardTitle>
              <p className="text-sm text-forest-800/90 leading-relaxed mb-3">
                La sortie doit être <strong>aussi longue que le jeûne</strong>. Réintroduire trop
                vite est dangereux (syndrome de renutrition, troubles digestifs sévères).
              </p>
              <ul className="space-y-2 text-sm text-forest-800/90">
                <li>• <strong>J+1 :</strong> bouillon de légumes, jus de pomme dilué</li>
                <li>• <strong>J+2 :</strong> fruits frais, légumes crus en petites quantités</li>
                <li>• <strong>J+3 :</strong> légumes vapeur, oléagineux trempés</li>
                <li>• <strong>J+5 :</strong> céréales complètes, légumineuses</li>
                <li>• <strong>J+7 :</strong> retour à l'alimentation normale</li>
                <li>• Mastication +++ à chaque repas</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-4">
            Durées recommandées par tempérament
          </h2>
          <div className="space-y-3">
            <Card accent="cream">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <TemperamentBadge slug="sanguin" />
                  <span className="text-sm font-medium text-forest-700">3 à 7 jours</span>
                </div>
                <p className="text-sm text-forest-800/85">
                  Excellente tolérance. Le sanguin se décongestionne rapidement et retire un grand
                  bénéfice vasculaire.
                </p>
              </CardContent>
            </Card>
            <Card accent="cream">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <TemperamentBadge slug="bilieux" />
                  <span className="text-sm font-medium text-forest-700">3 à 7 jours</span>
                </div>
                <p className="text-sm text-forest-800/85">
                  Très bonne réponse. Préférer le printemps. Le foie se draine massivement.
                </p>
              </CardContent>
            </Card>
            <Card accent="cream">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <TemperamentBadge slug="lymphatique" />
                  <span className="text-sm font-medium text-forest-700">5 à 14 jours</span>
                </div>
                <p className="text-sm text-forest-800/85">
                  Le tempérament qui répond le mieux aux jeûnes longs. Drainage spectaculaire,
                  perte de surcharges, renouveau d'énergie.
                </p>
              </CardContent>
            </Card>
            <Card accent="cream">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <TemperamentBadge slug="nerveux" />
                  <span className="text-sm font-medium text-forest-700">1 à 2 jours MAX</span>
                </div>
                <p className="text-sm text-forest-800/85 mb-2">
                  ⚠️ Tempérament fragile : préférer le jeûne intermittent ou la monodiète. Un jeûne
                  long peut épuiser ses réserves.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <WarningBox variant="danger" title="Contre-indications absolues">
          <ul className="space-y-1">
            {m.contre_indications.map((c) => (
              <li key={c}>• {c}</li>
            ))}
          </ul>
          <p className="mt-3 font-semibold">
            Au-delà de 3 jours : encadrement médical ou naturopathique recommandé.
          </p>
        </WarningBox>

        <div className="text-center">
          <ButtonLink href="/methodes" variant="secondary">
            ← Toutes les méthodes
          </ButtonLink>
        </div>

        <div className="border-t border-forest-100 pt-8 text-center">
          <p className="text-sm text-forest-700/80 mb-3">
            Pour aller plus loin : adapter le jeûne à votre tempérament
          </p>
          <ButtonLink href="/quiz-temperament" variant="primary">
            Découvrir mon tempérament <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Container>
    </>
  );
}
