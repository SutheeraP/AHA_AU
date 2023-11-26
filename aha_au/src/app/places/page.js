"use client";

import React, { useState } from "react";
import Navbar from "../component/Navbar";
import GreenBlur from "../component/GreenBlur";
import { Kanit } from "@next/font/google";
import Footer from "../component/Footer";
const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "600", "700", "100", "200"],
});

export default function Page() {
  const navigate = [
    {
      label: "อาคารเรียนหลัก",
      tag: "main",
      detail:
        "เป็นอาคารที่มีขนาดกลางแต่มีความสำคัญที่สุด เป็นพื้นที่จัดกิจกรรมและเป็นห้องเรียนหลักสำหรับเหล่าฮีโร่ ใช้ระบบเดินเรียนระหว่างเปลี่ยนคาบ มีทั้งหมด 3 ชั้นด้วยกัน ใช้ลิฟต์แก้วที่มีความทันสมัยและเร็วสูงในการเคลื่อนที่ระหว่างชั้นเรียน",
    },
    {
      label: "อาคารกิจกรรม",
      tag: "activity",
      detail:
        "อาคารกิจกรรมเป็นอาคารที่มีขนาดใหญ่มากที่สุด เพื่อใช้สำหรับทำกิจกรรมที่ต้องใช้พื้นที่กว้าง มีทั้งหมด 6 ชั้น รวมชั้นใต้ดิน ใช้ลิฟต์แก้วที่มีความทันสมัยและเร็วสูงในการเคลื่อนที่ระหว่างชั้นเรียน ห้องประจำชมรมส่วนใหญ่สามารถพบเจอได้ที่นี่",
    },
    {
      label: "อาคารหอพักนักเรียน",
      tag: "dorm",
      detail: "",
    },
    {
      label: "สถานที่อื่น ๆ",
      tag: "etc",
      detail: "สถานที่บริเวณรอบนอกตัวอาคาร",
    },
  ];

  const places = [
    {
      label: "โถงทางเดินใหญ่",
      tag: "main",
      detail:
        "เมื่อเดินเข้าประตูมาจะพบกับโถงทางเดินขนาดใหญ่เป็นอย่างแรก รอบข้างตกแต่งด้วยศิลปะสไตล์ Minimalism มีทางแยกให้เดินไปตามห้องเรียนและบริเวณอื่นในอาคาร บริเวณนี้ไม่ค่อยมีประโยชน์สำหรับใช้สอยอะไรมาก นอกจากให้นักเรียนเดินสวนกัน และมีจอขนาดใหญ่ติดตั้งบนผนังสำหรับประชาสัมพันธ์ข่าวสาร",
    },
    {
      label: "ห้องประชุม ",
      tag: "main",
      detail:
        "ห้องประชุมสำหรับจัดกิจกรรมในร่ม มีขนาดกว้างมากพอที่จะจุเหล่าฮีโร่ทั้งโรงเรียนได้ มักใช้ในงานหรือพิธีการสำคัญที่ผู้อำนวยการเป็นผู้จัดโดยเฉพาะ อาทิ พิธีเปิดการศึกษา งานเลี้ยง และงานสังคมทั่วไป",
    },
    {
      label: "ห้องเรียน",
      tag: "main",
      detail:
        "ห้องเรียนขนาดใหญ่ การออกแบบของห้องเรียนใกล้เคียงกับห้องเรียนของมหาวิทยาลัย ที่จะมีอาจารย์ผู้สอนอยู่ตรงกลาง พร้อมจอกว้างที่ใช้เป็นสื่อการเรียนการสอน ",
    },
    {
      label: "ห้องพักครู",
      tag: "main",
      detail: "ที่ประจำการของครูผู้สอนทุกท่าน",
    },
    {
      label: "ห้องทดลองแล็ปวิทยาศาสตร์ ",
      tag: "main",
      detail:
        "ห้องแลปวิทยาศาสตร์นอกจากจะใช้สำหรับเรียนแล้ว ยังเป็นสถานที่สำหรับทำการวิจัยเรื่องสิ่งมีชีวิตประเภทต่าง ๆ ในโรงเรียนโดยเฉพาะ ที่นี่ถูกดูแลและควบคุมโดยนักวิทยาศาสตร์ที่เป็นมนุษย์และ AI ตลอด 24 ชั่วโมง เพื่อป้องกันเหตุร้ายหรือการเล่นแผลง ๆ ของนักเรียน ",
    },
    {
      label: "ห้องฝึกซ้อม",
      tag: "main",
      detail: (
        <div>
          ใช้สำหรับเรียน และฝึกซ้อมส่วนตัวของนักเรียน
          ห้องฝึกซ้อมมีขนาดกว้างและจำนวนที่มากเพื่อตอบสนองความต้องการในการฝึกฝนฝีมือ
          ลักษณะห้องจะเป็นห้องสี่เหลี่ยมผืนผ้า ด้านบนมีห้องสังเกตการณ์อยู่
          สามารถมองผ่านกระจกลงมาได้
          <br></br>
          <br></br>
          ในการเลือกสถานที่ฝึกซ้อมจะมีการนำเทคโนโลยี Augmented Reality มาช่วย
          ทั้งการจำลองเหตุการณ์ สถานที่
          รวมถึงเหล่าร้ายให้ตัวผู้ฝึกซ้อมได้สัมผัสประสบการณ์ที่สมจริงที่สุด
        </div>
      ),
    },
    {
      label: "ห้องสมุด",
      tag: "main",
      detail:
        "ความรู้บางอย่างก็ไม่สามารถสืบค้นได้จากโลกอินเตอร์เน็ต ห้องสมุดโรงเรียนเปิดตลอด 24 ชั่วโมงให้เหล่าฮีโร่เข้ามาอ่านหนังสือ ติวสอบ หรือแม้กระทั่งเป็นสถานที่แอบหลับ ",
    },
    {
      label: "ห้องสันทนาการ",
      tag: "main",
      detail:
        "พื้นที่สำหรับให้นักเรียนที่มีเวลาว่างเข้ามาพักผ่อนหย่อนใจ ข้างในห้องมีกิจกรรมเบาสมองให้เลือกทำหลากหลาย ",
    },
    {
      label: "โรงอาหารและร้านขายของ ",
      tag: "main",
      detail:
        "นักเรียนทุกคนทานอาหารร่วมกันพร้อมกัน 3 เวลา โรงเรียนเป็นผู้จัดการเรื่องอาหารให้ทุกคน รวมถึงกลุ่มเด็กที่มีข้อจำกัดเรื่องการกินด้วยเช่นกัน ร้านขายของส่วนมากจะเน้นขายขนมทานเล่นหรืออาหารสำเร็จรูป ( อุปกรณ์การเรียน เครื่องแบบ และอุปกรณ์ทางเทคโนโลยีอื่น ๆ จะได้รับการสนับสนุนจากโรงเรียน )",
    },
    {
      label: "ห้องสั่งการ",
      tag: "main",
      detail:
        "ห้องผู้อำนวยการ เป็นสถานที่สำหรับผู้อำนวยการและผู้บริหารคนอื่น ๆ ในการทำงานและจัดการระบบในโรงเรียน นักเรียนทั่วไปไม่มีสิทธิ์เข้าถึงห้องนี้ และไม่มีผู้รู้แน่ชัดว่าห้องดังกล่าวใช้เก็บข้อมูลอะไรบ้างกันแน่ นอกจากเป็นศูนย์บัญชาการสำหรับการประสานงานของซูเปอร์ฮีโร่ เมื่อมีวิกฤตการณ์และการโจมตีของผู้ร้าย",
    },
    {
      label: "สนามประลอง",
      tag: "activity",
      detail:
        "พื้นที่ที่เปิดโอกาสให้เหล่าฮีโร่เข้ามาใช้ในการประชัญฝีมือได้อย่างเปิดเผย เป็นพื้นที่โล่งไร้สิ่งกีดขวาง สามารถเปิดใช้งาน Augmented Reality รวมถึงให้นักเรียนคนอื่นเข้ามาชมการต่อสู้ระหว่างประลองกันได้ด้วย การใช้สนามจะต้องมีการแจ้งทางโรงเรียนทุกครั้ง เพื่อป้องกันการทะเลาะวิวาทและควบคุมสถานการณ์ ",
    },
    {
      label: "อาคารชาย-หญิง",
      tag: "dorm",
      detail:
        "แบ่งออกเป็น 2 อาคารย่อยด้วยกัน เนื่องจาก Apex Heroic Academy เป็นโรงเรียนประจำนักเรียนทุกคนจำเป็นต้องมีรูมเมทโดยระบบสุ่มเท่านั้น เว้นแต่ว่าจะมีเงื่อนไขพิเศษเป็นข้อยกเว้น จึงจะสามารถอนุโลมให้อยู่คนเดียวได้",
    },
    {
      label: "สนาม American Football  ",
      tag: "etc",
      detail: "เป็นกีฬาชนิดเดียวที่ต้องต้องซ้อมและแข่งขันด้านนอก ",
    },
  ];

  const [current, setCurrent] = useState("main");
  const filterplace = places.filter((item) => item.tag === current);
  const filterdescription = navigate.filter((item) => item.tag === current);

  const handleClick = (value) => {
    setCurrent(value);
  };

  return (
    <main className="bg-secondary-400 text-white w-full min-h-screen">
      <div className="absolute left-[-200px] top-[-200px]">
        <GreenBlur />
      </div>
      <Navbar />

      <div className={kanit.className}>
        <div className="pt-24 container mx-auto px-4">
          <nav>
            <div className="md:hidden"></div>

            <div className="hidden md:flex flex-col gap-4">
              <div className="flex justify-center space-x-4">
                {navigate.map((navigate) => (
                  <div
                    key={navigate.tag}
                    onClick={() => handleClick(navigate.tag)}
                    className={`${
                      current === navigate.tag
                        ? "text-white border-primary font-normal"
                        : "text-faded border-faded font-light hover:text-primary"
                    }  border w-fit py-1 px-8 rounded-full cursor-pointer text-sm`}
                  >
                    {navigate.label}
                  </div>
                ))}
              </div>

              {/* description */}
              {filterdescription.map((item) => (
                <div
                  key={item.tag}
                  className="text-faded text-xs font-light mx-auto md:px-40  text-center"
                >
                  {item.tag === current ? `${item.detail}` : ""}
                </div>
              ))}
              <div></div>
            </div>
          </nav>

          {/* content */}
          <div className="grid md:grid-cols-2 gap-4 pt-12">
            {filterplace.map((filterplace) => (
              <div key={filterplace.label} className="h-full bg-darklight-400 w-full py-4 px-6 rounded-2xl backdrop-blur-sm">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-4">
                    <div className="flex flex-col md:text-xl tracking-wider">
                      <div>{filterplace.label}</div>
                    </div>
                  </div>
                  <div className="text-white text-xs font-extralight">
                    {filterplace.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
