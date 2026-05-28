'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Animation =
  | 'fade-up'
  | 'fade-down'
  | 'fade-in'
  | 'slide-left'
  | 'slide-right'
  | 'scale-up'
  | 'zoom-in';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: Animation;
  delay?: number;        // ms
  duration?: number;     // ms
  threshold?: number;    // 0–1
  once?: boolean;
  as?: 'div' | 'section' | 'article' | 'aside' | 'li' | 'span';
}

const INITIAL: Record<Animation, string> = {
  'fade-up':    'opacity-0 translate-y-10',
  'fade-down':  'opacity-0 -translate-y-8',
  'fade-in':    'opacity-0',
  'slide-left': 'opacity-0 -translate-x-10',
  'slide-right':'opacity-0 translate-x-10',
  'scale-up':   'opacity-0 scale-90',
  'zoom-in':    'opacity-0 scale-95',
};

export function AnimatedSection({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.12,
  once = true,
  as: Tag = 'div',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Remove initial state classes and let CSS transitions fire
          el.classList.remove(...INITIAL[animation].split(' '));
          el.style.opacity = '1';
          el.style.transform = 'none';
          if (once) observer.disconnect();
        } else if (!once) {
          el.classList.add(...INITIAL[animation].split(' '));
          el.style.opacity = '';
          el.style.transform = '';
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, once, threshold]);

  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(INITIAL[animation], 'transition-all ease-out', className)}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: delay > 0 ? `${delay}ms` : undefined,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Component>
  );
}

/** Staggered children — wraps each child in an AnimatedSection with increasing delays */
export function StaggerChildren({
  children,
  className,
  animation = 'fade-up',
  staggerMs = 100,
  baseDelay = 0,
}: {
  children: ReactNode[];
  className?: string;
  animation?: Animation;
  staggerMs?: number;
  baseDelay?: number;
}) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <AnimatedSection key={i} animation={animation} delay={baseDelay + i * staggerMs}>
          {child}
        </AnimatedSection>
      ))}
    </div>
  );
}
