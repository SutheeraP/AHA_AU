import React from "react";
import Navbar from "@/app/component/Navbar";
import GreenBlur from "@/app/component/GreenBlur";
import BackContent from "@/app/component/BackContent";
import Footer from "@/app/component/Footer";

export default function page() {
  const howtoplay = [
    "สามารถเข้าร่วมโดยการวาดรูป, แต่งฟิค, คอมมิค, หรือแต่งสตอรี่ ฯลฯ ได้อย่างอิสระ โดยติด #AHA_AU ได้ทุกบนแพลทฟอร์ม เช่น Facebook, Twitter, หรือ Instagram",
    "เนื่องจากแท็กอยู่ในธีมเหมาะสำหรับทุกเพศทุกวัย หากต้องการเล่นสตอรี่ที่มีความล่อแหลม หรือภาพลามกอนาจาร ขอความร่วมมือในการใส่ Privatter หรือ ไม่ต้องติด #AHA_AU",
    "เนื่องจากไม่มีกลุ่มหรือแพลทฟอร์มสำหรับโรลเพลย์ สามารถเข้าร่วมกลุ่มโรลเพลย์หรือกลุ่มหาคนโรลเพลย์อิสระได้ เพื่อหาเพื่อนร่วมอุดมการณ์ ผ่าน #AHA_AU",
    "สามารถจับกลุ่มกันเพื่อร่วมเล่นได้ จะนับว่าเป็นกลุ่มไม่เป็นทางการของ #AHA_AU และเจ้าของแท็กจะไม่มีส่วนเกี่ยวข้องในกรณีที่เกิดปัญหา",
    "ไม่อนุญาตให้นำรูป AI มาเป็นส่วนหนึ่งของ #AHA_AU ทุกกรณี",
    "การจัด Event หรือกิจกรรมต่าง ๆ สามารถทำได้ทำเลยโดยไม่ต้องรออนุมัติจากเจ้าของแท็ก หากไม่แน่ใจสามารถทักมาสอบถามได้",
  ];
  const agree = [
    "#AHA_AU เป็นแท็กที่ผู้พัฒนาไม่แสวงหาผลกำไร อย่างไรก็ตาม ผู้เป็นเจ้าของ OC สามารผลิตสินค้าที่เกี่ยวข้องกับออริตัวเองเพื่อวัตถุประสงค์ทางการค้าได้ อาทิ คอมมิค, พวงกุญแจ, หรือตุ๊กตา โดยต้องระบุชื่อแท็ก #AHA_AU รวมถึง ให้เครดิตรผู้พัฒนาทุกครั้ง",
    "ไม่แอบอ้างว่าเป็นเจ้าของแท็ก หรือมีส่วนร่วมในการช่วยคิดค้น Setting ทุกกรณี",
    "ไม่อนุญาตให้นำแท็ก #AHA_AU ไปเขียนเรียบเรียงใหม่ และใช้สำหรับหาประโยชน์ส่วนบุคคลจากหน่วยงานทางการค้าหรือบุคคลที่สาม อาทิ การแต่งฟิคชั่นหรือวาดรูปเพื่อชิงเงินรางวัล, สื่อภาพยนตร์, Platform การ์ตูนทุกช่องทาง ",
    "รายละเอียดแท็ก #AHA_AU และรูปภาพประกอบบนเว็บไซต์ถือเป็นลิขสิทธิ์ของผู้สร้าง ไม่อนุญาตให้ผู้เล่นนำไปดัดแปลงแก้ไข หรือเขียนขึ้นมาใหม่โดยไม่ได้รับอนุญาตโดยเด็ดขาด",
  ];
  const thiscontent = (
    <div>
      <div className="grid md:grid-cols-2 gap-20 md:gap-8">
        <div className="md:bg-darklight-200 md:p-8 rounded-[1rem]">
          <div className="flex justify-center">
            <div className="text-primary border-primary border w-fit text-center py-1 px-12 font-semibold rounded-full mb-4">
              วิธีเล่น
            </div>
          </div>

          <div className="text-xs font-light flex flex-col gap-4">
            <div>
              แท็ก #AHA_AU ไม่มีกลุ่มหรือสื่อออนไลน์อย่างเป็นทางการโดยเฉพาะ
              ผู้เล่นสามารถเข้าร่วมและออกแบบตัวละครได้อย่างอิสระ
              โดยไม่ต้องวิ่งหรือผ่านการตรวจสอบจากเจ้าของแท็ก
            </div>
            <ul className="list-disc pl-4">
              {howtoplay.map((item) => (
                <li key={item} className="pb-2">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:bg-darklight-200 md:p-8 rounded-[1rem]">
          <div className="flex justify-center">
            <div className="text-primary border-primary border w-fit text-center py-1 px-12 font-semibold rounded-full mb-4">
              ข้อตกลง
            </div>
          </div>

          <div className="text-xs font-light flex flex-col gap-4">
            <ul className="list-disc pl-4">
              {agree.map((item) => (
                <li key={item} className="pb-2">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main className="bg-secondary-400 text-white w-full relative overflow-hidden">
      <div className="absolute left-[-200px] top-[-200px] z-0">
        <GreenBlur />
      </div>
      <div className="absolute right-[-200px] top-[500px] z-0">
        <GreenBlur />
      </div>
      <Navbar />

      <BackContent
        label="วิธีเล่นและข้อตกลง"
        content={thiscontent}
        prev="/join"
      />
      <Footer />
    </main>
  );
}
