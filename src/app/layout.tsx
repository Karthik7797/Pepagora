import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.scss';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Pepagora — Catalog & Website',
    template: '%s · Pepagora',
  },
  description:
    'Build and manage your catalog website from a single editor panel.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        {/* Cookieless pageview collection; only reports on Vercel deploys. */}
        <Analytics />
      </body>
    </html>
  );
}
