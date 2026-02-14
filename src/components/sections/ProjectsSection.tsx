import Section, { SectionHeader } from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Icon from '@/components/ui/Icon';
import { PROJECTS } from '@/config/constants';

export default function ProjectsSection() {
  return (
    <Section id="projects" className="bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            title="Projects"
            subtitle="Case studies in architecture, performance, and security engineering."
          />
        </AnimatedSection>

        <div className="space-y-12">
          {PROJECTS.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <Card hover>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle as="h3">{project.title}</CardTitle>
                        <Badge variant="accent">{project.category}</Badge>
                      </div>
                      <p className="text-foreground-secondary">{project.description}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  {project.businessProblem && (
                    <div className="mb-6 p-4 bg-background-tertiary rounded-lg border border-border">
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Icon name="target" size={16} className="text-primary" />
                        Business Problem
                      </h4>
                      <p className="text-foreground-secondary text-sm">{project.businessProblem}</p>
                    </div>
                  )}

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Icon name="zap" size={16} className="text-primary" />
                      Solution
                    </h4>
                    <p className="text-foreground-secondary mb-4">{project.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Icon name="layers" size={16} className="text-primary" />
                      Technical Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.technicalHighlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-foreground-secondary text-sm">
                          <Icon name="arrow-right" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.impact && (
                    <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <h4 className="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
                        <Icon name="bar-chart" size={16} />
                        Impact
                      </h4>
                      <p className="text-foreground-secondary text-sm">{project.impact}</p>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-foreground-secondary mb-2 uppercase tracking-wide">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech}>{tech}</Badge>
                        ))}
                      </div>
                    </div>

                    {project.metrics && project.metrics.length > 0 && (
                      <div className="flex gap-4">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-2xl font-bold text-primary">{metric.value}</div>
                            <div className="text-xs text-foreground-tertiary">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </Section>
  );
}
