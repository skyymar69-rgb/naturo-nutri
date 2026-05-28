'use client';

import { useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

export default function GlobalError({
  error, reset,
}: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log côté client pour debug, pas de Sentry/tiers
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-console
      console.error('Nutriéa global error:', error);
    }
  }, [error]);

  return (
    <Container size="prose" className="py-20 sm:py-28 text-center">
      <div className="inline-grid place-items-center w-20 h-20 rounded-full bg-amber-100 mb-6">
        <AlertCircle className="h-10 w-10 text-amber-600" aria-hidden="true" />
      </div>

      <h1 className="font-display text-3xl sm:text-4xl text-forest-900 mb-3 text-balance">
        Une erreur s'est glissée
      </h1>
      <p className="text-forest-700/85 mb-8 text-lg leading-relaxed max-w-xl mx-auto">
        Désolé, quelque chose s'est mal passé en chargeant cette page. Vous pouvez réessayer ou retourner à l'accueil.
      </p>

      {error.digest && (
        <p className="text-xs text-forest-500 mb-6 font-mono">Réf. erreur : {error.digest}</p>
      )}

      <div className="flex flex-wrap gap-3 justify-center">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 bg-sage-500 hover:bg-sage-600 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-md hover:shadow-lg"
        >
          <RefreshCw className="h-4 w-4" aria-hidden="true" />
          Réessayer
        </button>
        <ButtonLink href="/" variant="secondary">
          <Home className="h-4 w-4" /> Retour à l'accueil
        </ButtonLink>
      </div>
    </Container>
  );
}
