export const metadata = {
  title: 'Home - Love Ayurveda TV',
  description: 'Page description',
};

import Hero from '@/components/hero-home';

import FeaturesHome from '@/components/features';
import NewsEvents from '@/components/news-events';
// import Target from '@/components/target'
import Talks from '@/components/talks';
import Newsletter from '@/components/newsletter';

export default function Home() {
  return (
    <>
      <Hero />

      <FeaturesHome />
      <NewsEvents />
      {/* <Target /> */}
      <Talks />
      <Newsletter />
    </>
  );
}
