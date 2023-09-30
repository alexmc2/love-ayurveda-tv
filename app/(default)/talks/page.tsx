'use client';

import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import Image from 'next/legacy/image';
import PostDate from '@/components/post-date';
import PostTags from '@/components/post-tags';
import PostItem from '@/components/post-item';

import Newsletter from '@/components/newsletter';
import HeroTalks from '@/components/hero-talks';
import VideoThumb1 from '@/public/images/talk-1.jpg';
import VideoThumb2 from '@/public/images/talk-2.jpg';
import VideoThumb3 from '@/public/images/talk-3.jpg';
import VideoThumb4 from '@/public/images/talk-4.jpg';
import VideoThumb5 from '@/public/images/talk-5.jpg';
import VideoThumb6 from '@/public/images/talk-6.jpg';
import VideoThumb7 from '@/public/images/talk-7.jpg';
import ModalVideo from '@/components/modal-video';
import { Typography, Card } from '@material-tailwind/react';

export default function Blog() {
  // Sort posts by date
  allPosts.sort((a, b) => {
    return new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1;
  });

  const featuredPost = allPosts[0];
  const posts = allPosts.slice(1);

  return (
    <>
      <HeroTalks />
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/*  Page header */}
            <div className="max-w-6xl mx-auto text-center sm:pt-16 pb-16 sm:mt-0 sm:mb-0 -mt-12  ">
              <h1
                className="h1  text-6xl sm:text-8xl text-slate-400 font-extralight  "
                data-aos="fade-up"
              >
                latest talks
              </h1>
            </div>

            {/*  Featured article */}
            <div className="pb-12 md:pb-20">
              <div className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                {/* <div
                  className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                  aria-hidden="true"
                ></div> */}

                <div className="relative h-0 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                  <div className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out">
                    <ModalVideo
                      thumb={VideoThumb1}
                      thumbWidth={540}
                      thumbHeight={303}
                      thumbAlt="Modal video thumbnail"
                      videoUrl="https://www.youtube.com/embed/np8JsawzGGI?si=HqC3p0a4Ufjyb5LN"
                      videoWidth={1920}
                      videoHeight={1080}
                    />
                  </div>
                </div>

                <div data-aos="fade-left" data-aos-delay="400">
                  <Card className="mx-auto max-w-6xl p-8 sm:p-12  shadow-sm text-center sm:text-left">
                    <img
                      src="/images/logo.png"
                      alt="logo"
                      className="mx-auto logo-pulse pb-10 w-46 h-28"
                    />
                    <header>
                      <div className="h2 font-normal text-2xl lg:text-3xl mb-2  text-slate-400">
                        <Link
                          href="https://youtu.be/np8JsawzGGI?si=GVDedkxAy8mfX5Zk"
                          className="hover:text-gray-100 transition duration-150 ease-in-out "
                        >
                          Long Covid - how to restore wellbeing with Ayurveda in
                          the UK and Europe
                        </Link>
                        <br />
                      </div>
                    </header>
                    <br />
                    <p className="text-lg text-gray-400 grow">
                      Back by popular demand, Dr Prathima Nagesh MD (Ayu) based
                      in the London area. This time on love ayurveda tv, she
                      will discuss her experience of caring for Long Covid
                      sufferers in the UK and Europe with Ayurveda and Yoga. Dr
                      Nagesh will present two case studies and share some advice
                      to help you deal with some of the wide range of symptoms
                      that are being reported from extreme fatigue to
                      breathlessness, muscle ache and more. <br /> <br /> This
                      will be the last FREE love ayurveda tv live talks with the
                      experts for now. Hopefully we will return in the Autumn.
                      Don’t miss this event. Tickets are limited, book your
                      place now!
                    </p>
                  </Card>
                </div>
              </div>
            </div>

            {/*  Articles list */}
            <div className="max-w-sm mx-auto md:max-w-none">
              {/*  Section title */}
              <div
                className=" py-12  border-t border-gray-400 font-normal text-2xl lg:text-3xl  text-slate-400"
                data-aos="fade-up"
              >
                latest talks from love ayurveda tv
              </div>

              {/*  Articles container */}
              <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start py-4">
                <div className="relative  pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                  <div className="w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out">
                    <ModalVideo
                      thumb={VideoThumb2}
                      thumbWidth={540}
                      thumbHeight={303}
                      thumbAlt="Modal video thumbnail"
                      videoUrl="https://www.youtube.com/embed/np8JsawzGGI?si=HqC3p0a4Ufjyb5LN"
                      videoWidth={1920}
                      videoHeight={1080}
                    />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xl text-slate-400">Talk Title</h3>
                    <p className="text-gray-500 mt-2">
                      Description or any other information about the talk goes
                      here.
                    </p>
                  </div>
                </div>

                <div className="relative md:mt-0 -mt-40 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                  <div className="w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out">
                    <ModalVideo
                      thumb={VideoThumb5}
                      thumbWidth={540}
                      thumbHeight={303}
                      thumbAlt="Modal video thumbnail"
                      videoUrl="https://www.youtube.com/embed/np8JsawzGGI?si=HqC3p0a4Ufjyb5LN"
                      videoWidth={1920}
                      videoHeight={1080}
                    />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xl text-slate-400">Talk Title</h3>
                    <p className="text-gray-500 mt-2">
                      Description or any other information about the talk goes
                      here.
                    </p>
                  </div>
                </div>

                <div className="relative md:mt-0 -mt-40 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                  <div className="w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out">
                    <ModalVideo
                      thumb={VideoThumb6}
                      thumbWidth={540}
                      thumbHeight={303}
                      thumbAlt="Modal video thumbnail"
                      videoUrl="https://www.youtube.com/embed/np8JsawzGGI?si=HqC3p0a4Ufjyb5LN"
                      videoWidth={1920}
                      videoHeight={1080}
                    />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xl text-slate-400">Talk Title</h3>
                    <p className="text-gray-500 mt-2">
                      Description or any other information about the talk goes
                      here.
                    </p>
                  </div>
                </div>
                <div className="relative -mt-40 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                  <div className="w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out">
                    <ModalVideo
                      thumb={VideoThumb3}
                      thumbWidth={540}
                      thumbHeight={303}
                      thumbAlt="Modal video thumbnail"
                      videoUrl="https://www.youtube.com/embed/np8JsawzGGI?si=HqC3p0a4Ufjyb5LN"
                      videoWidth={1920}
                      videoHeight={1080}
                    />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xl text-slate-400">Talk Title</h3>
                    <p className="text-gray-500 mt-2">
                      Description or any other information about the talk goes
                      here.
                    </p>
                  </div>
                </div>
                <div className="relative -mt-40 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                  <div className="w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out">
                    <ModalVideo
                      thumb={VideoThumb4}
                      thumbWidth={540}
                      thumbHeight={303}
                      thumbAlt="Modal video thumbnail"
                      videoUrl="https://www.youtube.com/embed/np8JsawzGGI?si=HqC3p0a4Ufjyb5LN"
                      videoWidth={1920}
                      videoHeight={1080}
                    />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xl text-slate-400">Talk Title</h3>
                    <p className="text-gray-500 mt-2">
                      Description or any other information about the talk goes
                      here.
                    </p>
                  </div>
                </div>
                <div className="relative -mt-40 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                  <div className="w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out">
                    <ModalVideo
                      thumb={VideoThumb7}
                      thumbWidth={540}
                      thumbHeight={303}
                      thumbAlt="Modal video thumbnail"
                      videoUrl="https://www.youtube.com/embed/np8JsawzGGI?si=HqC3p0a4Ufjyb5LN"
                      videoWidth={1920}
                      videoHeight={1080}
                    />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xl text-slate-400">Talk Title</h3>
                    <p className="text-gray-500 mt-2">
                      Description or any other information about the talk goes
                      here.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*  Pagination */}
            {/* <nav
              className="flex justify-center pt-16"
              role="navigation"
              aria-label="Pagination Navigation"
            >
              <ul className="inline-flex flex-wrap font-medium text-sm -m-1">
                <li className="m-1">
                  <span className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-4 rounded-full text-gray-500">
                    Prev
                  </span>
                </li>
                <li className="m-1">
                  <Link
                    href="#"
                    className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-fuchsia-700 transition-colors duration-150 ease-in-out"
                  >
                    1
                  </Link>
                </li>
                <li className="m-1">
                  <Link
                    href="#"
                    className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-fuchsia-700 transition-colors duration-150 ease-in-out"
                  >
                    2
                  </Link>
                </li>
                <li className="m-1">
                  <Link
                    href="#"
                    className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-fuchsia-700 transition-colors duration-150 ease-in-out"
                  >
                    3
                  </Link>
                </li>
                <li className="m-1">
                  <span className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-500">
                    ...
                  </span>
                </li>
                <li className="m-1">
                  <Link
                    href="#"
                    className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-fuchsia-700 transition-colors duration-150 ease-in-out"
                  >
                    12
                  </Link>
                </li>
                <li className="m-1">
                  <Link
                    href="#"
                    className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-4 rounded-full text-gray-300 hover:bg-fuchsia-700 transition-colors duration-150 ease-in-out"
                  >
                    Next
                  </Link>
                </li>
              </ul>
            </nav> */}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
