"use client";

import React, { useState } from "react";
import Navbar from "@/app/component/Navbar";
import GreenBlur from "@/app/component/GreenBlur";
import BackContent from "@/app/component/BackContent";
import Footer from "@/app/component/Footer";

export default function Page() {
  const [selectedID, setSelectedID] = useState(1);
  const data = [
    {
      label: "นรก",
      id: 1,
      content: (
        <div className="flex flex-col gap-6">
          <div>
            นรกมักถูกอธิบายว่าเป็นสถานที่แห่งการลงโทษชั่วนิรันดร์สำหรับผู้ที่ปฏิเสธพระเจ้าหรือกระทำบาปร้ายแรง
            เป็นฝ่ายตรงกันข้ามกับสวรรค์
            สถานที่แห่งนี้เต็มไปด้วยวิญญาณอันชั่วร้าย
            ซึ่งบางทีพวกมันก็หลบหนีออกมาใช้ชีวิตบนโลกปะปนไปกับสิ่งมีชีวิตอื่น ๆ
            หรือกระทั่งเข้าสิงสิ่งมีชีวิตอื่น ๆ
          </div>
          <div>
            สามารถเลือกให้ตัวละครมีความสามารถหรือแรงบัลดาลใจจากเหล่าทวยเทพที่เคยถูกกล่าวถึงในเรื่องเล่าได้
            แต่ต้องกล่าวถึงหรือสร้างให้มีความสัมพันธ์ทางอ้อมเพื่อป้องกันการสับสนกับผู้ร่วมแท็กคนอื่น
            ๆ ตัวอย่าง
          </div>
          <ul className="list-disc pl-4">
            <li>Hades</li>
            <li>Hellhounds</li>
            <li>ตัวการ์กอย</li>
            <li>ภูติผีวิญญาณ</li>
          </ul>
        </div>
      ),
    },
    {
      label: "สวรรค์",
      id: 2,
      content: (
        <div className="flex flex-col gap-4">
          <div>
            สวรรค์ถือเป็นจุดหมายปลายทางสูงสุดสำหรับดวงวิญญาณของผู้ศรัทธาเนื่องจากจะได้รับใช้พระเจ้าในโลกหลังความตาย
            นับว่าเป็นสถานที่แห่งความยินดี ความสงบ
            และความปราศจากทุกข์ชั่วนิรันดร์ บนสวรรค์เต็มไปด้วยความรื่นเริง
            เสียงดนตรี และธรรมชาติที่น่าอภิรมย์
          </div>
          <div>
            สามารถเลือกให้ตัวละครมีความสามารถหรือแรงบัลดาลใจจากเหล่าทวยเทพที่เคยถูกกล่าวถึงในเรื่องเล่าได้
            แต่ต้องกล่าวถึงหรือสร้างให้มีความสัมพันธ์ทางอ้อมเพื่อป้องกันการสับสนกับผู้ร่วมแท็กคนอื่น
            ๆ ตัวอย่าง
          </div>
          <ul className="list-disc pl-4">
            <li>นางฟ้า หรือ เทวดา</li>
            <li>คิวปิด</li>
            <li>ลูกหลานเทพซุส</li>
          </ul>
        </div>
      ),
    },
  ];

  const handleChange = (id) => {
    setSelectedID(id);
  };

  const thiscontent = (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-xs md:text-sm font-light">
        <div className="col-span-2"></div>
        <div className="col-span-3">
          <div className="flex flex-col gap-6">
            <div>
              การมีอยู่ของโลกหลังความตายเป็นที่ถกเถียงกันมานานกว่าพันปี
              สิ่งเหล่านี้ไม่เคยได้รับการพิสูจน์จนกระทั่งประตูมิติถูกเปิดออก
              คนทั้งโลกจึงได้เห็นถึงความสวยงามและความโสมมของสองสถานที่ที่เคยถูกเขียนบนตำราทางศาสนานับร้อยเล่ม
              ‘นรก’ และ ‘สวรรค์’
            </div>
            <div>
              กำหนดให้นรกและสวรรค์เป็นขอบเขตย่อยของโลกหลังความตาย
              ไม่มีนอกมิติเหนือจากนี้
              แต่สามารถคิดเผ่าพันธุ์พันธ์รวมถึงสิ่งมีชีวิตที่อาศัยอยู่ในนี้ขึ้นเองได้
            </div>
            <div className="text-faded">
              หมายเหตุ :
              นิยามของนรกและสวรรค์ขอให้อยู่ในขอบเขตฝั่งตะวันตกเช่นทางกรีกโรมัน
              หรือ ศาสนาคริสต์
            </div>
            <div className="flex gap-4">
              {data.map((item) => (
                <div key={item.id}>
                  <div
                    onClick={() => handleChange(item.id)}
                    className={`${
                      selectedID === item.id
                        ? "border-b border-primary font-semibold"
                        : "text-faded"
                    } px-4 py-1 hover:cursor-pointer`}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            <div>{data.find((item) => item.id === selectedID).content}</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main className="bg-secondary-400 text-white w-full relative overflow-hidden min-h-screen">
      <div className="max-w-screen-xl mx-auto relative">
      <div className="absolute left-[-200px] top-[-200px] z-0">
        <GreenBlur />
      </div>
      <div className="absolute right-[-200px] top-[500px] z-0">
        <GreenBlur />
      </div>
      <Navbar />

      <BackContent
        label="สิ่งมีชีวิตหลังความตาย"
        content={thiscontent}
        prev="/species"
      />
      <Footer />
      </div>
    </main>
  );
}
