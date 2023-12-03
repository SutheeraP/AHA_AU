import React from "react";
import Navbar from "@/app/component/Navbar";
import GreenBlur from "@/app/component/GreenBlur";
import BackContent from "@/app/component/BackContent";
import Footer from "@/app/component/Footer";
import Cardtoggle from "@/app/component/Cardtoggle";

export default function page() {
  const data = [
    {
      id: 1,
      label: "ความสามารถที่มาจากเทคโนโลยี",
      icon: "../sample-class.svg",
      content: (
        <div>
          <div>
            เทคโนโลยีที่ถูกนำมาใช้เป็นส่วนหนึ่งของพลังดังกล่าวอาจมาจากข้อผิดพลาดหรือการทดลองจากนักวิทยาศาสตร์ในยุคปัจจุบันได้
            อาทิ
          </div>
          <ul className="list-disc pl-4">
            <li>การโดนตัดต่อพันธุกรรม</li>
            <li>การเป็นตัวทดลองในห้องแลป</li>
            <li>การโคลนนิ่ง</li>
            <li>การรวม AI หรือหุ่นยนต์เป็นหนึ่งเดียวกับมนุษย์</li>
            <li>ผลกระทบจากรังสี</li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      label: "ความสามารถจากการเจ็บป่วย",
      icon: "../sample-class.svg",
      content: (
        <div>
          <div>
            มนุษย์ที่แข็งแรงไม่จำเป็นต้องครบ 32 เสมอไป
            ฮีโร่บางคนสามารถได้รับพลังวิเศษมาตั้งแต่เกิดหรือว่าได้รับในภายหลังจากปัจจัยภายนอกได้
          </div>
          <ul className="list-disc pl-4">
            <li>โรคประหลาด (คิดค้นขึ้นเองได้)</li>
            <li>ผลข้างเคียงจากการตั้งครรภ์</li>
            <li>การติดเชื้อบางอย่างจากสัตว์หรือพืช</li>
            <li>การถูกปรสิตเข้าครอบงำ</li>
            <li>ได้รับสารพิษหรือสารเคมี</li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      label: "ความสามารถเหนือธรรมชาติ",
      icon: "../sample-class.svg",
      content: (
        <div>
          <div>
            ความสามารถที่ไม่สามารถอธิบายได้ทางหลักวิทยาศาสตร์
            อาจได้รับมาตั้งแต่กำเนิดหรือได้รับในภายหลัง
            สามารถเชื่อมโยงกับสิ่งที่มองไม่เห็น มิติอื่น ๆ
            หรือความเชื่อที่มีอยู่จริงได้
          </div>
          <ul className="list-disc pl-4">
            <li>การอ่านความคิด</li>
            <li>การควบคุมจิตใจ</li>
            <li>การเปลี่ยนรูปร่าง</li>
            <li>การสื่อสารกับสิ่งมีชีวิตอื่นหรือวิญญาณ</li>
            <li>การควบคุมสภาพอากาศ</li>
            <li>การติดคำสาป</li>
          </ul>
        </div>
      ),
    },
    {
      id: 4,
      label: "พลังที่ได้มาอย่างไร้สาเหตุ",
      icon: "../sample-class.svg",
      content: (
        <div>
          <div>
            เนื่องจากเป็นแท็กอิสระ จึงไม่เข้มงวดเรื่องความสมเหตุสมผลมากนัก
            สามารถออกแบบและหาสาเหตุนอกเหนือจากนี้ได้ตามชอบ
          </div>
          <ul className="list-disc pl-4">
            <li>การเดินทางข้ามเวลา</li>
            <li>ตื่นจากโคม่า</li>
            <li>อธิฐานผ่านดาวตก</li>
            <li>มีพลังสืบทอดมาจากพ่อแม่</li>
          </ul>
        </div>
      ),
    },
    {
      id: 5,
      label: "วิวัฒนาการของสิ่งมีชีวิต",
      icon: "../sample-class.svg",
      content: (
        <div>
          <div>
            นอกจากมนุษย์ที่ถือว่าเป็นสิ่งมีชีวิตที่ทรงปัญญาเพียงอย่างเดียวแล้ว
            เป็นไปได้หรือไม่ว่าจะมีสิ่งมีชีวิตนอกเหนือจากนี้ที่อาศัยอยู่กับเรามาโดยตลอด
            ? ผู้เล่นสามารถออกแบบเผ่าพันธุ์ที่อาศัยอยู่ร่วมกับมนุษย์
            หรือกลุ่มมนุษย์ที่เริ่มวิวัฒนการแปลกแยกไปจากคนปกติได้
          </div>
          <ul className="list-disc pl-4">
            <li>สิ่งมีชีวิตจากใต้น้ำ</li>
            <li>สิ่งมีชีวิตจากใต้ดิน</li>
          </ul>
        </div>
      ),
    },
  ];
  const thiscontent = (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <div className="col-span-2"></div>
      <div className="col-span-3 flex flex-col gap-6 font-light">
        <div>
          มนุษย์ถือเป็นเผ่าพันธุ์ที่ ‘อ่อนแอ’ และค่อนข้าง ‘รักสงบ’
          ในสายตาของสิ่งมีชีวิตอื่น แต่สำหรับมนุษย์บางกลุ่ม
          พวกเขาพิเศษกว่านั้นมาก คนบางกลุ่มมีพรสวรรค์ที่เรียกได้ว่าเหนือธรรมชาติ
          แต่สำหรับคนบางกลุ่มมันเหมือนกับคำสาปที่ทำให้พวกเขากลายเป็นตัวประหลาดมากกว่า
          มนุษย์ที่ได้รับเชิญเข้าร่วม Apex Heroic Academy
          จะต้องมีความพิเศษทางด้านกายภาพ หรือ ทางจิตใจ
          บางคนอาจติดตัวมาตั้งแต่กเนิดหรือถูกเทคโนโลยีปัจจุบันแต่งเติมเอาทีหลัง
        </div>
        <div>สามารถออกแบบให้มนุษย์มีที่มาและความสามารถได้หลากหลาย เช่น</div>
        <div className="flex flex-col gap-4">
          {data.map((item) => (
            <Cardtoggle
              key={item.id}
              icon={item.icon}
              label={item.label}
              data={item.content}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="bg-secondary-400 text-white w-full relative overflow-hidden min-h-screen text-xs md:text-sm">
      <div className="absolute left-[-200px] top-[-200px] z-0">
        <GreenBlur />
      </div>
      <div className="absolute right-[-200px] top-[500px] z-0">
        <GreenBlur />
      </div>
      <Navbar />

      <BackContent
        label="สิ่งมีชีวิตจากโลกมนุษย์"
        content={thiscontent}
        prev="/species"
      />
      <Footer />
    </main>
  );
}
