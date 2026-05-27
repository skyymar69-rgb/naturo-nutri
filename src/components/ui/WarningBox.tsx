import { AlertTriangle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface WarningBoxProps {
  variant?: 'danger' | 'warning' | 'info';
  title?: string;
  children: ReactNode;
  className?: string;
}

export function WarningBox({
  variant = 'warning',
  title,
  children,
  className,
}: WarningBoxProps) {
  const Icon = variant === 'info' ? Info : AlertTriangle;
  return (
    <div
      className={cn(
        'rounded-2xl border-l-4 p-5 my-6',
        variant === 'danger' && 'border-red-500 bg-red-50/80',
        variant === 'warning' && 'border-amber-500 bg-amber-50/80',
        variant === 'info' && 'border-forest-500 bg-forest-50/80',
        className,
      )}
    >
      <div className="flex gap-3">
        <Icon
          className={cn(
            'h-5 w-5 flex-shrink-0 mt-0.5',
            variant === 'danger' && 'text-red-600',
            variant === 'warning' && 'text-amber-600',
            variant === 'info' && 'text-forest-600',
          )}
          aria-hidden="true"
        />
        <div className="flex-1">
          {title && (
            <h4
              className={cn(
                'font-display text-base font-semibold mb-1',
                variant === 'danger' && 'text-red-900',
                variant === 'warning' && 'text-amber-900',
                variant === 'info' && 'text-forest-900',
              )}
            >
              {title}
            </h4>
          )}
          <div
            className={cn(
              'text-sm leading-relaxed',
              variant === 'danger' && 'text-red-900/90',
              variant === 'warning' && 'text-amber-900/90',
              variant === 'info' && 'text-forest-900/90',
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MedicalDisclaimer() {
  return (
    <WarningBox variant="warning" title="Avertissement médical important">
      <p>
        Les informations présentées sur ce site sont à <strong>visée éducative uniquement</strong>.
        Elles ne constituent pas un avis médical et ne remplacent pas une consultation avec un
        professionnel de santé qualifié. Consultez toujours un médecin avant d'entreprendre tout
        jeûne, purge ou changement alimentaire significatif, particulièrement si vous êtes enceinte,
        allaitez, prenez des médicaments, ou souffrez d'une pathologie chronique.
      </p>
    </WarningBox>
  );
}
