import React from "react";
import Navbar from "@/app/component/Navbar";
import GreenBlur from "@/app/component/GreenBlur";
import BackContent from "@/app/component/BackContent";
import Footer from "@/app/component/Footer";
import Image from "next/image";

export default function page() {
  const thiscontent = (
    <div>
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3 flex flex-col font-light text-xs md:text-sm gap-8">
          <div>
            รัฐบาลมีหูตาอยู่ทุกที่
            โดยเฉพาะในยุคที่เทคโนโลยีถูกเข้าถึงได้ทุกย่อมหญ้า
            เป็นที่เล่ากันมาปากต่อปากว่ามนุษย์ที่มีพลังวิเศษอยู่ร่วมกับคนปกติบนโลกมาร่วมหลายร้อยปี
            พวกเขาปะปนและแอบแฝงอยู่ไม่ให้เรารู้ตัว
            แต่เมื่อถึงคราวที่โลกอยู่ในช่วงวิกฤต
            รัฐจำเป็นต้องรวบรวมตัวให้พวกเขาเป็นหนึ่งเพื่อปกป้องมนุษยชาติที่ยังหลงเหลืออยู่{" "}
          </div>
          <div>
            เนื่องจาก Apex Heroic Academy เป็นสถาบันลับ
            การรับนักเรียนจึงไม่ใช่การยื่นใบสมัครหรือสอบเข้าเหมือนโรงเรียนทั่วไป
            แต่เป็นการตามตัวจากภาครัฐเอง
            ที่สำคัญมันไม่ได้ขึ้นอยู่กับความสมัครใจของนักเรียน
            เพราะถึงแม้ว่าพวกเขาจะไม่สมัครใจ
            ก็จะถูกบังคับมาด้วยเหตุผลทางความมั่นคงของโลกอยู่ดี
          </div>
          <div>
            กลุ่มคนดังกล่าวสามารถถูกค้นพบได้จากการตรวจร่างกายที่โรงพยาบาล
            การมีประวัติอาชญากรติดตัว การออกสำรวจ หรือกระทั่งคำบอกเล่าปากต่อปาก
            ผู้เล่นสามารถดำเนินสตอรี่ได้หลากหลายถึงการเข้าร่วมเป็นนักเรียนใน
            Apex Heroic Academy{" "}
          </div>
        </div>
        <div className="text-center md:col-span-2">
          <Image src="/spe_human.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}/>
        </div>
      </div>
    </div>
  );

  return (
    <main className="bg-secondary-400 min-h-screen text-white w-full relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto relative">
        <div className="absolute left-[-200px] top-[-200px] z-0">
          <GreenBlur />
        </div>
        <div className="absolute right-[-200px] top-[500px] z-0">
          <GreenBlur />
        </div>
        <Navbar />

        <BackContent
          label="การรับสมัครนักเรียน"
          content={thiscontent}
          prev="/join"
        />
        <Footer />
      </div>
    </main>
  );
}
