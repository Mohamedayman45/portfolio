'use client';

import Image from 'next/image';
import { PERSONAL_INFO, ABOUT_CONTENT } from '@/config/constants';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto relative z-[1]">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-10">
            <Image
              src="/my-photo.jpeg"
              alt="Mohamed Ayman"
              width={56}
              height={56}
              className="w-14 h-14 rounded-full object-cover border border-border"
            />
            <div className="flex items-center gap-2 text-sm text-foreground-tertiary">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Available for new work</span>
            </div>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tightish text-foreground leading-[1.1] mb-6 text-balance">
            {PERSONAL_INFO.name}
            <span className="block text-foreground-secondary font-serif-italic text-2xl sm:text-3xl md:text-4xl mt-3 font-normal">
              {ABOUT_CONTENT.headline}
            </span>
          </h1>

          <p className="text-lg text-foreground-secondary leading-relaxed max-w-prose mb-8">
            {ABOUT_CONTENT.introduction}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-10">
            <Button
              size="lg"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition });
                }
              }}
            >
              Get in touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition });
                }
              }}
            >
              See selected work
            </Button>
          </div>

          <div className="flex items-center gap-5">
            {[
              { icon: 'github', href: PERSONAL_INFO.github, label: 'GitHub' },
              { icon: 'linkedin', href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
              { icon: 'mail', href: `mailto:${PERSONAL_INFO.email}`, label: 'Email' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.icon !== 'mail' ? '_blank' : undefined}
                rel={social.icon !== 'mail' ? 'noopener noreferrer' : undefined}
                className="text-foreground-tertiary hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <Icon name={social.icon as any} size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        aria-label="Scroll to about"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-foreground-tertiary hover:text-primary transition-colors"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.18em]">Scroll</span>
        <Icon name="arrow-right" size={14} className="rotate-90" />
      </button>
    </section>
  );
}
