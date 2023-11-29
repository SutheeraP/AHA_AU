import React from "react";

const Ruleshero = () => {
  return (
    <div className="min-h-screen flex">
      <div className="m-auto relative">
      <div className="w-32 h-32 md:w-80 md:h-80 border border-[#fff6] rounded-full absolute top-[80%] md:top-[50%] left-[80%]"></div>
        <div className="md:px-40 px-4">
          <div className="text-2xl font-semibold tracking-wider">
            กฎระเบียบโรงเรียน
          </div>
          <div className="text-sm my-8 font-light">
            กฎระเบียบที่นักเรียนทุกคนควรปฏิบัติตามเพื่อความเป็นระเบียบ
            ข้อปฏิบัติบางอย่างจะถูกปรับเปลี่ยนเล็กน้อย
            แตกต่างจากโรงเรียนทั่วไปที่มีแต่มนุษย์ปกติ
            เพื่อให้มั่นใจว่านักเรียนใน Apex Heroic Academy ได้รับความคุ้มครอง
            และมีสวัสดิภาพที่ดี
          </div>
          <div className="text-faded text-xs font-light">
            หมายเหตุ : ผู้เล่นสามารถเลือกให้ตัวละครของตัวเองเป็นนักเรียนผิดกฎได้{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ruleshero;
