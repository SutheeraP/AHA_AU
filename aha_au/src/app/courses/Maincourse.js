import React from "react";
import Navbar from "../component/Navbar";
import GreenBlur from "../component/GreenBlur";
import Navcourse from "./Navcourse";
import { Kanit } from "@next/font/google";
import Footer from "../component/Footer";
const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "600", "700"],
});

const Maincourse = ({content}) => {
  return (
    <main className="bg-secondary-400 text-white w-full min-h-screen">
      <div className="absolute left-[-200px] top-[-200px]">
        <GreenBlur />
      </div>
      <Navbar />

      <div className="md:hidden">
        <Navcourse />
      </div>

      {/* content */}
      <div className={kanit.className}>
        <div className="relative py-24 container mx-auto px-4">
          <div className="md:grid md:grid-cols-12">
            <div className="hidden md:grid md:col-span-2">
              <Navcourse />
            </div>

            <div className="md:col-span-10">
              {content ? content : 'no content'}
              what the fuck
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <Footer />
      </div>
    </main>
  )
}

export default Maincourse