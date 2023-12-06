import React from "react";
import Navbar from "../component/Navbar";
import GreenBlur from "../component/GreenBlur";
import Footer from "../component/Footer";


import { Kanit } from "@next/font/google";
import Herouniform from "./Herouniform";
const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "600", "700"],
});

export default function page() {
  const joinnav = [
    {
      label: "การรับสมัครนักเรียน",
      icon: "./join-register.svg",
      path: "/join/register",
    },
    {
      label: "วิธีเล่นและข้อตกลง",
      icon: "./join-terms.svg",
      path: "/join/terms",
    },
    {
      label: "เกณฑ์การสร้างตัวละคร",
      icon: "./join-creator.svg",
      path: "/join/creator",
    },
  ];
  return (
    <main className="bg-secondary-400 text-white w-full relative overflow-hidden">
      <div className="absolute left-[-200px] top-[-200px] z-0">
        <GreenBlur />
      </div>
      <div className="absolute right-[-200px] top-[500px] z-0">
        <GreenBlur />
      </div>

      <Navbar />

      <Herouniform/>
      <div className={kanit.className}>
        <div className="min-h-screen flex container mx-auto px-4 relative">
        
        </div>
      </div>

      <Footer />
    </main>
  );
}
