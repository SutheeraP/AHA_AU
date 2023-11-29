import React from "react";
import Navbar from "../component/Navbar";
import GreenBlur from "../component/GreenBlur";
import Shopsection from "./Shopsection";
import Examplesection from "./Examplesection";
import Footer from "../component/Footer";

import { Kanit } from "@next/font/google";
const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "600", "700", "100", "200"],
});

export default function page() {
  return (
    <main className="bg-secondary-400 text-white w-full relative overflow-hidden">
      <div className="absolute left-[-200px] top-[-200px]">
        <GreenBlur />
      </div>
      <div className="absolute right-[-200px] md:right-[200px] top-[1000px]">
        <GreenBlur />
      </div>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className={kanit.className}>
          <Shopsection />
          <Examplesection />
        </div>
      </div>

      <Footer />
    </main>
  );
}
