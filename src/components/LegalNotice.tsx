/**
 * LegalNotice — encadrés de protection juridique renforcée.
 *
 * Trois variantes :
 * - <NaturopathieDisclaimer />  : encart obligatoire en haut de chaque article
 *   naturopathie. Rappelle que la naturopathie n'est pas une médecine au sens
 *   du Code de la santé publique français et que le contenu est éducatif.
 * - <TraditionNotice />         : pour les articles "tradition" / "no-data" —
 *   signale explicitement l'absence de validation scientifique.
 * - <BottomLegalNotice />       : encart pied de page article, plus long,
 *   renvoie vers les pages légales.
 */

import Link from 'next/link';
import { ShieldAlert, AlertTriangle, BookHeart } from 'lucide-react';

export function NaturopathieDisclaimer() {
  return (
    <div
      role="note"
      aria-label="Avertissement juridique"
      className="bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-4 not-prose"
    >
      <div className="flex gap-3">
        <ShieldAlert className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div className="text-sm leading-relaxed text-amber-900">
          <p className="font-semibold mb-1">
            Contenu éducatif — ne se substitue pas à un avis médical
          </p>
          <p>
            Cet article décrit une approche issue de la naturopathie ou de l'hygiène de vie.
            La naturopathie <strong>n'est pas reconnue comme une médecine</strong> au sens du Code de la
            santé publique français&nbsp;: elle ne saurait remplacer un diagnostic, un traitement ou un suivi
            médical. Les contre-indications listées ne sont pas exhaustives. En cas de doute, de pathologie
            chronique, de grossesse, d'allaitement ou de traitement en cours, l'avis d'un{' '}
            <strong>médecin reste indispensable</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

export function TraditionNotice() {
  return (
    <div
      role="note"
      aria-label="Précision sur la nature traditionnelle de l'article"
      className="bg-stone-100 border-l-4 border-stone-400 rounded-r-2xl p-4 not-prose"
    >
      <div className="flex gap-3">
        <BookHeart className="h-5 w-5 text-stone-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div className="text-sm leading-relaxed text-stone-800">
          <p className="font-semibold mb-1">
            Pratique transmise par la tradition
          </p>
          <p>
            La pratique décrite ici relève principalement de la <strong>tradition naturopathique</strong>{' '}
            ou de la pharmacopée empirique. À ce jour, peu ou pas d'essais cliniques contrôlés en évaluent
            l'efficacité ou la sécurité dans le cadre d'une indication thérapeutique précise. L'article a une
            visée informative ; il ne formule ni promesse ni recommandation médicale.
          </p>
        </div>
      </div>
    </div>
  );
}

export function BottomLegalNotice() {
  return (
    <div
      role="note"
      aria-label="Mentions légales"
      className="bg-cream-50 border border-forest-100 rounded-2xl p-5 mt-10 not-prose"
    >
      <div className="flex gap-3">
        <AlertTriangle className="h-5 w-5 text-forest-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div className="text-sm leading-relaxed text-forest-800">
          <p className="font-semibold text-forest-900 mb-2">Mentions importantes</p>
          <ul className="space-y-1.5 list-disc pl-5">
            <li>
              Cet article a une <strong>vocation pédagogique</strong>. Il ne saurait en aucun cas constituer
              un avis médical individualisé, un diagnostic ou une prescription.
            </li>
            <li>
              Les informations citent leurs sources lorsqu'elles existent. En l'absence de données
              scientifiques, l'article le mentionne explicitement.
            </li>
            <li>
              Les <strong>contre-indications</strong> listées ne sont pas exhaustives.
              Tout symptôme inhabituel doit conduire à l'arrêt de la pratique et à la consultation
              d'un professionnel de santé.
            </li>
            <li>
              Pour toute question relative au cadre légal de ce site, voir nos pages{' '}
              <Link href="/mentions-legales" className="underline font-medium hover:text-forest-900">mentions légales</Link>,{' '}
              <Link href="/cgu" className="underline font-medium hover:text-forest-900">CGU</Link> et{' '}
              <Link href="/contre-indications" className="underline font-medium hover:text-forest-900">contre-indications générales</Link>.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
