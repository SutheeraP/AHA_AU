"use client";

import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Bars2Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNav = () => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="fixed top-0 z-10  sm:mt-4 w-full">
        <div className="container bg-secondary-200 backdrop-blur-sm mx-auto px-4 sm:px-6 lg:px-8 sm:rounded-lg">
          <div className="flex items-center justify-between h-12">
            
            {/* logo part */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="">
                  LOGO
                </Link>
              </div>
            </div>

            {/* pc nav item middle */}
            <div className="hidden md:block">
              <div className="ml-4 item-center space-x-4">
                <Link
                  href="/courses"
                  className="hover:text-primary rounded-full py-1 px-4"
                >
                  Courses
                </Link>
                <Link
                  href="/places"
                  className="hover:text-primary rounded-full py-1 px-4"
                >
                  Places
                </Link>
                <Link
                  href="/species"
                  className="hover:text-primary rounded-full py-1 px-4"
                >
                  Species
                </Link>
                <Link
                  href="/mission"
                  className="hover:text-primary rounded-full py-1 px-4"
                >
                  Mission
                </Link>
                <Link
                  href="/rulespage"
                  className="hover:text-primary rounded-full py-1 px-4"
                >
                  Rules
                </Link>
                
              </div>
            </div>

            {/* pc join right */}
            <div className="hidden md:block">
            <Link
                  href="/join"
                  className="hover:text-primary rounded-full py-1 px-4"
                >
                  Join
                </Link>
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

        {/* add screen if mobile */}
        {isClick && (
          <div className="md:hidden">
            <div className="h-screen bg-secondary-400 fixed top-0 w-full text-xl font-semibold">
                <div className="flex justify-end mt-4 mr-6">
                    <XMarkIcon className="h-6 w-6" onClick={toggleNav}/>
                </div>
              
              <Link
                href="/"
                className="hover:text-primary  block rounded-full py-3 px-4 ml-12 mt-12"
              >
                Home
              </Link>
              <Link
                href="/courses"
                className="hover:text-primary  block rounded-full py-3 px-4 ml-12"
              >
                Courses
              </Link>
              <Link
                href="/places"
                className="hover:text-primary  block rounded-full py-3 px-4 ml-12"
              >
                Places
              </Link>
              <Link
                href="/species"
                className="hover:text-primary  block rounded-full py-3 px-4 ml-12"
              >
                Species
              </Link>
              <Link
                href="/mission"
                className="hover:text-primary  block rounded-full py-3 px-4 ml-12"
              >
                Mission
              </Link>
              <Link
                href="/rulespage"
                className="hover:text-primary  block rounded-full py-3 px-4 ml-12"
              >
                Rules
              </Link>
              <Link
                href="/join"
                className="hover:text-primary  block rounded-full py-3 px-4 ml-12"
              >
                Join
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
