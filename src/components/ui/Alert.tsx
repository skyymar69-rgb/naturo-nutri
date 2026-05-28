import { cn } from '@/lib/utils';
import { Info, AlertCircle, CheckCircle2, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';

type Variant = 'info' | 'success' | 'tip' | 'warning';

const VARIANTS: Record<Variant, {
  container: string;
  icon: string;
  Icon: typeof Info;
}> = {
  info:    { container: 'bg-sage-50 border-sage-200 text-forest-900', icon: 'text-sage-600',  Icon: Info },
  success: { container: 'bg-sage-50 border-sage-200 text-forest-900', icon: 'text-sage-600',  Icon: CheckCircle2 },
  tip:     { container: 'bg-earth-50 border-earth-200 text-forest-900', icon: 'text-earth-500', Icon: Sparkles },
  warning: { container: 'bg-amber-50 border-amber-200 text-amber-900', icon: 'text-amber-600', Icon: AlertCircle },
};

interface AlertProps {
  variant?: Variant;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Alert({ variant = 'info', title, children, className }: AlertProps) {
  const v = VARIANTS[variant];
  const Icon = v.Icon;
  return (
    <div
      role="note"
      className={cn('rounded-2xl border px-5 py-4 flex gap-3', v.container, className)}
    >
      <Icon className={cn('h-5 w-5 flex-shrink-0 mt-0.5', v.icon)} aria-hidden="true" />
      <div className="flex-1 min-w-0">
        {title && <p className="font-display text-base leading-tight mb-1">{title}</p>}
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
