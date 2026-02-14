'use client';

import { PERSONAL_INFO, ABOUT_CONTENT } from '@/config/constants';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">{/* Background now global */}

      <div className="container mx-auto relative z-[1]">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-75 blur-xl"
              />
              <img
                src="/my-photo.jpeg"
                alt="Mohamed Ayman"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/30 shadow-2xl shadow-primary/20"
              />
            </div>
          </motion.div>

          {/* Badge with fancy entrance */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 backdrop-blur-sm">
              Available for opportunities
            </span>
          </motion.div>

          {/* Name with staggered letter animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            {PERSONAL_INFO.name.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle with gradient effect */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-2xl md:text-3xl text-foreground-secondary mb-8 font-medium"
          >
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              {ABOUT_CONTENT.headline}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-lg md:text-xl text-foreground-secondary mb-4 max-w-3xl mx-auto"
          >
            {ABOUT_CONTENT.subheadline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-base md:text-lg text-foreground-tertiary mb-12 max-w-2xl mx-auto"
          >
            {ABOUT_CONTENT.introduction}
          </motion.p>

          {/* Buttons with stagger animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
              >
                Get In Touch
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
              >
                View Projects
              </Button>
            </motion.div>
          </motion.div>

          {/* Social links with stagger */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="mt-12 flex items-center justify-center gap-6"
          >
            {[
              { icon: 'github', href: PERSONAL_INFO.github, label: 'GitHub' },
              { icon: 'linkedin', href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
              { icon: 'mail', href: `mailto:${PERSONAL_INFO.email}`, label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.icon !== 'mail' ? '_blank' : undefined}
                rel={social.icon !== 'mail' ? 'noopener noreferrer' : undefined}
                className="text-foreground-secondary hover:text-primary transition-colors"
                aria-label={social.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 2 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon name={social.icon as any} size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Fancy Scroll Indicator - moved inside content div */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="mt-16 flex justify-center cursor-pointer"
            onClick={scrollToAbout}
          >
          <div className="flex flex-col items-center gap-3 group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-xl"
              />
              <div className="relative w-8 h-12 rounded-full border-2 border-primary/50 group-hover:border-primary transition-colors flex items-start justify-center p-2 backdrop-blur-sm bg-background/10">
                <motion.div
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50"
                />
              </div>
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-xs text-foreground-tertiary group-hover:text-primary transition-colors font-medium tracking-wider uppercase"
            >
              Scroll to explore
            </motion.span>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
