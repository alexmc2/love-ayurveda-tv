'use client';

import Image from 'next/legacy/image';
import { Typography, Card } from '@material-tailwind/react';
import ModalVideo from '@/components/modal-video';
import VideoThumb from '@/public/images/about-yt.jpg';

import TeamImage01 from '@/public/images/team-member-01.jpg';

export default function Team() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 sm:py-32 py-16">
        <div className=" md:py-20 ">
          {/* Section header */}
          <div className="max-w-6xl mx-auto text-center pb-4 sm:pb-4">
            <h1
              className="h1 mb-2 sm:pb-8 pb-0 text-5xl sm:text-7xl text-slate-400 font-extralight  "
              data-aos="fade-up"
            >
              about
            </h1>
          </div>
          <div
            className="sm:flex sm:flex-wrap sm:justify-center  sm:-mx-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex flex-col items-center pb-4 sm:pb-4">
              <Image
                className="rounded-full "
                src={TeamImage01}
                width={200}
                height={200}
                alt="Team member 01"
              />
            </div>
          </div>
          <Card className="mx-auto max-w-6xl p-8 sm:p-12 mt-9 mb-9 shadow-sm text-center sm:text-left">
            <img
              src="/images/logo.png"
              alt="logo"
              className="mx-auto logo-pulse pb-10 w-54 h-32"
            />
            {/* <div className="text-center ">
              <img
                src="/images/logo.png"
                alt="logo"
                className="mx-auto logo-pulse"
              />
            </div> */}
            <Typography
              className="text-lg sm:text-lg text-slate-500  "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Namaste! I’m Neena Nerkar and I’m your host at love ayurveda tv. A
              very warm welcome. I’m an Ayurvedic Medical Practitioner and Yoga
              teacher based in Cambridge, England. I have been driven in to
              action by the rise of the other pandemic in 2020 that of
              misinformation and fear. <br /> <br />
              My mission is to dispel those fears with hope and greater
              understanding of the issues. I thought what if I could bring
              experts from all over the world to a place they could share their
              knowledge? We could get to hear them talk first hand, instead of
              just quick soundbites or social media posts which can easily be
              taken out of context. <br /> <br />
              At love ayurveda tv talks, we take it slow, take time to listen,
              learn and reflect together. We bring the top doctors, scientists,
              researchers, academics, psychologists, psychiatrists, spiritual
              leaders to you, so you get to ask them questions on the topical
              health issues that concern you. Love ayurveda tv, sowing the seeds
              of hope. I’m hoping together we can spread kindness, love,
              compassion and greater understanding as we expand our collective
              consciousness. <br /> <br />
            </Typography>

            <div className="max-w-s mx-auto sm:max-w-none flex justify-center ">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn text-white bg-sky-600 hover:bg-sky-700 w-full my-8 sm:w-auto sm:mb-0 "
                  href="/"
                >
                  Join us LIVE on ZOOM
                </a>
              </div>
            </div>
            <div
              className="flex justify-center py-4 text-lg sm:text-lg text-slate-500"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {' '}
              Please join us LIVE on ZOOM, Sundays at 3:30-4:30pm
            </div>
          </Card>
          <div
            className="flex justify-center my-16"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <ModalVideo
              thumb={VideoThumb}
              thumbWidth={1200}
              thumbHeight={675}
              thumbAlt="Modal video thumbnail"
              videoUrl="https://www.youtube.com/embed/JAFc6CTXGb0?si=rLfrTJ3AoF3n3ctQ"
              videoWidth={1920}
              videoHeight={1080}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
