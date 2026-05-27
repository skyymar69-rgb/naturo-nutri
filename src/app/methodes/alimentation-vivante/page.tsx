import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SourceBadge } from '@/components/ui/SourceBadge';
import { WarningBox, MedicalDisclaimer } from '@/components/ui/WarningBox';
import { ButtonLink } from '@/components/ui/Button';
import { Sprout } from 'lucide-react';
import { getMethode } from '@/lib/methodes';

export const metadata: Metadata = {
  title: "Alimentation vivante : les 4 lois du vivant d'Irène Grosjean",
  description:
    "Tout sur l'alimentation vivante : crudités, graines germées, lacto-fermentations, jus, déshydratations. Transition progressive vers le cru selon Irène Grosjean.",
};

export default function AlimentationVivantePage() {
  const m = getMethode('alimentation-vivante')!;

  return (
    <>
      <section className="grain-bg py-16">
        <Container size="prose">
          <div className="flex items-center gap-3 mb-6">
            <SourceBadge source={m.source} />
            <Badge variant="neutral" className="capitalize">Niveau {m.niveau}</Badge>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl text-forest-900 leading-tight text-balance">
            Alimentation vivante
          </h1>
          <p className="mt-4 text-lg text-forest-700/85 leading-relaxed">{m.resume}</p>
        </Container>
      </section>

      <Container size="prose" className="py-12 space-y-12">
        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-4">
            Pourquoi l'alimentation vivante ?
          </h2>
          <div className="prose prose-natural max-w-none text-forest-800/90 leading-relaxed">
            <p>
              <strong>Un aliment est "vivant"</strong> tant qu'il n'a pas été chauffé au-delà de 42°C
              (température au-delà de laquelle ses enzymes sont détruites). Les fruits, légumes,
              graines, oléagineux crus contiennent des enzymes alimentaires qui aident leur propre
              digestion et déchargent le pancréas humain.
            </p>
            <p>
              Selon Irène Grosjean, le cru apporte la <strong>force vitale</strong> que le cuit a
              perdue. Une graine germée multiplie par 5 à 20 ses vitamines, libère ses anti-nutriments
              (phytates, lectines), et devient un super-aliment alcalinisant.
            </p>
          </div>
        </section>

        <section className="bg-forest-50/50 rounded-3xl p-8">
          <h2 className="font-display text-3xl text-forest-900 mb-6">
            Les 4 lois du vivant
          </h2>
          <p className="text-forest-700/85 mb-6">
            Pour Irène Grosjean, la santé repose sur 4 lois universelles, dans cet ordre de
            priorité :
          </p>
          <div className="space-y-4">
            {[
              {
                num: 1,
                title: 'Respirer',
                desc: "L'oxygène est le premier nutriment. Respiration consciente, plein air, mouvement quotidien. Pas de santé sans respiration ample.",
              },
              {
                num: 2,
                title: 'Se nourrir',
                desc: "D'aliments VIVANTS, de saison, locaux, biologiques. Mastication consciente. Manger pour nourrir les cellules, pas pour se distraire.",
              },
              {
                num: 3,
                title: 'Dormir',
                desc: "Le sommeil est le moment d'élimination cellulaire profonde (autophagie nocturne). Se coucher tôt, dans le noir total, en chambre fraîche.",
              },
              {
                num: 4,
                title: 'Éliminer',
                desc: "Selles, urines, sueur, expectorations : les 5 émonctoires doivent fonctionner librement. Sans élimination, accumulation, toxémie, maladie.",
              },
            ].map((law) => (
              <div key={law.num} className="flex gap-4">
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-forest-700 text-cream-50 font-display text-lg">
                  {law.num}
                </span>
                <div>
                  <h3 className="font-display text-xl text-forest-900">{law.title}</h3>
                  <p className="text-sm text-forest-700/85 mt-1 leading-relaxed">{law.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-6">
            Transition progressive vers le cru
          </h2>
          <p className="text-forest-700/85 mb-6">
            La transition se fait par paliers. Brûler les étapes provoque des crises difficiles,
            voire des carences (notamment en B12).
          </p>
          <div className="space-y-3">
            {[
              {
                phase: 'Phase 1',
                pct: '25 % cru',
                desc: '1 repas de crudités par jour (déjeuner ou dîner). Crudités en entrée de chaque repas.',
              },
              {
                phase: 'Phase 2',
                pct: '50 % cru',
                desc: 'Petit-déjeuner cru (fruits + oléagineux trempés). Crudités à 2 repas. Introduction des graines germées.',
              },
              {
                phase: 'Phase 3',
                pct: '75 % cru',
                desc: 'Cuit uniquement le soir, légumes vapeur basse température. Lacto-fermentations quotidiennes.',
              },
              {
                phase: 'Phase 4',
                pct: '100 % cru',
                desc: 'Crudivorisme. À ne pratiquer qu\'avec encadrement, et JAMAIS pour le tempérament nerveux pur.',
              },
            ].map((phase) => (
              <Card key={phase.phase} accent="sage">
                <CardContent className="p-5">
                  <div className="flex items-baseline justify-between mb-2 flex-wrap gap-2">
                    <h3 className="font-display text-xl text-forest-900">{phase.phase}</h3>
                    <Badge variant="sage">{phase.pct}</Badge>
                  </div>
                  <p className="text-sm text-forest-800/85">{phase.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-6">
            Techniques culinaires vivantes
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Graines germées',
                desc: 'Trempage 12h, rinçage 2x/jour, germination 3-5j. Alfalfa, fenugrec, lentille, brocoli, radis.',
              },
              {
                title: 'Déshydratation (<42°C)',
                desc: 'Conservation des enzymes. Crackers de graines, fruits secs, légumes croustillants.',
              },
              {
                title: 'Lacto-fermentation',
                desc: 'Choucroute, kimchi, légumes lacto. Sel + temps + bocal hermétique = probiotiques vivants.',
              },
              {
                title: 'Jus et smoothies verts',
                desc: 'Extracteur à froid de préférence. Légumes verts feuillus + 1 fruit + gingembre + citron.',
              },
              {
                title: 'Trempage des oléagineux',
                desc: 'Amandes 8h, noix 4h. Libère enzymes et acide phytique.',
              },
              {
                title: 'Cuissons douces vapeur',
                desc: '<90°C pour préserver vitamines hydrosolubles. Marguerite à vapeur, ou cuit-vapeur basse.',
              },
            ].map((tech) => (
              <Card key={tech.title} accent="cream">
                <CardContent className="p-5">
                  <Sprout className="h-5 w-5 text-sage-600 mb-2" />
                  <CardTitle className="text-base">{tech.title}</CardTitle>
                  <p className="text-sm text-forest-700/85 mt-2">{tech.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <WarningBox variant="warning" title="Points de vigilance">
          <ul className="space-y-2">
            <li>
              <strong>B12 :</strong> indétectable dans les végétaux (spiruline = analogue inactif).
              Supplémentation OBLIGATOIRE en méthylcobalamine si crudivorisme strict.
            </li>
            <li>
              <strong>Tempérament nerveux :</strong> ne pas excéder 30-50% de cru. Préférer le tiède
              et le cuit doux.
            </li>
            <li>
              <strong>Crucifères crus en excès :</strong> peuvent perturber la thyroïde
              (goitrigènes). Modérer si Hashimoto/hypothyroïdie.
            </li>
            <li>
              <strong>Transition trop brutale :</strong> crises de guérison intenses, troubles
              digestifs. Aller pas à pas sur 6 à 12 mois.
            </li>
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
