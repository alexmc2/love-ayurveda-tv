'use client';
import Image from 'next/image';
import logo from '@/public/images/logo.png';

import { Typography, Card, Button } from '@material-tailwind/react';

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:pt-12 md:pb-12 border-t border-gray-300">
          {/* Items */}
          <div className="grid gap-20" data-aos-id-features-home>
            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}

              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6  md:order-1"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-features-home]"
              >
                <div className="relative">
                  <Image
                    className=" logo-pulse"
                    src={logo}
                    width={540}
                    height={520}
                    alt="Features illustration"
                  />
                </div>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 "
                data-aos="fade-right"
                data-aos-anchor="[data-aos-id-features-home]"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className=" text-3xl text-fuchsia-700 mb-2 text-center ">
                    Lorem ipsum dolor sit amet!
                  </div>

                  <Card className="mx-auto max-w-5xl p-8 sm:p-10 mt-8 shadow-sm text-center ">
                    <Typography
                      className="text-lg sm:text-lg text-slate-500  "
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa.<br></br>
                      <br></br>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ducimus amet minus praesentium alias id vitae illo itaque
                      velit, similique esse, necessitatibus, doloremque ea!
                      Reprehenderit obcaecati nostrum labore veniam delectus
                      nisi?
                    </Typography>
                  </Card>
                  <div className="max-w-s mx-auto sm:max-w-none sm:flex justify-center py-6">
                    <div data-aos="fade-up" data-aos-delay="400">
                      <Button
                        className="btn text-white text-lg bg-green-600 hover:bg-green-700 w-full  sm:w-auto "
                        href="#0"
                      >
                        Join us LIVE on ZOOM
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
