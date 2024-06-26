import React from "react";
import Navbar from "../component/Navbar";
import GreenBlur from "../component/GreenBlur";
import Navcourse from "./Navcourse";
import { Kanit } from "@next/font/google";
import Footer from "../component/Footer";
const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "600", "700", "100", "200"],
});

const Maincourse = ({ content }) => {
  return (
    <main className="bg-secondary-400 text-white w-full min-h-dvh overflow-hidden relative">
      <div className="max-w-screen-xl mx-auto relative">
        <div className="absolute left-[-200px] top-[-200px]">
          <GreenBlur />
        </div>
        <div className="absolute left-[-200px] top-[1500px]">
          <GreenBlur />
        </div>
        <div className="absolute right-[-200px] md:right-[0px] top-[800px]">
          <GreenBlur />
        </div>
        <Navbar />

        <div className="md:hidden">
          <Navcourse />
        </div>

        {/* content */}
        <div className={kanit.className}>
          <div className="relative pt-24 pb-24 md:pb-0 container mx-auto px-4">
            <div className="md:grid md:grid-cols-12 gap-16">
              <div className="hidden md:grid md:col-span-2">
                <Navcourse />
              </div>

              <div className="md:col-span-10">
                {content ? content : "no content"}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Maincourse;
