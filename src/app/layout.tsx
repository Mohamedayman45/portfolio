import type { Metadata } from 'next';
import { Inter, Newsreader } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Mohamed Ayman | Software Engineer',
  description: 'Software Engineer specializing in backend architecture, event-driven systems, and security engineering. Experience with Node.js, Go, NestJS, and production-grade systems.',
  keywords: ['Software Engineer', 'Backend Engineer', 'Full Stack Developer', 'DevOps', 'Node.js', 'Go', 'NestJS', 'Event-Driven Architecture', 'Domain Driven Design', 'Cybersecurity'],
  authors: [{ name: 'Mohamed Ayman' }],
  creator: 'Mohamed Ayman',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mohamedayman.dev',
    title: 'Mohamed Ayman | Software Engineer',
    description: 'Software Engineer specializing in backend architecture, event-driven systems, and security engineering.',
    siteName: 'Mohamed Ayman Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Ayman | Software Engineer',
    description: 'Software Engineer specializing in backend architecture, event-driven systems, and security engineering.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
