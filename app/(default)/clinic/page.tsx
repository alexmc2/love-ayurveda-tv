export const metadata = {
  title: 'About us - Open PRO',
  description: 'Page description',
};

import HeroClinic from '@/components/hero-clinic';

import AboutClinic from '@/components/about-clinic';
import TeamImages from '@/components/team-images';
// import TestimonialsCarousel from '@/components/testimonials-carousel';
// import Career from '@/components/career';
import Clients from '@/components/clients';
import Newsletter from '@/components/newsletter';

export default function About() {
  return (
    <>
      <HeroClinic />
      <TeamImages />

      <AboutClinic />
      {/* <TestimonialsCarousel /> */}
      {/* <Career /> */}
      <Clients />
      <Newsletter />
    </>
  );
}
