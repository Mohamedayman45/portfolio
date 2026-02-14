import Section, { SectionHeader } from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Card, { CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { ABOUT_CONTENT, TECH_STACK, EDUCATION } from '@/config/constants';

export default function AboutSection() {
  return (
    <Section id="about" className="bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            title="About"
            subtitle="Systems thinker. Architecture-focused. Business-aware engineer."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <AnimatedSection delay={0.1}>
            <Card>
              <CardContent>
                <div className="space-y-4 text-foreground-secondary leading-relaxed">
                  {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card>
              <CardContent>
                <h3 className="text-xl font-semibold text-foreground mb-4">Education</h3>
                <div className="space-y-2 mb-6">
                  <p className="text-foreground">{EDUCATION.faculty}</p>
                  <p className="text-foreground-secondary">{EDUCATION.major}</p>
                  <p className="text-foreground-tertiary">Graduating {EDUCATION.graduationYear}</p>
                </div>
                <p className="text-sm text-foreground-secondary leading-relaxed">
                  Academic foundation in Computer Science strengthens systems thinking, 
                  architecture decisions, and business-aware engineering approaches.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold text-foreground mb-6">Tech Stack</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-foreground-secondary mb-3 uppercase tracking-wide">
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {TECH_STACK.backend.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground-secondary mb-3 uppercase tracking-wide">
                    Architecture
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {TECH_STACK.architecture.map((tech) => (
                      <Badge key={tech} variant="primary">{tech}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground-secondary mb-3 uppercase tracking-wide">
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {TECH_STACK.frontend.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground-secondary mb-3 uppercase tracking-wide">
                    DevOps
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {TECH_STACK.devops.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground-secondary mb-3 uppercase tracking-wide">
                    Security
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {TECH_STACK.security.map((tech) => (
                      <Badge key={tech} variant="accent">{tech}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground-secondary mb-3 uppercase tracking-wide">
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {TECH_STACK.languages.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </Section>
  );
}
