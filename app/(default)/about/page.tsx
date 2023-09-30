export const metadata = {
  title: 'About us - Open PRO',
  description: 'Page description',
};

import HeroAbout from '@/components/hero-about';

import AboutMe from '@/components/about-me';
// import TestimonialsCarousel from '@/components/testimonials-carousel';
// import Career from '@/components/career';
// import Clients from '@/components/clients';
import Newsletter from '@/components/newsletter';

export default function About() {
  return (
    <>
      <HeroAbout />

      <AboutMe />
      {/* <TestimonialsCarousel /> */}
      {/* <Career /> */}
      {/* <Clients /> */}
      <Newsletter />
    </>
  );
}
