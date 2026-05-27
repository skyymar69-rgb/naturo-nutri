import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité du site Naturo·Nutri (RGPD).',
};

export default function ConfidentialitePage() {
  return (
    <Container size="prose" className="py-16">
      <h1 className="font-display text-4xl text-forest-900 mb-8">Politique de confidentialité</h1>
      <div className="prose prose-natural max-w-none space-y-6 text-forest-800/90 leading-relaxed">
        <section>
          <h2 className="font-display text-2xl">Aucune collecte de données personnelles</h2>
          <p>
            Le site Naturo·Nutri ne collecte AUCUNE donnée personnelle sans votre consentement
            explicite. Aucun compte utilisateur n'est requis pour utiliser les fonctionnalités du
            site (quiz, lecture, consultation).
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl">Quiz tempérament</h2>
          <p>
            Les réponses du quiz tempérament sont calculées <strong>en local</strong> dans votre
            navigateur. Elles ne sont jamais transmises à un serveur. Les résultats disparaissent
            dès que vous fermez la page (sauf si vous les enregistrez vous-même).
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl">Cookies</h2>
          <p>
            Le site n'utilise pas de cookies de tracking ni d'analytics. Aucun cookie tiers
            (Google Analytics, Facebook Pixel, etc.) n'est déposé.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl">Conformité RGPD</h2>
          <p>
            Étant donné l'absence de collecte de données, le site est intrinsèquement conforme au
            RGPD. Vous pouvez naviguer en toute confidentialité.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl">Hébergement</h2>
          <p>
            Les logs serveur sont gérés par notre hébergeur Vercel selon ses propres conditions.
            Ils conservent uniquement les adresses IP anonymisées pour des raisons techniques
            (anti-DDoS), pour une durée limitée.
          </p>
        </section>
      </div>
    </Container>
  );
}
