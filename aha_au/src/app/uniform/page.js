"use client";

import React from "react";
import Navbar from "../component/Navbar";
import GreenBlur from "../component/GreenBlur";
import Footer from "../component/Footer";
import Herouniform from "./Herouniform";
import Contentuniform from "./Contentuniform";

export default function page() {
  return (
    <main className="bg-secondary-400 text-white w-full relative overflow-hidden">
      <div className="">
          <Herouniform />
        </div>
      <div className="max-w-screen-xl mx-auto relative">
        <Navbar />

        {/* <div className="sticky top-0 z-0"> */}
        
        <div className="relative bg-secondary-400 w-full">
          <div className="absolute left-[-200px] top-[0px] z-0">
            <GreenBlur />
          </div>
          <div className="absolute right-[0px] bottom-[0px] z-0">
            <GreenBlur />
          </div>
          <Contentuniform />

          <Footer />
        </div>
      </div>
    </main>
  );
}
