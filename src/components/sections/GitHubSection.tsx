import Section, { SectionHeader } from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Card, { CardContent } from '@/components/ui/Card';
import Image from 'next/image';

export default function GitHubSection() {
  return (
    <Section id="github" className="bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            title="GitHub Activity"
            subtitle="Consistent contributions and open-source involvement."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Card>
            <CardContent>
              <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden bg-background-tertiary">
                <Image
                  src="/github-contributions.png"
                  alt="GitHub Contributions"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-center text-foreground-secondary text-sm mt-4">
                Last 12 months of contributions
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </Section>
  );
}
