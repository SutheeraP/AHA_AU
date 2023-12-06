import Image from "next/image";
import React from "react";
import { Kanit } from "@next/font/google";
import Link from "next/link";
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

  const uniformsectiob = [
    {
      id: 1,
      label: "SUIT",
      subhead: "ติดกระดุมครบ",
      detail: "จำเป็นต้องใส่ในการเข้าพิธีต่าง ๆ ในโรงเรียน",
      img: "bg-[url('../../public/02_suit-up.png')]",
    },
    {
      id: 2,
      label: "SUIT",
      subhead: "ปลดหระดุมคอ",
      detail:
        "ตัวสูทผลิตด้วยเทคโนโลยีล้ำสมัย สามารถกันความร้อนและความเย็นได้เป็นอย่างดี",
      img: "bg-[url('../../public/03_suit-down.png')]",
    },
    {
      id: 3,
      label: "WHITE SHIRT & TIE",
      subhead: "เชิ้ตขาวและไทด์",
      detail:
        "เสื้อเชิ้ตสามารถใส่ได้ทั้งแขนสั้นและแขนยาว ไทด์สามารถปรับเป็นโบว์หรือดีไซน์อื่นได้",
      img: "bg-[url('../../public/08_shirt.png')]",
    },
    {
      id: 4,
      label: "VEST",
      subhead: "เสื้อกั๊ก",
      detail: "",
      img: "bg-[url('../../public/06_vest.png')]",
    },
    {
      id: 5,
      label: "SWEATER VEST",
      subhead: "เสื้อกั๊กสเวตเตอร์",
      detail: "",
      img: "bg-[url('../../public/07_sweater.png')]",
    },
    {
      id: 6,
      label: "BOTTOMS",
      subhead: "ท่อนล่าง",
      detail:
        "ไม่จำกัดรูปแบบ เช่น กางเกงขาสั้น กางเกงขายาว กระโปรงพลีท กระโปรงทรงเอ และอื่น ๆ",
      img: "bg-[url('../../public/09_bottom.png')]",
    },
    {
      id: 7,
      label: "LETTERMAN JACKET",
      subhead: "front",
      detail: "",
      img: "bg-[url('../../public/04_jacket-front.png')]",
    },
    {
      id: 8,
      label: "LETTERMAN JACKET",
      subhead: "back",
      detail: "",
      img: "bg-[url('../../public/05_jacket-back.png')]",
    },
    {
      id: 9,
      label: "SHOES",
      subhead: "รองเท้า",
      detail: "หุ้มส้นเท้าและปลายเท้า ไม่จำกัดรูปแบบ ",
      img: "bg-[url('../../public/10_shoes.png')]",
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
        <div className="text-lg md:text-xl font-bold tracking-wider border-b  border-primary pb-4 pt-32">
          UNIFORM
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {uniformsectiob.map((item) => (
            <div className="text-center" key={item.id}>
              <div className="px-12 relative">
                <div className="absolute flex w-full h-full top-0 left-0 z-0">
                  <div className="m-auto border border-primary rounded-full w-60 h-60"></div>
                </div>
                <div
                  className={`${item.img} bg-no-repeat bg-cover bg-center w-full aspect-[2/3] relative`}
                ></div>
              </div>

              <div className="font-semibold text-lg tracking-wide">
                {item.label}
              </div>
              <div className={kanit.className}>
                <div className="text-xs md:text-sm text-faded mb-4">
                  {item.subhead}
                </div>
                <div className="text-xs md:text-sm font-light">
                  {item.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-lg md:text-xl font-bold tracking-wider border-b  border-primary pb-4 pt-32">
          CHEERLEADER
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <Image
            src="/11_cheer-girl.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
          />
          <Image
            src="/12_cheer-boy.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
          />
        </div>
        <div className={kanit.className}>
          <div className="w-full flex justify-center">
            <Link href='https://drive.google.com/drive/folders/1Nj1TgMDN3k1QAlMgKTOq7f1pvK51_Hav?usp=sharing' target="_blank"> 
            <div className="border border-primary w-fit text-primary py-1 px-6 rounded-full mt-48">
                Drive รูปภาพทั้งหมด
            </div>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contentuniform;
