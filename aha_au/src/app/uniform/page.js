import React from "react";
import Navbar from "../component/Navbar";
import GreenBlur from "../component/GreenBlur";
import Footer from "../component/Footer";
import Herouniform from "./Herouniform";
import Contentuniform from "./Contentuniform";

export default function page() {
  return (
    <main className="bg-secondary-400 text-white w-full relative">
      <Navbar />

      <div className="sticky top-0 z-0">
        <Herouniform />
      </div>
      <div className="relative bg-secondary-400 overflow-hidden w-full">
        {/* <div className="absolute left-[-200px] top-[-200px] z-0">
          <GreenBlur />
        </div>
        <div className="absolute right-[-200px] top-[500px] z-0">
          <GreenBlur />
        </div> */}
        <Contentuniform />
        <Footer />
      </div>
    </main>
  );
}
