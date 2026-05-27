import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ButtonLink } from '@/components/ui/Button';
import { ShieldCheck } from 'lucide-react';

const PRINCIPES = [
  {
    numero: 1,
    titre: "Aucun sucre, édulcorant, colorant, arôme synthétique ni trophallergène",
    description: "Un complément digne de ce nom ne contient aucun additif inutile. Pas de sucre, pas de dioxyde de titane, pas de gluten, pas de soja, pas de lactose, pas de colorant azoïque. La liste d'ingrédients doit être courte et claire.",
    exemple: "Refuser les 'gummies vitaminées' colorées et sucrées vendues comme des bonbons.",
  },
  {
    numero: 2,
    titre: "Jamais de Fer, Cuivre, Manganèse dans un complément de base",
    description: "Ces minéraux sont catalyseurs de réactions oxydatives (réaction de Fenton). En supplémentation systématique, ils peuvent générer un stress oxydatif. La supplémentation en fer doit être personnalisée sur bilan ferritine, jamais systématique.",
    exemple: "Refuser les multi-vitamines pour hommes adultes contenant 14 mg de fer.",
  },
  {
    numero: 3,
    titre: "Doses adaptées à la catégorie de population",
    description: "Les besoins ne sont pas universels. Un enfant, une femme enceinte, un senior, un sportif n'ont pas les mêmes besoins. Le bon complément cible une population. Les multi-vitamines 'tout public' sont rarement optimaux.",
    exemple: "Vitamine D : 800 UI pour l'adulte non carencé, 2000-4000 UI en cure d'hiver, 5000 UI si déficit avéré.",
  },
  {
    numero: 4,
    titre: "Caroténoïdes multiples pour les seniors",
    description: "Pour les > 60 ans, il faut un mélange : bêta-carotène + lycopène + lutéine + zéaxanthine + astaxanthine. Le bêta-carotène isolé à haute dose chez les fumeurs a même montré un risque accru.",
    exemple: "Cocktail caroténoïdes naturels pour protéger vision (DMLA) et peau.",
  },
  {
    numero: 5,
    titre: "Fluor : uniquement par voie externe (dentifrice)",
    description: "Pas de fluor dans le complément. La supplémentation orale en fluor est obsolète, contestée. Effets délétères thyroïdiens et osseux à long terme démontrés.",
    exemple: "Refuser les compléments enfant fluorés. Utiliser uniquement le dentifrice fluoré.",
  },
  {
    numero: 6,
    titre: "Vitamine A → bêta-carotène ; Vitamine E → forme naturelle uniquement",
    description: "Le rétinol synthétique (vitamine A) à haute dose est tératogène et hépatotoxique. Le bêta-carotène est précurseur sûr. Pour la vitamine E, seul le mélange naturel RRR-d-alpha + gamma + delta tocophérols est utile. La forme dl-alpha synthétique est contre-productive.",
    exemple: "Lire l'étiquette : 'd-alpha-tocophérol' naturel vs 'dl-alpha-tocophérol' synthétique.",
  },
  {
    numero: 7,
    titre: "Oméga-3 toujours associés à des antioxydants",
    description: "Les acides gras polyinsaturés sont par nature oxydables. Les supplémenter sans antioxydants peut être contre-productif. La formule idéale associe oméga-3 + vitamine E naturelle.",
    exemple: "Choisir une huile de poisson certifiée IFOS avec mention 'tocophérols mixtes ajoutés'.",
  },
  {
    numero: 8,
    titre: "Minéraux sous formes biodisponibles",
    description: "Les oxydes et carbonates sont peu absorbés (5-20%). Les formes chélatées aux acides aminés (bisglycinate) ou aux acides organiques (citrate, gluconate) atteignent 60-90% d'absorption. La différence est essentielle.",
    exemple: "Magnésium glycérophosphate plutôt que magnésium oxyde. Zinc citrate plutôt que zinc sulfate.",
  },
];

export const metadata: Metadata = {
  title: "Les 8 principes du complément alimentaire de qualité",
  description: "Comment reconnaître un complément alimentaire digne de ce nom. Les 8 critères non négociables pour faire le bon choix.",
};

export default function PrincipesPage() {
  return (
    <>
      <section className="grain-bg py-16">
        <Container size="prose">
          <Badge variant="earth" className="mb-6">
            <ShieldCheck className="h-3 w-3" /> Principes de qualité
          </Badge>
          <h1 className="font-display text-5xl sm:text-6xl text-forest-900 leading-tight text-balance">
            Les 8 principes du complément alimentaire de qualité
          </h1>
          <p className="mt-4 text-lg text-forest-700/85 leading-relaxed">
            Comment reconnaître un complément digne de ce nom ? Huit critères non négociables permettent
            d'éliminer en quelques secondes les produits douteux, et de choisir ce qui sert vraiment votre santé.
          </p>
        </Container>
      </section>

      <Container size="prose" className="py-12 space-y-6">
        {PRINCIPES.map((r) => (
          <Card key={r.numero} accent="earth" className="overflow-hidden">
            <div className="bg-gradient-to-r from-earth-100 to-earth-50 p-5 sm:p-7">
              <div className="flex items-start gap-5">
                <span className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl bg-earth-500 text-cream-50 font-display text-2xl">
                  {r.numero}
                </span>
                <div>
                  <h2 className="font-display text-xl sm:text-2xl text-forest-900 leading-tight">
                    {r.titre}
                  </h2>
                </div>
              </div>
            </div>
            <CardContent>
              <p className="text-forest-800/90 leading-relaxed">{r.description}</p>
              <div className="mt-4 rounded-xl bg-forest-50/60 border border-forest-100 p-4">
                <p className="text-xs uppercase tracking-wider text-forest-600 mb-1 font-medium">
                  En pratique
                </p>
                <p className="text-sm text-forest-800/90 italic">{r.exemple}</p>
              </div>
            </CardContent>
          </Card>
        ))}

        <div className="text-center pt-8">
          <p className="text-sm text-forest-700/80 mb-3">
            Maintenant que vous connaissez les principes, explorez les micronutriments.
          </p>
          <ButtonLink href="/nutritherapie/vitamines" variant="primary">
            Voir les vitamines
          </ButtonLink>
        </div>
      </Container>
    </>
  );
}
