import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { WarningBox } from '@/components/ui/WarningBox';

export const metadata: Metadata = {
  title: 'Contre-indications générales',
  description:
    'Synthèse des contre-indications pour les jeûnes, purges, changements alimentaires et supplémentations.',
};

export default function ContreIndicationsPage() {
  return (
    <Container size="prose" className="py-16">
      <h1 className="font-display text-4xl text-forest-900 mb-4">Contre-indications</h1>
      <p className="text-lg text-forest-700/85 leading-relaxed mb-8">
        Synthèse des situations qui contre-indiquent les méthodes décrites sur ce site. En cas de
        doute, demandez systématiquement l'avis de votre médecin traitant ou d'un naturopathe
        certifié.
      </p>

      <WarningBox variant="danger" title="Contre-indications ABSOLUES pour tout jeûne et purge">
        <ul className="space-y-1">
          <li>• <strong>Grossesse et allaitement</strong></li>
          <li>• <strong>Enfants et adolescents en croissance</strong></li>
          <li>• <strong>Diabète insulinodépendant</strong></li>
          <li>• Troubles du comportement alimentaire (anorexie, boulimie, hyperphagie)</li>
          <li>• Dénutrition, IMC inférieur à 18</li>
          <li>• Insuffisance rénale ou hépatique sévère</li>
          <li>• Pathologies cardiaques sévères non stabilisées</li>
          <li>• Cancer en traitement actif (chimiothérapie, radiothérapie)</li>
          <li>• Tuberculose évolutive</li>
          <li>• Maladies psychiatriques sévères (dépression majeure, schizophrénie)</li>
        </ul>
      </WarningBox>

      <div className="space-y-8 mt-12">
        <Card accent="earth">
          <CardContent>
            <CardTitle className="text-xl mb-4">Jeûne hydrique de plus de 3 jours</CardTitle>
            <p className="text-sm text-forest-800/90 mb-3">
              Au-delà de 72 heures, le jeûne hydrique entre en phase d'adaptation cétogène
              profonde. Un encadrement médical ou par un naturopathe expérimenté est{' '}
              <strong>fortement recommandé</strong>.
            </p>
            <p className="text-sm text-forest-800/90">
              Le tempérament <strong>nerveux pur</strong> ne devrait JAMAIS pratiquer un jeûne
              hydrique de plus de 48 heures sans encadrement, en raison du risque de déminéralisation
              accélérée et d'épuisement nerveux.
            </p>
          </CardContent>
        </Card>

        <Card accent="earth">
          <CardContent>
            <CardTitle className="text-xl mb-4">Purge à l'huile de ricin</CardTitle>
            <ul className="space-y-1 text-sm text-forest-800/90">
              <li>• <strong>Grossesse (déclencheur de contractions utérines)</strong></li>
              <li>• Obstruction intestinale, occlusion</li>
              <li>• Maladies inflammatoires chroniques en poussée (Crohn, RCH)</li>
              <li>• Diverticulite aiguë</li>
              <li>• Appendicite, douleurs abdominales aiguës non diagnostiquées</li>
              <li>• Déshydratation préexistante</li>
              <li>• Enfants</li>
              <li>• Personnes âgées fragiles</li>
            </ul>
          </CardContent>
        </Card>

        <Card accent="earth">
          <CardContent>
            <CardTitle className="text-xl mb-4">Crudivorisme strict (100% cru)</CardTitle>
            <ul className="space-y-1 text-sm text-forest-800/90">
              <li>• Tempérament nerveux pur</li>
              <li>• Hypothyroïdie non contrôlée (crucifères crus en excès)</li>
              <li>• Maladies digestives inflammatoires (Crohn, RCH, gastrite)</li>
              <li>• Femmes enceintes ou allaitantes</li>
              <li>• Enfants en croissance</li>
              <li>• Personnes très frileuses ou dénutries</li>
              <li>
                • Sans supplémentation en vitamine B12 (méthylcobalamine) : risque de carence sévère
                à long terme
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card accent="earth">
          <CardContent>
            <CardTitle className="text-xl mb-4">Supplémentations à risque d'interaction</CardTitle>
            <ul className="space-y-2 text-sm text-forest-800/90">
              <li>
                <strong>Vitamine K2</strong> : contre-indiquée sous anticoagulants AVK (warfarine,
                Préviscan).
              </li>
              <li>
                <strong>Vitamine E à haute dose</strong> : risque hémorragique avec anticoagulants
                ou avant chirurgie (arrêt 7 jours avant).
              </li>
              <li>
                <strong>Oméga-3 à haute dose</strong> : risque hémorragique idem ; arrêt avant
                chirurgie.
              </li>
              <li>
                <strong>Iode</strong> : NE PAS supplémenter sans bilan thyroïdien préalable (TSH,
                T3, T4, anticorps).
              </li>
              <li>
                <strong>Fer</strong> : NE PAS supplémenter sans bilan ferritine. Contre-indiqué en
                cas d'hémochromatose.
              </li>
              <li>
                <strong>Curcumine</strong> : contre-indiquée en cas de calculs biliaires.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card accent="earth">
          <CardContent>
            <CardTitle className="text-xl mb-4">Médicaments et interactions</CardTitle>
            <p className="text-sm text-forest-800/90 mb-3">
              Si vous prenez des médicaments, signalez-le obligatoirement avant toute cure de jeûne,
              purge ou supplémentation. Certaines interactions importantes :
            </p>
            <ul className="space-y-1 text-sm text-forest-800/90">
              <li>• <strong>Antidiabétiques</strong> : risque hypoglycémie pendant les jeûnes</li>
              <li>• <strong>Anticoagulants</strong> : incompatibles avec vit K2, oméga-3, curcuma à haute dose</li>
              <li>• <strong>Antihypertenseurs</strong> : ajustement nécessaire pendant les cures</li>
              <li>• <strong>Antidépresseurs (IRS)</strong> : prudence avec millepertuis, tryptophane</li>
              <li>• <strong>IPP, metformine</strong> : « pillage » de B12, supplémentation indispensable</li>
              <li>• <strong>Statines</strong> : « pillage » du Coenzyme Q10, supplémentation systématique</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <WarningBox variant="warning" title="En cas de doute" className="mt-12">
        <p>
          Toute pratique présentée sur ce site, même si elle paraît bénigne, peut être inadaptée
          à votre situation particulière. <strong>Consultez systématiquement</strong> :
        </p>
        <ul className="space-y-1 mt-2">
          <li>• Votre médecin traitant</li>
          <li>• Un naturopathe certifié (formation FENA, OMNES, ou diplôme reconnu)</li>
          <li>• Un nutrithérapeute certifié pour la supplémentation</li>
        </ul>
      </WarningBox>
    </Container>
  );
}
