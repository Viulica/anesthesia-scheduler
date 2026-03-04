import { AnesthesiaFeatures } from '@/templates/AnesthesiaFeatures';
import { AnesthesiaFooter } from '@/templates/AnesthesiaFooter';
import { AnesthesiaHero } from '@/templates/AnesthesiaHero';
import { AnesthesiaMobileApp } from '@/templates/AnesthesiaMobileApp';
import { AnesthesiaNavbar } from '@/templates/AnesthesiaNavbar';
import { AnesthesiaSupport } from '@/templates/AnesthesiaSupport';
import { AnesthesiaWhoFor } from '@/templates/AnesthesiaWhoFor';

export const metadata = {
  title: 'Anesthesia Scheduler - Streamline Call and Operating Room Coverage',
  description: 'A web-based application that streamlines call and operating room coverage with fully customizable schedules, workflows, and coverage rules.',
};

export default function IndexPage() {
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
}
