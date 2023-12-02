import React from "react";
import Navbar from "@/app/component/Navbar";
import GreenBlur from "@/app/component/GreenBlur";
import BackContent from "@/app/component/BackContent";
import Footer from "@/app/component/Footer";

export default function page() {
  const thiscontent = (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm font-light">
        <div className="col-span-2"></div>
        <div className="col-span-3">
          <div className="flex flex-col gap-4">
            <div>การมีอยู่ของโลกหลังความตายเป็นที่ถกเถียงกันมานานกว่าพันปี สิ่งเหล่านี้ไม่เคยได้รับการพิสูจน์จนกระทั่งประตูมิติถูกเปิดออก คนทั้งโลกจึงได้เห็นถึงความสวยงามและความโสมมของสองสถานที่ที่เคยถูกเขียนบนตำราทางศาสนานับร้อยเล่ม ‘นรก’ และ ‘สวรรค์’</div>
            <div>กำหนดให้นรกและสวรรค์เป็นขอบเขตย่อยของโลกหลังความตาย ไม่มีนอกมิติเหนือจากนี้ แต่สามารถคิดเผ่าพันธุ์พันธ์รวมถึงสิ่งมีชีวิตที่อาศัยอยู่ในนี้ขึ้นเองได้</div>
            <div className="text-faded">หมายเหตุ : นิยามของนรกและสวรรค์ขอให้อยู่ในขอบเขตฝั่งตะวันตกเช่นทางกรีกโรมัน หรือ ศาสนาคริสต์</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <main className="bg-secondary-400 text-white w-full relative overflow-hidden">
      <div className="absolute left-[-200px] top-[-200px] z-0">
        <GreenBlur />
      </div>
      <div className="absolute right-[-200px] top-[500px] z-0">
        <GreenBlur />
      </div>
      <Navbar />

      <BackContent label="สิ่งมีชีวิตหลังความตาย" content={thiscontent} prev="/species" />
      <Footer />
    </main>
  );
}
