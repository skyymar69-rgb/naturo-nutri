import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ButtonLink } from '@/components/ui/Button';
import { ShieldCheck } from 'lucide-react';
import { REGLES_CURTAY } from '@/lib/complements';

export const metadata: Metadata = {
  title: "Les 8 règles d'or du Dr Curtay",
  description:
    "Les 8 critères du Dr Jean-Paul Curtay pour choisir un complément alimentaire de qualité : ingrédients, formes biodisponibles, dosages, populations.",
};

export default function ReglesCurtayPage() {
  return (
    <>
      <section className="grain-bg py-16">
        <Container size="prose">
          <Badge variant="earth" className="mb-6">
            <ShieldCheck className="h-3 w-3" /> Référence Curtay
          </Badge>
          <h1 className="font-display text-5xl sm:text-6xl text-forest-900 leading-tight text-balance">
            Les 8 règles d'or
          </h1>
          <p className="mt-4 text-lg text-forest-700/85 leading-relaxed">
            Comment reconnaître un complément digne de ce nom ? Le Dr Jean-Paul Curtay a établi 8
            critères non négociables. Ils permettent d'éliminer en quelques secondes les produits
            douteux, et de choisir ce qui sert vraiment votre santé.
          </p>
        </Container>
      </section>

      <Container size="prose" className="py-12 space-y-6">
        {REGLES_CURTAY.map((r) => (
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
              {r.exemple && (
                <div className="mt-4 rounded-xl bg-forest-50/60 border border-forest-100 p-4">
                  <p className="text-xs uppercase tracking-wider text-forest-600 mb-1 font-medium">
                    En pratique
                  </p>
                  <p className="text-sm text-forest-800/90 italic">{r.exemple}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}

        <div className="text-center pt-8">
          <p className="text-sm text-forest-700/80 mb-3">
            Maintenant que vous connaissez les règles, explorez les micronutriments.
          </p>
          <ButtonLink href="/nutritherapie/micronutriments" variant="primary">
            Voir les fiches micronutriments
          </ButtonLink>
        </div>
      </Container>
    </>
  );
}
