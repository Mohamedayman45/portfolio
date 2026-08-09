import Section, { SectionHeader } from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Badge from '@/components/ui/Badge';
import Icon from '@/components/ui/Icon';
import { PROJECTS } from '@/config/constants';

export default function ProjectsSection() {
  return (
    <Section id="projects" className="bg-background">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            title="Selected work"
            subtitle="A few projects where the architecture was the interesting part."
          />
        </AnimatedSection>

        <div className="space-y-12">
          {PROJECTS.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.05}>
              <article className="grid md:grid-cols-5 gap-6 md:gap-8">
                <div className="md:col-span-2">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary mb-3">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-2xl font-medium tracking-tightish text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-foreground-secondary text-[15px] leading-relaxed mb-4">
                    {project.description}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                    >
                      <Icon name="external-link" size={14} />
                      {project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    </a>
                  )}
                </div>

                <div className="md:col-span-3 md:pl-8 md:border-l md:border-border">
                  {project.businessProblem && (
                    <div className="mb-5">
                      <p className="text-sm font-medium text-foreground mb-1">The problem</p>
                      <p className="text-foreground-secondary text-[15px] leading-relaxed">
                        {project.businessProblem}
                      </p>
                    </div>
                  )}

                  <div className="mb-5">
                    <p className="text-sm font-medium text-foreground mb-1">The approach</p>
                    <p className="text-foreground-secondary text-[15px] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {project.technicalHighlights.length > 0 && (
                    <ul className="space-y-1.5 mb-5">
                      {project.technicalHighlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-foreground-secondary text-[15px]"
                        >
                          <Icon name="arrow-right" className="text-primary mt-1 flex-shrink-0" size={14} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {project.impact && (
                    <p className="text-[15px] text-foreground italic mb-5 border-l-2 border-primary/40 pl-4">
                      {project.impact}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  {project.metrics && project.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4 border-t border-border">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx}>
                          <div className="font-serif text-lg text-foreground">{metric.value}</div>
                          <div className="text-xs text-foreground-tertiary">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </article>
              {index < PROJECTS.length - 1 && (
                <div className="mt-12 border-t border-border" />
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </Section>
  );
}
