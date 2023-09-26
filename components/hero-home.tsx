'use client';

import VideoThumb from '@/public/images/hero-image-01.jpg';
import ModalVideo from '@/components/modal-video';
import { Typography, Card } from '@material-tailwind/react';

export default function HeroHome() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-7 sm:px-6 relative">
        {/* Illustration behind hero content */}

        <div className="text-center mt-32 md:mt-32">
          <img
            src="/images/logo.png"
            alt="logo"
            className="mx-auto logo-pulse"
          />
        </div>

        {/* Hero content */}
        <div className="relative pt-12 pb-12 sm:pt-12 sm:pb-14">
          {/* Section header */}

          <div className="max-w-6xl mx-auto text-center pb-16 sm:pb-30">
            <h1
              className="h1 mb-8 sm:pb-8 pb-0 text-5xl sm:text-9xl text-slate-400 font-extralight  "
              data-aos="fade-up"
            >
              love ayurveyda tv
            </h1>
            <Card className="mx-auto max-w-5xl p-8 sm:p-12 mt-9 shadow-sm">
              <Typography
                className="text-lg sm:text-lg text-slate-500  "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Namaste! Welcome to love ayurveda tv. I’m Neena Nerkar BSc
                (Hons) MCM (Master in Complementary Medicine and Ayurvedic
                Medicine). I’m an Ayurvedic Medical Practitioner and Yoga
                Teacher. The mission is to sow the seeds of hope by shining a
                light on the contribution of the vedic sciences to our
                wellbeing. <br></br>
                <br></br>
                Every week, love ayurveda tv brings you the top experts in their
                field, including doctors, scientists, academics, psychologists,
                researchers, and spiritual leaders. You get to ask them
                questions on the top issues that affect your mental and physical
                health. <br></br>
                <br></br>
                Be part of our community and help to spread greater awareness,
                understanding, and love. Join the discussion. Follow us on
                Eventbrite. Please subscribe to our YouTube Channel too.
              </Typography>
            </Card>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="SU4dNIzjjxk?si=MFie2qhLQxDhh7iB"
            videoWidth={1920}
            videoHeight={1080}
          />
          <div className="max-w-s mx-auto sm:max-w-none sm:flex sm:justify-center py-6">
            <div data-aos="fade-up" data-aos-delay="400">
              <a
                className="btn text-white bg-green-600 hover:bg-green-700 w-full mb-4 sm:w-auto sm:mb-0 "
                href="#0"
              >
                Join us LIVE on ZOOM
              </a>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <a
                className="btn text-white bg-fuchsia-700 hover:bg-fuchsia-800 w-full sm:w-auto sm:ml-4 px-12"
                href="#0"
              >
                Events Calender
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
