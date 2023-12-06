import Image from "next/image";
import React from "react";
import { Kanit } from "@next/font/google";
const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "600", "700"],
});

const Contentuniform = () => {
  const firstsection = [
    {
      id: 1,
      label: "PIN",
      content: (
        <div className=" grid grid-cols-1 md:grid-cols-2 py-8 gap-8 relative">
          <div className="flex justify-center">
            <Image
              src="./logo.svg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "60%", height: "auto" }} // optional
            />
          </div>
          <div className="flex m-auto md:mx-0 text-center md:text-left">
            เข็มกลัดตราโรงเรียน <br></br>ต้องติดบนอกซ้ายทุกครั้ง
          </div>
        </div>
      ),
    },
    {
      id: 2,
      label: "COLOR THEME",
      content: (
        <div>
          <div className="flex space-x-2 py-4">
            <div className="flex w-16 h-16 bg-[#CAD1DB] text-black text-xs rounded-full">
              <div className="m-auto">#CAD1DB</div>
            </div>
            <div className="flex w-16 h-16 bg-primary text-black text-xs rounded-full">
              <div className="m-auto">#1BB76C</div>
            </div>
            <div className="flex w-16 h-16 bg-[#253A33] text-white text-xs rounded-full">
              <div className="m-auto">#253A33</div>
            </div>
            <div className="flex w-16 h-16 bg-[#222325] text-white text-xs rounded-full">
              <div className="m-auto">#222325</div>
            </div>
          </div>
          <div className="">
            ในด้านการแต่งกายจะใช้สีเขียวเข้มและสีดำเป็นสีหลัก
            โดยนักเรียนสามารถปรับแต่งเครื่องแต่งกายตามตัวตนได้{" "}
            <span className="underline underline-offset-2">
              แต่ต้องอยู่ในธีมสีที่กำหนด และเหมาะกับสถานศึกษา
            </span>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen bg-secondary-400 py-32 w-full">
      <div className="container px-4 mx-auto ">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm md:tex-base font-light">
            {firstsection.map((item) => (
              <div key={item.id}>
                <div className="text-lg md:text-xl font-bold tracking-wider border-b  border-primary pb-4">
                  {item.label}
                </div>
                <div className={kanit.className}>{item.content}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-lg md:text-xl font-bold tracking-wider border-b  border-primary pb-4 py-32">
        UNIFORM
        </div>
        
      </div>
    </div>
  );
};

export default Contentuniform;
