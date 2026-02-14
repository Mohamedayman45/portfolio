'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { NAV_ITEMS, PERSONAL_INFO } from '@/config/constants';
import Icon from '@/components/ui/Icon';
import Button from '@/components/ui/Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            MA
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-foreground-secondary hover:text-foreground transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button
              size="sm"
              onClick={() => window.open(PERSONAL_INFO.cv, '_blank')}
            >
              Resume
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={isMobileMenuOpen ? 'x' : 'menu'} size={24} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-foreground-secondary hover:text-foreground transition-colors text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
              <Button
                size="sm"
                onClick={() => window.open(PERSONAL_INFO.cv, '_blank')}
                className="w-full"
              >
                Resume
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
