'use client';

import { useRef, useState, useEffect } from 'react';

import Image from 'next/legacy/image';
import { Transition } from '@headlessui/react';
import TabsImage01 from '@/public/images/tabs-image-01.jpg';
import HeroImage01 from '@/public/images/hero-image-01.jpg';
import { Button } from '@material-tailwind/react';

export default function NewsEvents() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-10 md:py-16 border-t border-gray-400">
          {/* Section header */}
          <div className="max-w-6xl mx-auto text-center pb-16 sm:pb-12">
            <h1
              className="h1  sm:pb-8 pb-0 text-3xl sm:text-6xl text-slate-400 font-extralight  "
              data-aos="fade-up"
            >
              latest news and events
            </h1>
            <p
              className="text-xl text-gray-400"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-tabs]"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugit
              ea, deserunt rem, cupiditate quibusdam dolores debitis distinctio
              placeat non earum impedit beatae sint nam quae ab libero magnam
              minus accusantium maiores nesciunt? Quae accusantium officiis,
              omnis voluptatibus minus veniam, pariatur eligendi nihil magnam,
              harum optio repellat eaque saepe necessitatibus.
            </p>
          </div>

          {/* Section content */}
          <div>
            {/* Tabs buttons */}
            <div className="flex flex-wrap justify-center -m-2"></div>
            <div className="max-w-s mx-auto sm:max-w-none sm:flex sm:justify-center ">
              <div data-aos="fade-up" data-aos-delay="400">
                <Button
                  className="btn text-white text-lg bg-green-600 hover:bg-green-700 w-full mb-4 sm:w-auto sm:mb-0 group transition duration-50 px-11"
                  onClick={() => setTab(1)}
                >
                  Events
                </Button>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <Button
                  className="btn text-white text-lg bg-fuchsia-700 hover:bg-fuchsia-800 w-full sm:w-auto sm:ml-4 px-12"
                  onClick={() => setTab(2)}
                >
                  News
                </Button>
              </div>
            </div>

            {/* Tabs items */}
            <div className="transition-all">
              <div
                className="relative flex flex-col mt-16"
                data-aos="fade-up"
                ref={tabs}
              >
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <div className="flex flex-col md:flex-row max-w-md mx-auto md:max-w-none">
                    <div className="flex-1 relative mb-0 md:mb-0 min-h-[400px] md:h-[400px]">
                      <Image
                        className="object-cover w-full"
                        src={TabsImage01}
                        layout="fill"
                        alt="Tabs 01"
                      />
                    </div>
                    <div className="flex-1 relative bg-gray-800  flex flex-col justify-between md:h-[400px]">
                      <p className="text-lg text-gray-400  pb-0 p-20">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                    </div>
                  </div>
                  <div>
                    <Button className=" text-white text-lg bg-green-600 hover:bg-green-700 w-full mx-auto">
                      <span>Upcoming events</span>
                    </Button>
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <div className="flex flex-col md:flex-row max-w-md mx-auto md:max-w-none">
                    <div className="flex-1 relative bg-gray-800 flex flex-col justify-between md:h-[400px]">
                      <p className="text-lg text-gray-400 pb-0 p-20">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                    </div>
                    <div className="flex-1 relative mb-0 md:mb-0 min-h-[400px] md:h-[400px]">
                      <Image
                        className="object-cover w-full"
                        src={HeroImage01}
                        layout="fill"
                        alt="Tabs 02"
                      />
                    </div>
                  </div>
                  <div>
                    <Button className=" text-white text-lg bg-fuchsia-600 hover:bg-fuchsia-700 w-full mx-auto">
                      <span >Latest news</span>
                    </Button>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
