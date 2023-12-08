"use client";

import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Bars2Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const path1 = usePathname().split("/");
  const path = "/" + path1[1];
  const [isClick, setisClick] = useState(false);

  const toggleNav = () => {
    setisClick(!isClick);
  };

  const navLink = [
    {
      id: "Home",
      link: "/",
    },
    {
      id: "Courses",
      link: "/courses",
    },
    {
      id: "Places",
      link: "/places",
    },
    {
      id: "Uniform",
      link: "/uniform",
    },
    {
      id: "Species",
      link: "/species",
    },
    {
      id: "Mission",
      link: "/mission",
    },
    {
      id: "Rules",
      link: "/rulespage",
    },
    {
      id: "Join",
      link: "/join",
    },
  ];

  return (
    <>
      <nav className="fixed top-[-1px] w-full max-w-screen-xl sm:mt-4 z-50">
        <div className="bg-secondary-200 container backdrop-blur-sm mx-auto px-4 sm:px-6 lg:px-8 sm:rounded-lg shadow-md md:shadow-lg shadow-emerald-500/10 md:shadow-stone-900/30">
          <div className="flex items-center justify-between h-12 text-xs">
            
            {/* logo part */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="font-bold text-base">
                  <Image src='/logo.svg' width={30} height={20}/>
                </Link>
              </div>
            </div>

            {/* pc nav item middle */}
            <div className="hidden md:block">
              <div className="item-center space-x-4">
                {navLink
                  .filter((item, index) => index < 7 && index > 0)
                  .map(({ id, link }) => (
                    <Link
                      key={id}
                      href={link}
                      className={`${
                        path === link ? "font-bold" : ""
                      } hover:text-primary rounded-full py-1 px-4`}
                    >
                      {id}
                    </Link>
                  ))}
              </div>
            </div>

            {/* pc join right */}
            <div className="hidden md:block">
              {navLink
                .filter((item, index) => index == 7)
                .map(({ id, link }) => (
                  <Link
                    key={id}
                    href={link}
                    className={`${
                      path === link ? "font-bold" : ""
                    } hover:text-primary rounded-full py-1 px-4`}
                  >
                    {id}
                  </Link>
                ))}
            </div>

            {/* mobile nav item */}
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 onclick"
                onClick={toggleNav}
              >
                {isClick ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars2Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* mobile content */}
        {isClick && (
          <div className="md:hidden">
            <div className="h-screen bg-secondary-400 fixed top-0 w-full text-xl font-semibold">
              <div className="flex justify-end mt-4 mr-6 mb-12">
                <XMarkIcon className="h-6 w-6" onClick={toggleNav} />
              </div>
              {navLink.map(({ id, link }) => (
                <Link
                  key={id}
                  href={link}
                  className={`${
                    path === link ? "text-primary" : ""
                  } hover:text-primary  block rounded-full py-3 px-4 ml-12`}
                >
                  {id}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
