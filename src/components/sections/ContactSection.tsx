'use client';

import Section, { SectionHeader } from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Card, { CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { PERSONAL_INFO } from '@/config/constants';

export default function ContactSection() {
  const contactMethods = [
    {
      icon: 'mail' as const,
      label: 'Email',
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
    },
    {
      icon: 'phone' as const,
      label: 'Phone',
      value: PERSONAL_INFO.phone,
      href: `tel:${PERSONAL_INFO.phone}`,
    },
    {
      icon: 'linkedin' as const,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: PERSONAL_INFO.linkedin,
    },
    {
      icon: 'github' as const,
      label: 'GitHub',
      value: 'View GitHub Profile',
      href: PERSONAL_INFO.github,
    },
  ];

  return (
    <Section id="contact" className="bg-background-secondary">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            title="Get In Touch"
            subtitle="Open to discussing architecture, backend systems, and engineering opportunities."
            align="center"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Card>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {contactMethods.map((method, index) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.icon === 'linkedin' || method.icon === 'github' ? '_blank' : undefined}
                    rel={method.icon === 'linkedin' || method.icon === 'github' ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-border-hover hover:bg-background-tertiary transition-all group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <Icon name={method.icon} className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground-secondary mb-1">
                        {method.label}
                      </div>
                      <div className="text-foreground group-hover:text-primary transition-colors">
                        {method.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="text-center pt-6 border-t border-border">
                <p className="text-foreground-secondary mb-6">
                  Interested in backend architecture, event-driven systems, or security engineering?
                  Let&apos;s connect.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    onClick={() => window.open(PERSONAL_INFO.cv, '_blank')}
                  >
                    <Icon name="file-text" size={18} className="mr-2" />
                    Download Resume
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open(`mailto:${PERSONAL_INFO.email}`, '_blank')}
                  >
                    <Icon name="mail" size={18} className="mr-2" />
                    Send Email
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </Section>
  );
}
