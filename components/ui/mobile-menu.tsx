'use client';

import { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="inline-flex md:hidden">
      {/* Mobile lights switch */}

      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-900 hover:text-gray-900 dark:text-slate-700 dark:hover:text-gray-100 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/* Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="fixed top-0 h-screen z-20 left-0 w-full  max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg no-scrollbar"
          enter="transition ease-out duration-700 transform"
          enterFrom="opacity-0 -translate-x-full"
          enterTo="opacity-100 translate-x-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="py-6 pr-4 pl-20 items-center">
            <img
              src="/images/logo.png"
              alt="logo"
              className="mx-auto logo-pulse pb-10 w-28 h-24"
            />
            {/* Links */}
            <ul className="">
              <li>
                <Link
                  href="/"
                  className="flex text-slate-700 hover:text-gray-200 py-2 dark:text-slate-700 dark:hover:text-gray-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex text-slate-700 hover:text-gray-200 py-2 dark:text-slate-700 dark:hover:text-gray-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/talks"
                  className="flex text-slate-700 hover:text-gray-200 py-2 dark:text-slate-700 dark:hover:text-gray-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Talks
                </Link>
              </li>
              <li>
                <Link
                  href="/talks"
                  className="flex text-slate-700 hover:text-gray-200 py-2 dark:text-slate-700 dark:hover:text-gray-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/clinic"
                  className="flex text-slate-700 hover:text-gray-200 py-2 dark:text-slate-700 dark:hover:text-gray-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Clinic
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex text-slate-700 hover:text-gray-200 py-2 dark:text-slate-700 dark:hover:text-gray-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  );
}
