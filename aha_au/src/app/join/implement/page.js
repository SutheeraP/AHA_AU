import React from "react";
import Navbar from "@/app/component/Navbar";
import GreenBlur from "@/app/component/GreenBlur";
import BackContent from "@/app/component/BackContent";
import Footer from "@/app/component/Footer";

export default function page() {
  const thiscontent = (
    <div>
      <div className="grid md:grid-cols-5 gap-12">
        <div className="flex justify-center md:col-span-2">
          <div className="">
            <div className="absolute left-[5rem] w-32 h-32 border border-faded rounded-full"></div>
            <div className="w-56 h-80 border border-faded rounded-t-full"></div>
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col font-light text-xs md:text-sm gap-8">
          <div>
            เนื่องจากทีมผู้สร้างมีข้อจำกัดหลายด้านที่ทำไม่สามารถพัฒนาแท็กนี้ให้เป็นคอมมูได้
            หากผู้ใดสนใจนำ #AHA_AU ไปพัฒนาต่อเป็นคอมมูบนแพลทฟอร์มออนไลน์
            สามารถติดต่อ account official ได้
            อย่างไรก็ตามโปรดเคารพเงื่อนไขและข้อตกลงดังต่อไปนี้
          </div>
          <ol className="list-decimal pl-4">
            <li>
              ไม่อนุญาตให้มีการแสวงหาผลกำไรในจากการทำคอมมู รวมถึงตัวทีมงานเอง
              อาทิ การเก็บค่าเข้าร่วม การรับโดเนท หรือการผลิตสินค้า #AHA_AU
              เพื่อนำมาขายในนามคอมมู
            </li>
            <li>Platform หลักที่ใช้จะต้องเป็น Twitter เท่านั้น</li>
            <li>
              การดัดแปลงแก้ไขรายละเอียด Setting จะต้องทำการปรึกษา
              และได้รับอนุมัติจากเจ้าของแท็กก่อนทุกครั้ง
            </li>
            <li>
              จะต้องมี Account Official สำหรับการสร้างคอมมูโดยเฉพาะ
              ไม่อนุญาตให้ใช้แอคเคาท์ส่วนตัวในการโพสต์สอบถาม
              หรือการประชาสัมพันธ์
            </li>
            <li>
              สามารถแสดงตัวในนามของผู้ก่อตั้งคอมมูหรือทีมงานได้ตามปกติ
              แต่ต้องไม่แอบอ้างว่าเป็นผู้คิดค้นหรือเจ้าของแท็ก #AHA_AU
            </li>
            <li>
              ไม่นำ AI มาเป็นส่วนหนึ่งในการสร้างรูปภาพประกอบ
              ผลงานในคอมมูจะต้องเป็นผลงานที่สร้างขึ้นด้วยฝีมือของมนุษย์เท่านั้น
            </li>
            <li>
              ผู้เล่นแท็กที่ไม่ประสงค์เข้าร่วมคอมมูยังสามารถเล่นแท็ก #AHA_AU
              ได้ตามปกติ
            </li>
          </ol>
          <div>
            หากมีการตรวจพบว่ามีทีมงานหรือสมาชิกผู้พัฒนาคอมมูมีการกระทำผิดกติกา
            โดยเฉพาะอย่างยิ่งการแอบอ้างหรือแสวงหาผลกำไรในนามคอมมู
            ผู้พัฒนามีสิทธิ์ลงความเห็นกันเพื่อถอดถอนอำนาจในการควบคุมและเป็นส่วนหนึ่งของบุคคลดังกล่าวทันที
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
        label="สำหรับผู้ต้องการสานต่อ"
        content={thiscontent}
        prev="/join"
      />
      <Footer />
    </main>
  );
}
