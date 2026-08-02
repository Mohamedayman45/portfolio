'use client';

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">{/* Background now global */}

      <div className="container mx-auto relative z-[1]">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-75 blur-xl" />
              <img
                src="/my-photo.jpeg"
                alt="Mohamed Ayman"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/30 shadow-2xl shadow-primary/20"
              />
            </div>
          </div>

          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 backdrop-blur-sm">
              Available for opportunities
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            {PERSONAL_INFO.name}
          </h1>

          <h2 className="text-2xl md:text-3xl text-foreground-secondary mb-8 font-medium">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {ABOUT_CONTENT.headline}
            </span>
          </h2>

          <p className="text-lg md:text-xl text-foreground-secondary mb-4 max-w-3xl mx-auto">
            {ABOUT_CONTENT.subheadline}
          </p>

          <p className="text-base md:text-lg text-foreground-tertiary mb-12 max-w-2xl mx-auto">
            {ABOUT_CONTENT.introduction}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              Get In Touch
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
              View Projects
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6">
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
                className="text-foreground-secondary hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <Icon name={social.icon as any} size={24} />
              </a>
            ))}
          </div>

          <div
            className="mt-16 flex justify-center cursor-pointer"
            onClick={scrollToAbout}
          >
            <div className="flex flex-col items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-xl" />
                <div className="relative w-8 h-12 rounded-full border-2 border-primary/50 group-hover:border-primary transition-colors flex items-start justify-center p-2 backdrop-blur-sm bg-background/10">
                  <div className="w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50" />
                </div>
              </div>
              <span className="text-xs text-foreground-tertiary group-hover:text-primary transition-colors font-medium tracking-wider uppercase">
                Scroll to explore
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
