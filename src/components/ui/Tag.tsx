import Link from 'next/link';
import { cn } from '@/lib/utils';

interface TagProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function Tag({ href, children, className }: TagProps) {
  const base =
    'inline-flex items-center text-xs font-semibold text-forest-700 bg-forest-50 hover:bg-forest-100 px-2.5 py-1 rounded-md transition-colors';
  if (href) {
    return (
      <Link href={href} className={cn(base, className)}>
        # {children}
      </Link>
    );
  }
  return <span className={cn(base, className)}># {children}</span>;
}
