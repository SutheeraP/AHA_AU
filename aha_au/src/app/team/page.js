import React from "react";
import Navbar from "../component/Navbar";
import GreenBlur from "../component/GreenBlur";
import { Kanit } from "@next/font/google";
import Footer from "../component/Footer";
import StarsCanvas from "../component/StarComponent";
import Link from "next/link";
const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "600", "700", "100", "200"],
});

const page = () => {
  const staff = [
    {
      name: "Anonymous Hero",
      job: "CONTENT CREATOR",
      img: "bg-[url('../../public/staff1.jpg')]",
      path:'',
    },
    {
      name: "Sutheerap",
      job: "WEBSITE DEVELOPER",
      img: "bg-[url('../../public/staff2.jpg')]",
      path:'',
    },
    {
      name: "Lotte",
      job: "ILLUSTRATOR",
      img: "bg-[url('../../public/staff3.jpg')]",
      path:'https://lotte3rt.carrd.co/',
    },
    {
      name: "Facee Hee",
      job: "ILLUSTRATOR",
      img: "bg-[url('../../public/staff4.jpg')]",
      path:'https://www.facebook.com/FaceHee555',
    },
  ];
  return (
    <main className="bg-secondary-400 text-white w-full relative overflow-hidden min-h-screen">
      <StarsCanvas />
      <div className="max-w-screen-xl mx-auto relative">
        <div className="absolute left-[-200px] top-[-200px]">
          <GreenBlur />
        </div>
        <div className="absolute left-[-200px] top-[1500px]">
          <GreenBlur />
        </div>
        <div className="absolute right-[-200px] top-[1000px]">
          <GreenBlur />
        </div>
        <Navbar />
        <div className={kanit.className}>
          <div className="min-h-screen flex container mx-auto">
            <div className="w-full">
              <div className="text-center text-3xl mt-32 mb-16">AHA TEAM</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 px-4 max-w-3xl mx-auto">
                {staff.map(({ name, job, img, path }) => (
                  <div key={name}>
                    {path != "" ? (
                      <Link href={path} target="_blank">
                        <div className={`w-full aspect-[4/5] mb-2 rounded-lg ${img} bg-no-repeat bg-cover bg-center`}></div>
                        <div>{name}</div>
                        <div className="text-faded font-light text-xs">
                          {job}
                        </div>
                      </Link>
                    ) : (
                      <div>
                        <div
                          className={`w-full aspect-[4/5] mb-2 rounded-lg ${img} bg-no-repeat bg-cover bg-center`}
                        ></div>
                        <div>{name}</div>
                        <div className="text-faded font-light text-xs">
                          {job}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <Footer />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
