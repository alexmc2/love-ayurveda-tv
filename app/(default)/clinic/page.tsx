export const metadata = {
  title: 'About us - Love Ayurveda TV',
  description: 'Page description',
};

import HeroClinic from '@/components/hero-clinic';

import AboutClinic from '@/components/about-clinic';
import ClinicImages from '@/components/clinic-images';
// import TestimonialsCarousel from '@/components/testimonials-carousel';
// import Career from '@/components/career';
// import Clients from '@/components/clients';
import Newsletter from '@/components/newsletter';

export default function About() {
  return (
    <>
      <HeroClinic />
      <ClinicImages />

      <AboutClinic />
      {/* <TestimonialsCarousel /> */}
      {/* <Career /> */}
      {/* <Clients /> */}
      <Newsletter />
    </>
  );
}
