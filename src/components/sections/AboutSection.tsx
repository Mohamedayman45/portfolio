import Section, { SectionHeader } from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Card, { CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { ABOUT_CONTENT, TECH_STACK, EDUCATION } from '@/config/constants';

export default function AboutSection() {
  const stackGroups: { label: string; items: string[]; variant?: 'primary' | 'accent' }[] = [
    { label: 'Backend', items: TECH_STACK.backend },
    { label: 'Architecture', items: TECH_STACK.architecture, variant: 'primary' },
    { label: 'Frontend', items: TECH_STACK.frontend },
    { label: 'DevOps', items: TECH_STACK.devops },
    { label: 'Security', items: TECH_STACK.security, variant: 'accent' },
    { label: 'Languages', items: TECH_STACK.languages },
  ];

  return (
    <Section id="about" className="bg-background">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <SectionHeader title="About" subtitle="A backend engineer who treats architecture as a business decision." />
        </AnimatedSection>

        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <AnimatedSection delay={0.05} className="md:col-span-3">
            <div className="space-y-4 text-foreground-secondary leading-relaxed max-w-prose">
              {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="md:col-span-2">
            <div className="border-l border-border pl-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary mb-4">
                Education
              </p>
              <p className="font-serif text-lg text-foreground">{EDUCATION.faculty}</p>
              <p className="text-foreground-secondary mt-1">{EDUCATION.major}</p>
              <p className="text-foreground-tertiary text-sm mt-1">
                Graduating {EDUCATION.graduationYear}
              </p>
              <p className="text-sm text-foreground-secondary leading-relaxed mt-4">
                A CS foundation that drives how I model systems, weigh trade-offs, and reason about security.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.15}>
          <div className="pt-8 border-t border-border">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground-tertiary mb-6">
              Tools I reach for
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
              {stackGroups.map((group) => (
                <div key={group.label}>
                  <h4 className="text-sm font-medium text-foreground mb-3">{group.label}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((tech) => (
                      <Badge key={tech} variant={group.variant}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
