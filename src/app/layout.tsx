import '@/styles/global.css';

import type { Metadata, Viewport } from 'next';

import { getBaseUrl } from '@/utils/Helpers';

const baseUrl = getBaseUrl();
const siteName = 'Anesthesia Scheduler';
const defaultTitle = 'Anesthesia Scheduler - Streamline Call and Operating Room Coverage';
const defaultDescription =
  'A web-based application that streamlines call and operating room coverage with fully customizable schedules, workflows, and coverage rules.';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#7c3aed',
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    'anesthesia scheduling',
    'call schedule',
    'operating room coverage',
    'medical scheduling',
    'healthcare scheduling',
    'OR coverage',
  ],
  authors: [{ name: siteName, url: baseUrl }],
  creator: siteName,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: 'MZOpdl3WuMR6jgXFDPxV--72wGcLvm9R1kfF',
  },
  icons: [
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png?v=2' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png?v=2' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png?v=2' },
    { rel: 'icon', url: '/favicon.ico?v=2' },
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased" suppressHydrationWarning>
        {props.children}
      </body>
    </html>
  );
}
