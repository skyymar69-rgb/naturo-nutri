import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Container size="prose" className="py-24 text-center">
      <p className="font-display text-7xl text-earth-400 mb-4">404</p>
      <h1 className="font-display text-3xl text-forest-900 mb-3">Page introuvable</h1>
      <p className="text-forest-700/85 mb-8">
        Cette page n'existe pas ou a été déplacée. Mais votre santé, elle, vous attend toujours.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <ButtonLink href="/" variant="primary">
          Retour à l'accueil
        </ButtonLink>
        <ButtonLink href="/quiz-temperament" variant="secondary">
          Passer le quiz
        </ButtonLink>
      </div>
    </Container>
  );
}
