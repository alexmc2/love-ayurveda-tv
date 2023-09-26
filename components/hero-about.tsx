'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Typography, Card } from '@material-tailwind/react';

export default function HeroAbout() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const heroImageSrc = isMobile
    ? '/images/about-mobile.jpg'
    : '/images/about-desktop.jpg';

  return (
    <section className="relative pt-20 md:pt-24 pb-96">
      <div className="absolute inset-0 inset-y-16 sm:inset-y-20 h-[400px] sm:h-[550px]">
        <Image
          src={heroImageSrc}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
      </div>
      {/* Hero content */}
    </section>
  );
}
