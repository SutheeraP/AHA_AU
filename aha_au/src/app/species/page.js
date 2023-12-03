import React from "react";
import Navbar from "../component/Navbar";
import GreenBlur from "../component/GreenBlur";
import Footer from "../component/Footer";
import { Kanit } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";
import Cardtoggle from "../component/Cardtoggle";
const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "600", "700"],
});

export default function page() {
  const content = [
    {
      label: "สิ่งมีชีวิตจากโลกมนุษย์",
      info: "มนุษย์ถือเป็นเผ่าพันธุ์ที่ ‘อ่อนแอ’ และค่อนข้าง ‘รักสงบ’ ในสายตาของสิ่งมีชีวิตอื่น แต่สำหรับมนุษย์บางกลุ่ม พวกเขาพิเศษกว่านั้นมาก คนบางกลุ่มมีพรสวรรค์ที่เรียกได้ว่าเหนือธรรมชาติ แต่สำหรับคนบางกลุ่มมันเหมือนกับคำสาปที่ทำให้พวกเขากลายเป็นตัวประหลาดมากกว่า  มนุษย์ที่ได้รับเชิญเข้าร่วม Apex Heroic Academy จะต้องมีความพิเศษทางด้านกายภาพ หรือ ทางจิตใจ บางคนอาจติดตัวมาตั้งแต่กำเนิดหรือถูกเทคโนโลยีปัจจุบันแต่งเติมเอาทีหลัง",
      path: "/species/human",
      img: "",
      islink: true,
      isflip: false,
    },
    {
      label: "สิ่งมีชีวิตหลังความตาย ",
      info: "การมีอยู่ของโลกหลังความตายเป็นที่ถกเถียงกันมานานกว่าพันปี สิ่งเหล่านี้ไม่เคยได้รับการพิสูจน์จนกระทั่งประตูมิติถูกเปิดออก คนทั้งโลกจึงได้เห็นถึงความสวยงามและความโสมมของสองสถานที่ที่เคยถูกเขียนบนตำราทางศาสนานับร้อยเล่ม ‘นรก’ และ ‘สวรรค์’ ",
      path: "/species/afterdeath",
      img: "",
      islink: true,
      isflip: true,
    },{
      label: "สิ่งมีชีวิตเวทมนต์",
      info: "สัตว์มีชีวิตเวทมนต์มักพบในตำนานเทพนิยาย นิทานพื้นบ้าน และวรรณกรรมแฟนตาซี มีพลังหรือลักษณะพิเศษเหนือธรรมชาติที่ทำให้พวกมันแตกต่างจากโลกปกติ สิ่งมีชีวิตเหล่านี้มีทั้งฝ่ายดีและฝ่ายร้าย และขึ้นชื่อในเรื่องความสามารถในการแสดงสิ่งเหนือมนุษย์",
      path: "/species/magic",
      img: "",
      islink: true,
      isflip: false,
    },
    {
      label: "สิ่งมีชีวิตจากต่างดาว",
      info: "กลุ่มคนเหล่านี้ถูกนิยามจนติดปากว่า ‘เอเลี่ยน’ โดยทั่วไปหมายถึงสิ่งมีชีวิตนอกโลกหรือสิ่งมีชีวิตที่กำเนิดจากตำแหน่งนอกโลก สามารถอ้างอิงจากดวงดาวที่ปรากฎอยู่จริง หรือจะสมมุตชื่อจักรวาล ดวงดาว หรือสถานที่นอกโลกต่างๆขึ้นเองได้ สตอรี่การลงมาเยือนบนโลกมนุษย์ไม่บังคับว่าจะต้องมาตั้งแต่สมัยไหน หรือวิธีการเป็นอย่างไร",
      path: "/species/alien",
      img: "",
      islink: false,
      isflip: true,
    },
    
  ];
  return (
    <main className="bg-secondary-400 text-white w-full relative overflow-hidden">
      <div className="absolute left-[-200px] top-[-200px]">
        <GreenBlur />
      </div>
      <div className="absolute right-[-200px] top-[200px]">
        <GreenBlur />
      </div>
      <Navbar />

      <div className={kanit.className}>
        <div className="container mx-auto px-4 text-xs md:text-sm font-light text-center">
          <div className="flex min-h-screen">
            <div className="m-auto flex flex-col gap-48">
              <div className="flex justify-center">
                <div className="md:w-4/5">
                  หลายศตวรรษที่ผ่านมาบนโลกมีสิ่งมีชีวิตมากมายที่อาศัยอยู่นอกเหนือจาก
                  ‘มนุษย์’ พวกเขาปะปน
                  แอบแฝงและใช้ชีวิตอยู่ในสังคมโดยไม่ให้ใครรู้ถึงความพิเศษเหล่านั้น
                  แต่เมื่อถึงคราวที่ ‘บ้าน’ ที่อาศัยอยู่ถูกรุกราน
                  กลุ่มคนเหล่านั้นจะก้าวออกมาและปราบปรามอันตรายที่กำลังคืบคลานเข้ามา
                </div>
              </div>

              <div className="">สิ่งมีชีวิตจากมิติทั้ง 4</div>
            </div>
          </div>

          <div className="flex flex-col gap-48 md:text-left">
            {content.map((item) => (
              <div key={item.label}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div
                    className={`${
                      item.isflip ? "md:order-last" : ""
                    } flex justify-center`}
                  >
                    <Image alt="greenblur" src="./greenblur.svg" width={200} height={200} />
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="text-lg font-semibold tracking-wider">
                      {item.label}
                    </div>
                    <div className="">{item.info}</div>
                    {item.islink && (
                      <div className="flex justify-center md:justify-start text-xs">
                        <Link href={item.path}>
                          <div className="rounded-full border border-primary text-primary py-1 px-14 w-fit">
                            เพิ่มเติม
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-48 flex flex-col gap-4 text-start font-normal">
            <Cardtoggle
            icon="./sample-class.svg"
            label="การเป็นลูกผสมระหว่างเผ่าพันธุ์"
            data="อนุญาตให้ทำได้, สามารถมีรูปร่าง รวมถึงพลังวิเศษจากแต่ละเผ่าได้ ขึ้นอยู่กับการออกแบบตัวละครของผู้เล่นเอง"
          />
            <Cardtoggle
            icon="./sample-class.svg"
            label="เผ่าพันธุ์นอกเหนือจากสี่มิติที่กล่าวมา"
            data={(<div>
              สิ่งมีชีวิตบนโลกมนุษย์, สิ่งมีชีวิตจากโลกหลังความตาย, สิ่งมีชีวิตจากต่างดาว, และสิ่งมีชีวิตเวทมนต์ถือว่าเป็นขอบเขตที่กว้างมาก และอยากให้ทุกคนสร้างสรรค์ตัวละครให้อยู่ภายใต้เซ็ทติ้งที่กำหนดให้ หากเป็นสิ่งมีชีวิตที่ไม่ได้อยู่ในรูปแบบของมนุษย์ อาทิ มังกร ยูนิคอร์น หรืองู สามารถทำได้ แต่ตัวละครนั้น ๆ จะต้องมีร่างกายของมนุษย์ ด้วย
              <br></br>
              <br></br>หากไม่มั่นใจว่าคาร์แรคเตอร์ของตัวเองหลุดธีมหรือไม่สามารถสอบถามได้
            </div>)}
          />
          </div>
          
        </div>
      </div>

      <Footer />
    </main>
  );
}
