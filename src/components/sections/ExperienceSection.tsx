'use client';

import Section, { SectionHeader } from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Badge from '@/components/ui/Badge';
import Icon from '@/components/ui/Icon';
import { EXPERIENCES } from '@/config/constants';
import { calculateExperience } from '@/lib/utils';

export default function ExperienceSection() {
  return (
    <Section id="experience" className="bg-background-secondary">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            title="Experience"
            subtitle="Production systems with real users — not demos."
          />
        </AnimatedSection>

        <div className="space-y-10">
          {EXPERIENCES.map((experience, index) => (
            <AnimatedSection key={experience.company} delay={index * 0.05}>
              <div className="grid md:grid-cols-4 gap-6 md:gap-8">
                <div className="md:col-span-1">
                  <p className="text-foreground-tertiary text-sm">
                    {experience.startDate && calculateExperience(experience.startDate)}
                  </p>
                  {experience.location && (
                    <p className="text-foreground-tertiary text-sm mt-1">{experience.location}</p>
                  )}
                </div>

                <div className="md:col-span-3">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-serif text-xl font-medium tracking-tightish text-foreground">
                      {experience.company}
                    </h3>
                    <span className="text-foreground-tertiary">·</span>
                    <span className="text-foreground-secondary">{experience.role}</span>
                  </div>

                  <div className="mb-5">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground-tertiary mb-2">
                      Shipped
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.projects.map((project) => (
                        <Badge key={project.label} variant="primary">
                          {project.href ? (
                            <a
                              href={project.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline focus:underline"
                            >
                              {project.label}
                            </a>
                          ) : (
                            project.label
                          )}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-foreground-secondary text-[15px]">
                        <Icon name="arrow-right" className="text-primary mt-1 flex-shrink-0" size={14} />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>

                  {experience.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {index < EXPERIENCES.length - 1 && (
                <div className="mt-10 border-t border-border" />
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </Section>
  );
}
