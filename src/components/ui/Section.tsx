import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  container?: boolean;
}

export default function Section({ children, container = true, className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        'py-20 md:py-28',
        container && 'container mx-auto px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({ title, subtitle, align = 'left', className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', align === 'center' && 'text-center', className)}>
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary mb-3">
        {title}
      </p>
      {subtitle && (
        <h2
          className={cn(
            'font-serif text-2xl md:text-3xl font-medium tracking-tightish text-foreground max-w-2xl text-balance',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </h2>
      )}
    </div>
  );
}
