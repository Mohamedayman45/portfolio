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
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="text-foreground-tertiary text-sm">
            © {currentYear} {PERSONAL_INFO.name}
          </div>

          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-tertiary hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <Icon name={link.icon} size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
