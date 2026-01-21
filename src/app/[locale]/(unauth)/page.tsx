import { unstable_setRequestLocale } from 'next-intl/server';

import { AnesthesiaFeatures } from '@/templates/AnesthesiaFeatures';
import { AnesthesiaFooter } from '@/templates/AnesthesiaFooter';
import { AnesthesiaHero } from '@/templates/AnesthesiaHero';
import { AnesthesiaMobileApp } from '@/templates/AnesthesiaMobileApp';
import { AnesthesiaNavbar } from '@/templates/AnesthesiaNavbar';
import { AnesthesiaSupport } from '@/templates/AnesthesiaSupport';
import { AnesthesiaWhoFor } from '@/templates/AnesthesiaWhoFor';

export async function generateMetadata() {
  return {
    title: 'Anesthesia Scheduler - Streamline Call and Operating Room Coverage',
    description: 'A web-based application that streamlines call and operating room coverage with fully customizable schedules, workflows, and coverage rules.',
  };
}

const IndexPage = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);

  return (
    <>
      <AnesthesiaNavbar />
      <AnesthesiaHero />
      <AnesthesiaMobileApp />
      <AnesthesiaFeatures />
      <AnesthesiaWhoFor />
      <AnesthesiaSupport />
      <AnesthesiaFooter />
    </>
  );
};

export default IndexPage;
