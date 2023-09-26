'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';
import logo from '@/public/images/logo.png';
// import Dropdown from '@/components/utils/dropdown';
import MobileMenu from './mobile-menu';

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? 'bg-white backdrop-blur-sm shadow-lg' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 ">
          {/* Site branding */}
          <div className="flex flex-col items-center justify-center   ">
            <Link href="/">
              <div className="flex flex-col justify-center items-center  ">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className=" w-12 h-8 md:w-16 md:h-10 md:pt-1 "
                />
                <div className="sm:text-2xl text-xl font-extralight text-slate-400 hide-on-mobile ">
                  ayurveda
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Talks
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  News
                </Link>
              </li>
              {/* 1st level: hover */}
              {/* <Dropdown title="Resources"> */}
                {/* 2nd level: hover */}
                <li>
                  <Link
                    href="/documentation"
                    className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
                  >
                    Clinic
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/404"
                    className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
                  >
                    404
                  </Link>
                </li>
              {/* </Dropdown> */}
            </ul>

            {/* Desktop sign in links */}
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
