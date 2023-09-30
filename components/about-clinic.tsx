'use client';

import Image from 'next/legacy/image';
import { Typography, Card, Button } from '@material-tailwind/react';
import ModalVideo from '@/components/modal-video';
import VideoThumb from '@/public/images/about-yt.jpg';

import TeamImage01 from '@/public/images/team-member-01.jpg';

export default function AboutClinic() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6  ">
        <div className="  ">
          {/* Section header */}

          <div className="max-w-6xl mx-auto text-center pb-4 sm:pb-4">
            <h1
              className="h1 mt-56 sm:mt-48 md:mt-20 lg:-mt-28 mb-2 sm:pb-8 pb-0 text-5xl sm:text-8xl text-slate-400 font-extralight  "
              data-aos="fade-up"
            >
              ayurvedic consultations
            </h1>
          </div>
          {/* <div
            className="sm:flex sm:flex-wrap sm:justify-center  sm:-mx-3"
            data-aos-id-team
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
          </div> */}
          <Card className="mx-auto max-w-6xl p-8 sm:p-12 mt-9 mb-9 shadow-sm text-center sm:text-left">
            <img
              src="/images/logo.png"
              alt="logo"
              className="mx-auto logo-pulse pb-10 w-54 h-32"
            />

            <Typography
              className="text-lg sm:text-lg text-slate-500  "
              data-aos="fade-up"
              data-aos-delay="250"
            >
              At love ayurveda your wellbeing is at the heart of everything we
              do. Come and see us. We are here to help you feel physically and
              mentally better. <br></br>
              <br></br>
              We will listen carefully to find out what is troubling you and how
              we can help to restore your balance. The mission is to empower you
              reconnect with nature and fulfil your potential. <br></br>
              <br></br>
              Ayurvedic consultations take an hour and follow up appointments
              are usually half an hour. You will need to fill in a detailed
              health questionnaire before your first visit. Just drop us an
              email, about what is troubling you and we’ll get back to you as
              quickly as possible.
            </Typography>

            <div className="max-w-s mx-auto sm:max-w-none flex justify-center  ">
              <div data-aos="fade-up" data-aos-delay="400">
                <Button
                  className=" text-white text-lg bg-sky-600 hover:bg-sky-700 w-full my-10 sm:w-auto sm:mb-0 "
              
                >
                  Get in touch
                </Button>
              </div>
            </div>
            <div
              className="flex justify-center py-4 text-lg sm:text-lg text-slate-500"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {' '}
              Love ayurveda is here to help you.
            </div>
          </Card>
          <div className="text-center sm:py-4 py-2">
            <h1
              className="h1 text-3xl sm:text-4xl text-slate-400 font-extralight  "
              data-aos="fade-up"
            >
              our location
            </h1>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <Card className="mx-auto max-w-6xl p-8 sm:p-12 mt-9 mb-9 shadow-sm text-center sm:text-left">
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.580302783334!2d0.14739357651814303!3d52.19650116013018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8707c02659cc9%3A0xcfa902adb03ee4c2!2s16%20Cyprus%20Rd%2C%20Cambridge%20CB1%203QA!5e0!3m2!1sen!2suk!4v1695946075096!5m2!1sen!2suk"
                  style={{ border: '0' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
