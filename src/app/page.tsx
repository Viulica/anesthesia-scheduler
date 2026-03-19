import dynamic from 'next/dynamic';

import { AnesthesiaFooter } from '@/templates/AnesthesiaFooter';
import { AnesthesiaHero } from '@/templates/AnesthesiaHero';
import { AnesthesiaNavbar } from '@/templates/AnesthesiaNavbar';
import { getBaseUrl } from '@/utils/Helpers';

const AnesthesiaMobileApp = dynamic(
  () => import('@/templates/AnesthesiaMobileApp').then(m => ({ default: m.AnesthesiaMobileApp })),
  { ssr: true },
);

const AnesthesiaFeatures = dynamic(
  () => import('@/templates/AnesthesiaFeatures').then(m => ({ default: m.AnesthesiaFeatures })),
  { ssr: true },
);

const AnesthesiaWhoFor = dynamic(
  () => import('@/templates/AnesthesiaWhoFor').then(m => ({ default: m.AnesthesiaWhoFor })),
  { ssr: true },
);

const AnesthesiaSupport = dynamic(
  () => import('@/templates/AnesthesiaSupport').then(m => ({ default: m.AnesthesiaSupport })),
  { ssr: true },
);

const baseUrl = getBaseUrl();
const title = 'Anesthesia Scheduler - Streamline Call and Operating Room Coverage';
const description =
  'A web-based application that streamlines call and operating room coverage with fully customizable schedules, workflows, and coverage rules.';

export const metadata = {
  title,
  description,
  alternates: { canonical: baseUrl },
  openGraph: {
    title,
    description,
    url: baseUrl,
  },
  twitter: { title, description },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Anesthesia Scheduler',
      description,
      publisher: { '@id': `${baseUrl}/#organization` },
    },
    {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'Anesthesia Scheduler',
      url: baseUrl,
      email: 'info@anesthesiascheduler.com',
    },
  ],
};

export default function IndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnesthesiaNavbar />
      <main id="main-content">
        <AnesthesiaHero />
        <AnesthesiaMobileApp />
        <AnesthesiaFeatures />
        <AnesthesiaWhoFor />
        <AnesthesiaSupport />
      </main>
      <AnesthesiaFooter />
    </>
  );
}
