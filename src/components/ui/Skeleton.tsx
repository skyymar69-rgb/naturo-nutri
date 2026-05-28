import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  /** Forme : rect (default), circle, text */
  shape?: 'rect' | 'circle' | 'text';
}

export function Skeleton({ className, shape = 'rect' }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'shimmer',
        shape === 'rect' && 'rounded-xl',
        shape === 'circle' && 'rounded-full',
        shape === 'text' && 'rounded h-4',
        className,
      )}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-white border border-forest-100 rounded-2xl p-5 space-y-3">
      <Skeleton className="h-32 w-full" />
      <Skeleton shape="text" className="w-3/4" />
      <Skeleton shape="text" className="w-full" />
      <Skeleton shape="text" className="w-5/6" />
    </div>
  );
}
