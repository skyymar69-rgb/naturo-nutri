import Link from 'next/link';
import { Leaf } from 'lucide-react';

const FOOTER_NAV = [
  {
    title: 'Tempéraments',
    links: [
      { label: 'Sanguin', href: '/temperaments/sanguin' },
      { label: 'Bilieux', href: '/temperaments/bilieux' },
      { label: 'Nerveux', href: '/temperaments/nerveux' },
      { label: 'Lymphatique', href: '/temperaments/lymphatique' },
    ],
  },
  {
    title: 'Méthodes',
    links: [
      { label: 'Jeûne hydrique', href: '/methodes/jeune-hydrique' },
      { label: 'Jeûne aux jus', href: '/methodes/jeune-jus' },
      { label: 'Monodiètes', href: '/methodes/monodietes' },
      { label: 'Purge à l\'huile de ricin', href: '/methodes/purge-ricin' },
      { label: 'Alimentation vivante', href: '/methodes/alimentation-vivante' },
    ],
  },
  {
    title: 'Nutrithérapie',
    links: [
      { label: 'Micronutriments', href: '/nutritherapie/micronutriments' },
      { label: '8 règles d\'or Curtay', href: '/nutritherapie/regles-curtay' },
      { label: 'Vitamines essentielles', href: '/nutritherapie/micronutriments' },
    ],
  },
  {
    title: 'À propos',
    links: [
      { label: 'Quiz tempérament', href: '/quiz-temperament' },
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'Contre-indications', href: '/contre-indications' },
      { label: 'Confidentialité', href: '/confidentialite' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-forest-100 bg-forest-900 text-cream-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-sage-400/20 text-sage-200">
                <Leaf className="h-5 w-5" />
              </span>
              <span className="font-display text-lg text-cream-50 leading-none">
                Naturo
                <span className="text-earth-300">·</span>
                Nutri
              </span>
            </div>
            <p className="mt-4 text-sm text-cream-100/70 leading-relaxed max-w-xs">
              Le site de référence dédié à la santé naturelle selon les enseignements d'Irène
              Grosjean et du Dr Jean-Paul Curtay.
            </p>
          </div>

          {FOOTER_NAV.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-sm font-semibold text-cream-50 mb-4 uppercase tracking-wider">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream-100/70 hover:text-cream-50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-forest-700/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-cream-100/60">
            © {new Date().getFullYear()} Naturo·Nutri · Site éducatif. Informations à visée
            pédagogique uniquement, ne remplaçant aucun avis médical.
          </p>
          <p className="text-xs text-cream-100/60">
            Inspiré de l'enseignement d'<strong className="text-cream-50/90">Irène Grosjean</strong>{' '}
            & du <strong className="text-cream-50/90">Dr Jean-Paul Curtay</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
