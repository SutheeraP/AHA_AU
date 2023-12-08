import React from "react";
import Navbar from "@/app/component/Navbar";
import GreenBlur from "@/app/component/GreenBlur";
import BackContent from "@/app/component/BackContent";
import Footer from "@/app/component/Footer";

export default function page() {
  const thiscontent = (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-2"></div>
        <div className="col-span-3 flex flex-col gap-6 font-light text-xs md:text-sm">
          <div>
            สัตว์มีชีวิตเวทมนต์มักพบในตำนานเทพนิยาย นิทานพื้นบ้าน
            และวรรณกรรมแฟนตาซี
            มีพลังหรือลักษณะพิเศษเหนือธรรมชาติที่ทำให้พวกมันแตกต่างจากโลกปกติ
            สิ่งมีชีวิตเหล่านี้มีทั้งฝ่ายดีและฝ่ายร้าย
            และขึ้นชื่อในเรื่องความสามารถในการแสดงสิ่งเหนือมนุษย์
          </div>
          <div>
            สิ่งมีชีวิตกลุ่มนี้ถูกกล่าวขาวปากต่อปากบนโลกมนุษย์มานับหลายร้อยปี
            พวกเขาอยู่คู่ตำนานและจินตนาการ
            รวมถึงอยู่ปะปนกับมนุษย์เองมาหลายชั่วอายุคนด้วยเช่นกัน อาทิ
          </div>
          <ul className="list-disc pl-4">
            <li>แวมไพร์</li>
            <li>มนุษย์หมาป่า</li>
            <li>แฟรี่</li>
            <li>แม่มดหรือพ่อมด</li>
            <li>แวร์บีส</li>
            <li>ไซเรน</li>
            <li>นางเงือก</li>
          </ul>
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
          label="สิ่งมีชีวิตเวทมนต์"
          content={thiscontent}
          prev="/species"
        />
        <Footer />
      </div>
    </main>
  );
}
