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
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-foreground-secondary max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
