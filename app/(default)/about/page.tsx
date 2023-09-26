export const metadata = {
  title: 'About us - Open PRO',
  description: 'Page description',
};

import HeroAbout from '@/components/hero-about';

import Team from '@/components/team';
import TestimonialsCarousel from '@/components/testimonials-carousel';
import Career from '@/components/career';
import Clients from '@/components/clients';
import Newsletter from '@/components/newsletter';

export default function About() {
  return (
    <>
      <HeroAbout />

      <Team />
      <TestimonialsCarousel />
      <Career />
      <Clients />
      <Newsletter />
    </>
  );
}
