import React from "react";
import Navbar from "../component/Navbar";
import GreenBlur from "../component/GreenBlur";
import Footer from "../component/Footer";
import { Kanit } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";
import Cardtoggle from "../component/Cardtoggle";
import StarsCanvas from "../component/StarComponent";
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
      img: "/spe_human.png",
      islink: true,
      isflip: false,
    },
    {
      label: "สิ่งมีชีวิตหลังความตาย ",
      info: "การมีอยู่ของโลกหลังความตายเป็นที่ถกเถียงกันมานานกว่าพันปี สิ่งเหล่านี้ไม่เคยได้รับการพิสูจน์จนกระทั่งประตูมิติถูกเปิดออก คนทั้งโลกจึงได้เห็นถึงความสวยงามและความโสมมของสองสถานที่ที่เคยถูกเขียนบนตำราทางศาสนานับร้อยเล่ม ‘นรก’ และ ‘สวรรค์’ ",
      path: "/species/afterdeath",
      img: "/spe_death.png",
      islink: true,
      isflip: true,
    },
    {
      label: "สิ่งมีชีวิตเวทมนต์",
      info: "สัตว์มีชีวิตเวทมนต์มักพบในตำนานเทพนิยาย นิทานพื้นบ้าน และวรรณกรรมแฟนตาซี มีพลังหรือลักษณะพิเศษเหนือธรรมชาติที่ทำให้พวกมันแตกต่างจากโลกปกติ สิ่งมีชีวิตเหล่านี้มีทั้งฝ่ายดีและฝ่ายร้าย และขึ้นชื่อในเรื่องความสามารถในการแสดงสิ่งเหนือมนุษย์",
      path: "/species/magic",
      img: "/spe_wolf.png",
      islink: true,
      isflip: false,
    },
    {
      label: "สิ่งมีชีวิตจากต่างดาว",
      info: "กลุ่มคนเหล่านี้ถูกนิยามจนติดปากว่า ‘เอเลี่ยน’ โดยทั่วไปหมายถึงสิ่งมีชีวิตจากนอกโลก สามารถอ้างอิงจากดวงดาวที่ปรากฎอยู่จริง หรือจะสมมุติชื่อจักรวาล ดวงดาว หรือสถานที่นอกโลกต่าง ๆ ขึ้นเองได้ สตอรี่การลงมาเยือนบนโลกมนุษย์ไม่บังคับว่าจะต้องมาตั้งแต่สมัยไหน หรือวิธีการเป็นอย่างไร",
      path: "/species/alien",
      img: "/spe_alien.png",
      islink: false,
      isflip: true,
    },
  ];
  return (
    <main className="bg-secondary-400 text-white w-full relative overflow-hidden">
      <StarsCanvas />
      <div className="max-w-screen-xl mx-auto relative">
        <div className="absolute left-[-200px] top-[-200px] z-0">
          <GreenBlur />
        </div>
        <div className="absolute right-[-200px] top-[200px] z-0">
          <GreenBlur />
        </div>
        <Navbar />

        <div className={kanit.className}>
          <div className="container mx-auto px-4 text-xs md:text-sm font-light text-center relative z-10">
            <div className="flex min-h-screen">
              <div className="m-auto flex flex-col gap-48">
                <div className="flex justify-center">
                  <div className="md:w-3/5">
                    หลายศตวรรษที่ผ่านมาบนโลกมีสิ่งมีชีวิตมากมายที่อาศัยอยู่นอกเหนือจาก
                    ‘มนุษย์’ พวกเขาปะปน
                    แอบแฝงและใช้ชีวิตอยู่ในสังคมโดยไม่ให้ใครรู้ถึงความพิเศษเหล่านั้น
                    แต่เมื่อถึงคราวที่ ‘บ้าน’ ที่อาศัยอยู่ถูกรุกราน
                    กลุ่มคนเหล่านั้นจะก้าวออกมาและปราบปรามอันตรายที่กำลังคืบคลานเข้ามา
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-48 md:text-left max-w-screen-lg mx-auto">
              {content.map((item) => (
                <div key={item.label}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div
                      className={`${
                        item.isflip ? "md:order-last" : ""
                      } flex justify-center relative`}
                    >
                      {/* <Image
                        alt="greenblur"
                        src="./greenblur.svg"
                        width={300}
                        height={300}
                        className="relative"
                      /> */}
                      <Image
                        alt="species"
                        src={item.img}
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="flex flex-col gap-8 my-auto">
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

            <div className="mt-48 flex flex-col gap-4 text-start max-w-screen-lg mx-auto">
              <Cardtoggle
                icon="/spe-human.svg"
                label="การเป็นลูกผสมระหว่างเผ่าพันธุ์"
                data="อนุญาตให้ทำได้, สามารถมีรูปร่าง รวมถึงพลังวิเศษจากแต่ละเผ่าได้ ขึ้นอยู่กับการออกแบบตัวละครของผู้เล่นเอง"
              />
              <Cardtoggle
                icon="/spe-human.svg"
                label="เผ่าพันธุ์นอกเหนือจากสี่มิติที่กล่าวมา"
                data={
                  <div>
                    สิ่งมีชีวิตบนโลกมนุษย์, สิ่งมีชีวิตจากโลกหลังความตาย,
                    สิ่งมีชีวิตจากต่างดาว,
                    และสิ่งมีชีวิตเวทมนต์ถือว่าเป็นขอบเขตที่กว้างมาก
                    และอยากให้ทุกคนสร้างสรรค์ตัวละครให้อยู่ภายใต้เซ็ทติ้งที่กำหนดให้
                    หากเป็นสิ่งมีชีวิตที่ไม่ได้อยู่ในรูปแบบของมนุษย์ อาทิ มังกร
                    ยูนิคอร์น หรืองู สามารถทำได้ แต่ตัวละครนั้น ๆ
                    จะต้องมีร่างกายของมนุษย์ ด้วย
                    <br></br>
                    <br></br>
                    หากไม่มั่นใจว่าคาร์แรคเตอร์ของตัวเองหลุดธีมหรือไม่สามารถสอบถามได้
                  </div>
                }
              />
              <Cardtoggle
                icon="/spe-human.svg"
                label="เผ่าพันธุ์ที่สงวนสิทธ์ไม่ให้ลง"
                data={
                  <div className="">
                    <ol className="list-decimal flex flex-col gap-4">
                      <li >
                        <div className="mb-4">
                          ไม่อนุญาตให้ลงหุ่นยนต์
                          เนื่องจากหุ่นยนต์ไม่ถือว่าเป็นสิ่งมีชีวิต
                          แต่ถือว่าเป็นสิ่งประดิษฐ์
                          ไม่เข้าข่ายจุดประสงค์ของโรงเรียนที่มุ่งเน้นตามหาผู้มีพลังวิเศษ
                          อย่างไรก็ตามผู้เล่นใช้สามารถให้หุ่นยนต์, AI,
                          เครื่องจักร,
                          เทคโนโลยีเป็นส่วนหนึ่งของการออกแบบตัวละครได้ อาทิ
                        </div>
                        <ul className="list-disc mb-4">
                          <li>Transformer ( เอเลี่ยน-หุ่นยนต์ )</li>
                          <li>Cyborg ( มนุษย์ - หุ่นยนต์ )</li>
                          <li>
                            Generator Rex ( การพัฒนาของมนุษย์ - หุ่นยนต์ )
                          </li>
                          <li>Ben10 (เทคโนโลยีต่างดาว - มนุษย์ )</li>
                        </ul>
                        <div>
                          เทคโนโลยีดังกล่าวจะต้องกลายเป็นส่วนหนึ่งของร่างกายตัวละคร
                          ไม่แยกออกจากกัน อย่างในกรณีของ Ironman
                          ที่สามารถใช้พลังจากการสวมชุดเพียงอย่างเดียว{" "}
                        </div>
                      </li>
                      <li>
                        ไม่อนุญาตให้ลงเผ่าพันธุ์ที่เกี่ยวข้องหรือส่อไปในทางเพศ
                        เช่น อินคิวบัส หรือ ซัคคิวบัส
                        รวมถึงการให้มีพลังวิเศษดังกล่าวด้วย เช่น
                        อวัยวะเพศยืดยาว, ปล่อยพลังจากหัวนม,
                        น้ำเชื้อล้างความทรงจำ
                      </li>
                    </ol>

                    <br></br>
                    <br></br>
                  </div>
                }
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
