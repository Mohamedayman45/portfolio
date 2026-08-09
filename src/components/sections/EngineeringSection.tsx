import Section, { SectionHeader } from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Icon, { IconName } from '@/components/ui/Icon';
import { ENGINEERING_PRINCIPLES } from '@/config/constants';

export default function EngineeringSection() {
  return (
    <Section id="engineering" className="bg-background-secondary">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            title="How I work"
            subtitle="The principles I actually use when making technical calls."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {ENGINEERING_PRINCIPLES.map((principle, index) => (
            <AnimatedSection key={principle.title} delay={index * 0.05}>
              <div className="flex items-start gap-4">
                <Icon name={principle.icon as IconName} className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-serif text-lg font-medium tracking-tightish text-foreground mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-foreground-secondary text-[15px] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-14 pt-10 border-t border-border">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground-tertiary mb-6 text-center">
              How a decision gets made
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="font-serif text-xl text-foreground mb-2">Analyze</div>
                <p className="text-sm text-foreground-secondary leading-relaxed">
                  Map each option to cost, scale, and the user experience it produces.
                </p>
              </div>
              <div>
                <div className="font-serif text-xl text-foreground mb-2">Validate</div>
                <p className="text-sm text-foreground-secondary leading-relaxed">
                  Build a PoC and benchmark it. Don&apos;t trust opinions, including mine.
                </p>
              </div>
              <div>
                <div className="font-serif text-xl text-foreground mb-2">Document</div>
                <p className="text-sm text-foreground-secondary leading-relaxed">
                  Write down the trade-offs so the next person knows why we chose this.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
