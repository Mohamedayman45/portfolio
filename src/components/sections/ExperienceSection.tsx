'use client';

import Section, { SectionHeader } from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Icon from '@/components/ui/Icon';
import { EXPERIENCES } from '@/config/constants';
import { calculateExperience } from '@/lib/utils';

export default function ExperienceSection() {
  return (
    <Section id="experience" className="bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            title="Experience"
            subtitle="Production systems. Real users. Business impact."
          />
        </AnimatedSection>

        <div className="space-y-8">
          {EXPERIENCES.map((experience, index) => (
            <AnimatedSection key={experience.company} delay={index * 0.1}>
              <Card hover>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle as="h3">{experience.company}</CardTitle>
                      <p className="text-foreground-secondary mt-1">{experience.role}</p>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        {experience.startDate && (
                          <p className="text-foreground-tertiary text-sm">
                            {calculateExperience(experience.startDate)}
                          </p>
                        )}
                        {experience.location && (
                          <>
                            {experience.startDate && (
                              <span className="text-foreground-tertiary text-sm">•</span>
                            )}
                            <p className="text-foreground-tertiary text-sm">
                              {experience.location}
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                    <Icon name="server" className="text-primary" size={24} />
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground-secondary mb-2 uppercase tracking-wide">
                      Projects
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.projects.map((project) => (
                        <Badge key={project} variant="primary">
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground-secondary mb-3 uppercase tracking-wide">
                      Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-foreground-secondary">
                          <Icon name="check-circle" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {experience.technologies && (
                    <div>
                      <h4 className="text-sm font-semibold text-foreground-secondary mb-2 uppercase tracking-wide">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech}>{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </Section>
  );
}
