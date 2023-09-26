'use client';

import Image from 'next/image';
import { Typography, Card } from '@material-tailwind/react';

import TeamImage01 from '@/public/images/team-member-01.jpg';
import TeamImage02 from '@/public/images/team-member-02.jpg';
import TeamImage03 from '@/public/images/team-member-03.jpg';
import TeamImage04 from '@/public/images/team-member-04.jpg';
import TeamImage05 from '@/public/images/team-member-05.jpg';
import TeamImage06 from '@/public/images/team-member-06.jpg';
import TeamImage07 from '@/public/images/team-member-07.jpg';
import TeamImage08 from '@/public/images/team-member-08.jpg';

export default function Team() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-40">
        <div className=" md:py-20 ">
          {/* Section header */}
          <div className="max-w-6xl mx-auto text-center pb-2 sm:pb-2">
            <h1
              className="h1 mb-2 sm:pb-8 pb-0 text-5xl sm:text-7xl text-slate-400 font-extralight  "
              data-aos="fade-up"
            >
              more about me
            </h1>
          </div>
          <Card className="mx-auto max-w-5xl p-8 sm:p-12 mt-9 mb-9 shadow-sm">
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
              Please join me LIVE on ZOOM, Sundays at 3:30-4:30pm
            </Typography>
          </Card>

          {/* Team members */}
          <div
            className="sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3"
            data-aos-id-team
          >
            {/* 1st member */}
            <div
              className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full mb-4"
                  src={TeamImage01}
                  width={120}
                  height={120}
                  alt="Team member 01"
                />
                <h4 className="text-xl font-medium mb-1">Lara Lamprecht</h4>
                <div className="text-gray-500 mb-1">CEO & Co-founder</div>
                <a
                  className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  @laraamprecht
                </a>
              </div>
            </div>

            {/* 2nd member */}
            <div
              className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full mb-4"
                  src={TeamImage02}
                  width={120}
                  height={120}
                  alt="Team member 02"
                />
                <h4 className="text-xl font-medium mb-1">Marie Koniuszek</h4>
                <div className="text-gray-500 mb-1">CEO & Co-founder</div>
                <a
                  className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  @marie_moon
                </a>
              </div>
            </div>

            {/* 3rd member */}
            <div
              className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full mb-4"
                  src={TeamImage03}
                  width={120}
                  height={120}
                  alt="Team member 03"
                />
                <h4 className="text-xl font-medium mb-1">Greg Sebastian</h4>
                <div className="text-gray-500 mb-1">Head of Design</div>
                <a
                  className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  @mr_sebastian
                </a>
              </div>
            </div>

            {/* 4th member */}
            <div
              className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full mb-4"
                  src={TeamImage04}
                  width={120}
                  height={120}
                  alt="Team member 04"
                />
                <h4 className="text-xl font-medium mb-1">Timothy Chandran</h4>
                <div className="text-gray-500 mb-1">Product Executive</div>
                <a
                  className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  @timothychandran
                </a>
              </div>
            </div>

            {/* 5th member */}
            <div
              className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full mb-4"
                  src={TeamImage05}
                  width={120}
                  height={120}
                  alt="Team member 05"
                />
                <h4 className="text-xl font-medium mb-1">Dominik Prasad</h4>
                <div className="text-gray-500 mb-1">Backend Lead</div>
                <a
                  className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  @dominikprasad
                </a>
              </div>
            </div>

            {/* 6th member */}
            <div
              className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full mb-4"
                  src={TeamImage06}
                  width={120}
                  height={120}
                  alt="Team member 06"
                />
                <h4 className="text-xl font-medium mb-1">Darya Semenova</h4>
                <div className="text-gray-500 mb-1">Backend Developer</div>
                <a
                  className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  @daryamagic
                </a>
              </div>
            </div>

            {/* 7th member */}
            <div
              className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full mb-4"
                  src={TeamImage07}
                  width={120}
                  height={120}
                  alt="Team member 07"
                />
                <h4 className="text-xl font-medium mb-1">Quentin Renvoye</h4>
                <div className="text-gray-500 mb-1">Product Designer</div>
                <a
                  className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  @quentinrenvoye
                </a>
              </div>
            </div>

            {/* 8th member */}
            <div
              className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full mb-4"
                  src={TeamImage08}
                  width={120}
                  height={120}
                  alt="Team member 08"
                />
                <h4 className="text-xl font-medium mb-1">Alyssa Chuzeville</h4>
                <div className="text-gray-500 mb-1">Community Lead</div>
                <a
                  className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  @hello_chuzeville
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
