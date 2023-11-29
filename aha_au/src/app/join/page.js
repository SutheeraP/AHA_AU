import React from "react";
import Navbar from "../component/Navbar";
import GreenBlur from "../component/GreenBlur";
import Link from "next/link";
import Image from "next/image";
import Footer from "../component/Footer";

import { Kanit } from "@next/font/google";
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

      <Navbar />
      <div className={kanit.className}>
        <div className="min-h-screen flex container mx-auto px-4 relative z-10">
          <div className="my-auto w-full">
            <div className="grid md:grid-cols-3 gap-4">
              {joinnav.map((item) => (
                <Link key={item.label} href={item.path}>
                  <div className="bg-darklight-400 flex md:flex-col gap-4 rounded-2xl md:aspect-square h-full">
                    <div className="my-auto">
                      <div className="flex md:flex-col gap-4 py-4">
                        <Image
                          src={item.icon}
                          width={20}
                          height={20}
                          alt="join icon"
                          className="md:hidden"
                        />
                        <Image
                          src={item.icon}
                          width={60}
                          height={50}
                          alt="join icon"
                          className="md:flex hidden mx-auto"
                        />
                        <div className="md:text-center md:text-xl">{item.label}</div>
                        <div className="hidden md:block text-xs text-primary border py-1 text-center border-primary rounded-full w-2/5 mx-auto">
                          รายละเอียด
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <Link href='/join/implement'>
<div className="text-xs md:text-sm text-center text-faded mt-12 underline underline-offset-1 font-light hover:text-primary">
              สำหรับผู้ต้องการสานต่อ
            </div>
            </Link>
            
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
