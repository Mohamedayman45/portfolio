'use client';

import Section, { SectionHeader } from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
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
      value: 'View GitHub profile',
      href: PERSONAL_INFO.github,
    },
  ];

  return (
    <Section id="contact" className="bg-background-secondary">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            title="Contact"
            subtitle="If you're building something that matters, I'd like to hear about it."
            align="center"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div className="grid sm:grid-cols-2 gap-px bg-border border border-border rounded-lg overflow-hidden mb-8">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.icon === 'linkedin' || method.icon === 'github' ? '_blank' : undefined}
                rel={method.icon === 'linkedin' || method.icon === 'github' ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-3 p-5 bg-background hover:bg-background-tertiary transition-colors group"
              >
                <Icon name={method.icon} className="text-primary mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <div className="text-xs text-foreground-tertiary mb-0.5">{method.label}</div>
                  <div className="text-foreground text-[15px] group-hover:text-primary transition-colors">
                    {method.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center pt-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                size="lg"
                onClick={() => window.open(PERSONAL_INFO.cv, '_blank')}
              >
                <Icon name="file-text" size={16} className="mr-2" />
                Download résumé
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(`mailto:${PERSONAL_INFO.email}`, '_blank')}
              >
                <Icon name="mail" size={16} className="mr-2" />
                Send an email
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
