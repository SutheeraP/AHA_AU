"use client";

import React, { useState } from "react";
import {XMarkIcon} from "@heroicons/react/24/solid"
import {Bars2Icon} from "@heroicons/react/24/solid"

const Navbar = () => {
    const [isClick, setisClick] = useState(false);

    const toggleNav = () => {
        setisClick(!isClick)
    }

  return (
    <>
      <nav className="bg-secondary-200 fixed top-0 w-full backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* logo part */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="">
                  Logo
                </a>
              </div>
            </div>

            {/* pc nav item */}
            <div className="hidden md:block">
              <div className="ml-4 item-center space-x-4">
                <a
                  href="/"
                  className="hover:bg-primary hover:text-black rounded-full py-1 px-4"
                >
                  Courses
                </a>
                <a
                  href="/"
                  className="hover:bg-primary hover:text-black rounded-full py-1 px-4"
                >
                  Places
                </a>
                <a
                  href="/"
                  className="hover:bg-primary hover:text-black rounded-full py-1 px-4"
                >
                  Species
                </a>
                <a
                  href="/"
                  className="hover:bg-primary hover:text-black rounded-full py-1 px-4"
                >
                  Mission
                </a>
                <a
                  href="/"
                  className="hover:bg-primary hover:text-black rounded-full py-1 px-4"
                >
                  Rules
                </a>
                <a
                  href="/"
                  className="hover:bg-primary hover:text-black rounded-full py-1 px-4"
                >
                  Join
                </a>
              </div>
            </div>

            {/* mobile nav item */}
            <div className="md:hidden flex items-center">
                <button className="inline-flex items-center justify-center p-2 onclick" onClick={toggleNav}>
                    {isClick ? (<XMarkIcon className="h-6 w-6"/>) : (<Bars2Icon className="h-6 w-6"/>)}
                </button>
            </div>
          </div>
        </div>
        {isClick && (
            <div className="md:hidden">
                <div className="h-screen bg-secondary-400">
                <a
                  href="/"
                  className="hover:bg-primary hover:text-black block rounded-full py-1 px-4"
                >
                  Courses
                </a>
                <a
                  href="/"
                  className="hover:bg-primary hover:text-black block rounded-full py-1 px-4"
                >
                  Places
                </a>
                <a
                  href="/"
                  className="hover:bg-primary hover:text-black block rounded-full py-1 px-4"
                >
                  Species
                </a>
                <a
                  href="/"
                  className="hover:bg-primary hover:text-black block rounded-full py-1 px-4"
                >
                  Mission
                </a>
                <a
                  href="/"
                  className="hover:bg-primary hover:text-black block rounded-full py-1 px-4"
                >
                  Rules
                </a>
                <a
                  href="/"
                  className="hover:bg-primary hover:text-black block rounded-full py-1 px-4"
                >
                  Join
                </a>
                </div>
            </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
