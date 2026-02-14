import { PERSONAL_INFO } from '@/config/constants';
import Icon from '@/components/ui/Icon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'github' as const, href: PERSONAL_INFO.github, label: 'GitHub' },
    { icon: 'linkedin' as const, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
    { icon: 'mail' as const, href: `mailto:${PERSONAL_INFO.email}`, label: 'Email' },
  ];

  return (
    <footer className="bg-background-secondary border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-foreground-secondary text-sm">
            © {currentYear} {PERSONAL_INFO.name}. Built with Next.js & TypeScript.
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <Icon name={link.icon} size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
