import Section, { SectionHeader } from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Image from 'next/image';

export default function GitHubSection() {
  return (
    <Section id="github" className="bg-background">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            title="On GitHub"
            subtitle="What I've been shipping and learning in public."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden border border-border bg-background-secondary">
            <Image
              src="/github-contributions.png"
              alt="GitHub contributions over the last 12 months"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-center text-foreground-tertiary text-sm mt-4">
            Last 12 months of contributions
          </p>
        </AnimatedSection>
      </div>
    </Section>
  );
}
