import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SourceBadge } from '@/components/ui/SourceBadge';
import { WarningBox, MedicalDisclaimer } from '@/components/ui/WarningBox';
import { TemperamentBadge } from '@/components/ui/TemperamentBadge';
import { ButtonLink } from '@/components/ui/Button';
import { Calendar, Clock } from 'lucide-react';
import { getMethode } from '@/lib/methodes';

export const metadata: Metadata = {
  title: "Purge à l'huile de ricin : guide complet selon Irène Grosjean",
  description:
    "Tout savoir sur la purge à l'huile de ricin : protocole, dosages par tempérament, contre-indications, compresses hépatiques. Méthode traditionnelle de drainage profond.",
};

export default function PurgeRicinPage() {
  const m = getMethode('purge-ricin')!;

  return (
    <>
      <section className="grain-bg py-16">
        <Container size="prose">
          <div className="flex items-center gap-3 mb-6">
            <SourceBadge source={m.source} />
            <Badge variant="neutral" className="capitalize">Niveau {m.niveau}</Badge>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl text-forest-900 leading-tight text-balance">
            Purge à l'huile de ricin
          </h1>
          <p className="mt-4 text-lg text-forest-700/85 leading-relaxed">{m.resume}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-forest-700">
            <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> {m.duree}</span>
            <span className="inline-flex items-center gap-2 capitalize"><Calendar className="h-4 w-4" /> {m.saisons.join(', ')}</span>
          </div>
        </Container>
      </section>

      <Container size="prose" className="py-12 space-y-12">
        <WarningBox variant="danger" title="Avertissement préalable">
          <p>
            La purge à l'huile de ricin est une méthode <strong>active et puissante</strong>. Elle
            n'est PAS un simple complément digestif. Lisez l'intégralité de cette page avant toute
            pratique. En cas de pathologie chronique, demandez l'avis d'un médecin ou d'un
            naturopathe certifié.
          </p>
        </WarningBox>

        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-4">Histoire et tradition</h2>
          <div className="prose prose-natural max-w-none text-forest-800/90 leading-relaxed">
            <p>
              L'huile de ricin <em>(Ricinus communis)</em> est utilisée depuis l'Égypte antique comme
              purgatif puissant. Edgar Cayce, le célèbre médium-guérisseur américain, l'a
              popularisée au XXe siècle pour les <strong>compresses hépatiques</strong>.
            </p>
            <p>
              <strong>Irène Grosjean</strong> a remis cette pratique au goût du jour dans la
              naturopathie francophone, en l'inscrivant dans une cure complète : préparation,
              purge, jeûne court ou monodiète post-purge, et réalimentation progressive.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-4">Mécanisme d'action</h2>
          <div className="prose prose-natural max-w-none text-forest-800/90 leading-relaxed">
            <p>
              Au contact des lipases intestinales, l'huile de ricin libère de l'<strong>acide
              ricinoléique</strong> qui :
            </p>
            <ul>
              <li>Stimule fortement le péristaltisme intestinal (effet laxatif intense)</li>
              <li>Provoque une vidange complète du tube digestif</li>
              <li>Draine bile et toxines vers le bas (drainage hépato-biliaire)</li>
              <li>Permet un repos digestif et un reset du microbiote</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-6">Protocole détaillé</h2>

          <Card accent="forest" className="mb-4">
            <CardContent>
              <CardTitle className="text-lg mb-3">J-1 : préparation</CardTitle>
              <ul className="space-y-2 text-sm text-forest-800/90">
                <li>• Repas léger la veille au soir (légumes vapeur + 1 fruit)</li>
                <li>• Pas de protéines animales ni alcool</li>
                <li>• Couchez-vous tôt, bonne hydratation</li>
              </ul>
            </CardContent>
          </Card>

          <Card accent="forest" className="mb-4">
            <CardContent>
              <CardTitle className="text-lg mb-3">Jour J : la purge</CardTitle>
              <ul className="space-y-2 text-sm text-forest-800/90">
                <li>• <strong>7h</strong> : à jeun, prendre la dose d'huile de ricin (voir tableau ci-dessous)</li>
                <li>• Mélanger dans un peu de jus de pamplemousse pressé pour masquer le goût gras</li>
                <li>• Possibilité de presser sa langue avec citron immédiatement après pour passer le goût</li>
                <li>• Rester au repos chez soi toute la journée (pas de sorties prolongées)</li>
                <li>• Hydratation : eau pure, tisanes, jus de fruits dilués</li>
                <li>• L'effet purgatif se déclenche entre 1h et 4h après la prise</li>
                <li>• Plusieurs selles successives, jusqu'à éliminer "de l'eau claire"</li>
                <li>• <strong>Soir :</strong> repas TRÈS léger (bouillon de légumes, jus tiède)</li>
              </ul>
            </CardContent>
          </Card>

          <Card accent="earth">
            <CardContent>
              <CardTitle className="text-lg mb-3">J+1 à J+3 : réalimentation</CardTitle>
              <ul className="space-y-2 text-sm text-forest-800/90">
                <li>• J+1 : fruits frais, légumes vapeur, soupes</li>
                <li>• J+2 : céréales complètes, oléagineux trempés</li>
                <li>• J+3 : retour à l'alimentation normale, idéalement vivante</li>
                <li>• Réintroduction probiotiques (kéfir, choucroute crue) sur 1 semaine</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-6">Dose selon le tempérament</h2>
          <div className="space-y-3">
            <Card accent="cream">
              <CardContent className="p-5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <TemperamentBadge slug="sanguin" />
                  <span className="text-sm font-bold text-forest-800">2 c. à soupe</span>
                </div>
                <p className="text-sm text-forest-700/80 mt-2">Bonne tolérance. Cure trimestrielle.</p>
              </CardContent>
            </Card>
            <Card accent="cream">
              <CardContent className="p-5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <TemperamentBadge slug="bilieux" />
                  <span className="text-sm font-bold text-forest-800">2 c. à soupe (3 matins consécutifs au printemps)</span>
                </div>
                <p className="text-sm text-forest-700/80 mt-2">
                  Cure hépatique de référence. Foie surchargé = drainage profond.
                </p>
              </CardContent>
            </Card>
            <Card accent="cream">
              <CardContent className="p-5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <TemperamentBadge slug="lymphatique" />
                  <span className="text-sm font-bold text-forest-800">3 c. à soupe</span>
                </div>
                <p className="text-sm text-forest-700/80 mt-2">
                  Tempérament qui supporte les doses les plus fortes. Cure mensuelle possible.
                </p>
              </CardContent>
            </Card>
            <Card accent="cream">
              <CardContent className="p-5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <TemperamentBadge slug="nerveux" />
                  <span className="text-sm font-bold text-amber-700">1 c. à soupe SEULEMENT</span>
                </div>
                <p className="text-sm text-forest-700/80 mt-2">
                  ⚠️ Tempérament fragile. Préférer compresses externes (drainage doux sans purge).
                  Cure tous les 4 à 6 mois maximum.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-4">
            Variante douce : compresses d'huile de ricin
          </h2>
          <div className="prose prose-natural max-w-none text-forest-800/90 leading-relaxed">
            <p>
              Pour ceux qui ne supportent pas la prise interne, ou pour un drainage très doux du
              foie sans purge, l'usage <strong>externe</strong> est remarquablement efficace :
            </p>
            <ul>
              <li>Imbiber une <strong>flanelle de coton</strong> bio d'huile de ricin pressée à froid</li>
              <li>L'appliquer sur la zone du foie (en bas, côté droit du thorax)</li>
              <li>Recouvrir d'un film plastique puis d'une serviette</li>
              <li>Poser une <strong>bouillotte chaude</strong> par-dessus</li>
              <li>Garder <strong>1 heure</strong>, en position allongée et détendue</li>
              <li>À pratiquer <strong>4 jours consécutifs</strong>, puis pause</li>
              <li>Cure : 1 fois par trimestre, idéalement au printemps</li>
            </ul>
          </div>
        </section>

        <WarningBox variant="danger" title="Contre-indications ABSOLUES">
          <ul className="space-y-1">
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
