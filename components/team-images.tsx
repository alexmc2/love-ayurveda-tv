import Image from 'next/legacy/image';

import Neena from '@/public/images/neena.jpg';
import TeamMosaic02 from '@/public/images/team-mosaic-02.jpg';
import TeamMosaic03 from '@/public/images/clinic.jpg';
import TeamMosaic04 from '@/public/images/team-mosaic-04.jpg';

export default function TeamImages() {
  return (
    <section className="relative ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-0 pb-3/4">
            {/* <figure
              className="absolute h-auto"
              style={{ top: '45%', width: '41.67%', maxWidth: '320px' }}
              data-aos="fade-right"
            >
              <Image
                src={TeamMosaic02}
                width="320"
                height="240"
                alt="Team mosaic 02"
              />
            </figure> */}
            <figure
              className="relative sm:ml-0 mx-auto h-auto md:mt-auto -mt-40 "
              style={{ width: '78.13%', maxWidth: '600px' }}
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <Image
                src={Neena}
                width="400"
                height="625"
                alt="Team mosaic 01"
              />
            </figure>
             <figure
              className="absolute h-auto hide-on-mobile mx-auto "
              style={{
                top: '28.5%',
                left: '41%',
                width: '90%',
                maxWidth: '642px',
              }}
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <Image
                src={TeamMosaic03}
                width="832"
                height="500"
                alt="Team mosaic 03"
              />
            </figure>
            {/* <figure
              className="absolute h-auto"
              style={{
                bottom: '0',
                right: '20%',
                width: '25.52%',
                maxWidth: '196px',
              }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Image
                src={TeamMosaic04}
                width="196"
                height="196"
                alt="Team mosaic 04"
              />
            </figure>  */}
          </div>
        </div>
      </div>
    </section>
  );
}
