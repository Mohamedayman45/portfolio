import Section, { SectionHeader } from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Card, { CardContent } from '@/components/ui/Card';
import Icon, { IconName } from '@/components/ui/Icon';
import { ENGINEERING_PRINCIPLES } from '@/config/constants';

export default function EngineeringSection() {
  return (
    <Section id="engineering" className="bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            title="Engineering Mindset"
            subtitle="How I approach technical decisions and architecture."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {ENGINEERING_PRINCIPLES.map((principle, index) => (
            <AnimatedSection key={principle.title} delay={index * 0.1}>
              <Card hover className="h-full">
                <CardContent>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 flex-shrink-0">
                      <Icon name={principle.icon as IconName} className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-foreground-secondary text-sm leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 p-8 bg-background-tertiary rounded-xl border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
              Decision-Making Framework
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Analyze</div>
                <h4 className="font-semibold text-foreground mb-2">Understand Business</h4>
                <p className="text-sm text-foreground-secondary">
                  Map technical choices to business impact, cost, and user experience
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Validate</div>
                <h4 className="font-semibold text-foreground mb-2">Build PoC</h4>
                <p className="text-sm text-foreground-secondary">
                  Validate assumptions with benchmarks and proof of concepts
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Document</div>
                <h4 className="font-semibold text-foreground mb-2">Document Trade-offs</h4>
                <p className="text-sm text-foreground-secondary">
                  Explicitly capture costs, benefits, and long-term implications
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
