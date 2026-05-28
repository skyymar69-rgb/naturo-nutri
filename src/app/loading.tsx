import { Container } from '@/components/ui/Container';
import { Skeleton, SkeletonCard } from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <Container size="prose" className="py-12 space-y-8" aria-live="polite" aria-busy="true">
      <div className="space-y-3">
        <Skeleton shape="text" className="w-32" />
        <Skeleton className="h-12 w-3/4" />
        <Skeleton shape="text" className="w-full" />
        <Skeleton shape="text" className="w-5/6" />
      </div>
      <Skeleton className="aspect-[21/9] w-full" />
      <div className="grid sm:grid-cols-3 gap-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
      <span className="sr-only">Chargement en cours…</span>
    </Container>
  );
}
