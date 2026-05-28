import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Alert } from '@/components/ui/Alert';
import { ALL_ACTUALITES } from '@/lib/actualites';
import { ALL_ARTICLES } from '@/lib/articles';
import { BookOpen, FileText, ShieldCheck, Microscope, Scale, AlertCircle } from 'lucide-react';

const SITE = 'https://naturo-nutri.vercel.app';

export const metadata: Metadata = {
  title: 'Notre démarche éditoriale',
  description: "Comment Nutriéa sélectionne, source et vérifie ses informations. Notre engagement de transparence et de prudence en santé.",
  alternates: { canonical: `${SITE}/notre-demarche` },
};

const PILIERS = [
  {
    icon: Microscope,
    title: 'Sources vérifiées',
    body: "Chaque affirmation publiée en Actualités est rattachée à une référence scientifique cliquable (PubMed, méta-analyse, essai contrôlé randomisé, recommandation officielle). Les PMID sont vérifiés un par un avant publication.",
    accent: 'bg-sage-100 text-sage-700',
  },
  {
    icon: Scale,
    title: 'Ton conditionnel obligatoire',
    body: "Aucune affirmation médicale absolue. Les formulations « il semblerait », « les données suggèrent », « les chercheurs auraient observé » sont systématiques. Nous ne diagnostiquons pas, nous ne prescrivons pas.",
    accent: 'bg-forest-100 text-forest-700',
  },
  {
    icon: ShieldCheck,
    title: 'Distinction tradition vs science',
    body: "Chaque article naturopathie porte un badge de niveau de preuve (5 paliers : méta-analyse, RCT, données préliminaires, tradition, pas de données). Une pratique traditionnelle n'est jamais présentée comme validée.",
    accent: 'bg-amber-100 text-amber-700',
  },
  {
    icon: AlertCircle,
    title: 'Contre-indications visibles',
    body: "Les contre-indications, interactions médicamenteuses et situations particulières (grossesse, allaitement, traitements en cours) sont mises en évidence sur chaque article concerné.",
    accent: 'bg-red-100 text-red-700',
  },
];

export default function NotreDemarchePage() {
  const totalArticles = ALL_ARTICLES.length;
  const totalActualites = ALL_ACTUALITES.length;
  const totalSources = ALL_ACTUALITES.reduce((acc, a) => acc + a.sources.length, 0);
  const totalPmid = ALL_ACTUALITES.reduce(
    (acc, a) => acc + a.sources.filter((s) => s.pmid).length, 0,
  );

  return (
    <>
      <section className="hero-bg py-14 sm:py-20 border-b border-forest-100">
        <Container size="prose" className="text-center">
          <div className="inline-grid place-items-center w-16 h-16 rounded-2xl bg-white/80 mb-5">
            <ShieldCheck className="h-8 w-8 text-sage-600" aria-hidden="true" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-900 leading-tight text-balance">
            Notre démarche éditoriale
          </h1>
          <p className="mt-5 text-lg text-forest-700/85 leading-relaxed max-w-2xl mx-auto text-balance">
            Comment Nutriéa sélectionne, vérifie et publie son contenu — pour mériter votre confiance.
          </p>

          <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            <Stat n={totalArticles} l="Articles" />
            <Stat n={totalActualites} l="Actualités sourcées" />
            <Stat n={totalSources} l="Références" />
            <Stat n={totalPmid} l="PMID vérifiés" hideOnMobile />
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <Container size="prose">
          <h2 className="font-display text-3xl sm:text-4xl text-forest-900 mb-3 text-balance">Nos quatre engagements</h2>
          <p className="text-forest-700/85 leading-relaxed mb-10">
            Le contenu santé est sensible. Notre rôle est de vous donner accès à une information honnête, lisible et
            cliquable jusqu'à la source — pas de vous prescrire.
          </p>

          <div className="grid gap-5">
            {PILIERS.map((p) => {
              const Icon = p.icon;
              return (
                <article key={p.title} className="bg-cream-50 border border-forest-100 rounded-2xl p-6 flex gap-4">
                  <div className={`flex-shrink-0 grid place-items-center w-12 h-12 rounded-2xl ${p.accent}`}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-forest-900 mb-1.5">{p.title}</h3>
                    <p className="text-sm text-forest-800/90 leading-relaxed">{p.body}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <h2 className="font-display text-3xl text-forest-900 mt-14 mb-3">Ce que nous ne faisons pas</h2>
          <ul className="space-y-3 text-forest-800/90 leading-relaxed">
            <Li><strong>Nous ne diagnostiquons pas.</strong> Aucun article ne remplace une consultation médicale.</Li>
            <Li><strong>Nous ne prescrivons pas.</strong> Les posologies indiquées proviennent des essais cités, à discuter avec un professionnel de santé.</Li>
            <Li><strong>Nous n'inventons pas de sources.</strong> Si une pratique n'a pas de littérature, l'article le précise explicitement (badge « Pratique traditionnelle »).</Li>
            <Li><strong>Nous ne vendons rien.</strong> Aucune marque, aucun affilié, aucun lien sponsorisé.</Li>
            <Li><strong>Nous ne pistons pas.</strong> Aucun cookie publicitaire, aucun tracker. Les retours « utile / pas utile » restent en local sur votre appareil.</Li>
          </ul>

          <h2 className="font-display text-3xl text-forest-900 mt-14 mb-3">Le cadre légal</h2>
          <p className="text-forest-800/90 leading-relaxed mb-4">
            La naturopathie <strong>n'est pas reconnue comme une médecine</strong> au sens du Code de la santé
            publique français. Nutriéa ne propose ni diagnostic, ni consultation, ni prescription. Le contenu
            publié est à visée éducative.
          </p>
          <p className="text-forest-800/90 leading-relaxed mb-8">
            En cas de symptôme inhabituel, de pathologie chronique, de grossesse, d'allaitement ou de traitement
            en cours, <strong>consultez un médecin</strong>. La poursuite d'un traitement médical ne doit jamais
            être interrompue sans avis de votre prescripteur.
          </p>

          <Alert variant="info" title="Une erreur, une source à corriger ?">
            Nous mettons un point d'honneur à corriger toute imprécision. Si vous trouvez une référence erronée,
            une affirmation mal sourcée ou une formulation trop affirmative, écrivez-nous via la page contact —
            nous corrigerons dans les meilleurs délais.
          </Alert>
        </Container>
      </section>
    </>
  );
}

function Stat({ n, l, hideOnMobile }: { n: number; l: string; hideOnMobile?: boolean }) {
  return (
    <div className={`bg-white/70 border border-forest-100 rounded-xl py-3 ${hideOnMobile ? 'hidden sm:block' : ''}`}>
      <p className="font-display text-2xl sm:text-3xl text-forest-900">{n}</p>
      <p className="text-[10px] sm:text-xs text-forest-600 mt-0.5">{l}</p>
    </div>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-sage-500" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}
