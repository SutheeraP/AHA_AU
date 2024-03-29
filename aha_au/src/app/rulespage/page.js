import React from "react";
import Navbar from "../component/Navbar";
import Ruleshero from "./Ruleshero";
import Rulescontent from "./Rulescontent";

import GreenBlur from "../component/GreenBlur";
import { Kanit } from "@next/font/google";
import Footer from "../component/Footer";
const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "600", "700", "100", "200"],
});

export default function page() {
  const content = [
    {
      label: "ข้อปฏิบัติในโรงเรียน",
      content: [
        "Apex Heroic Academy เป็นสถาบันปราศจากการสร้างความเกลียดชัง นักเรียนจะต้องเคารพซึ่งกันและกัน และไม่ถูกเลือกปฏิบัติอย่างไม่ยุติธรรมจากความสามารถหรือเผ่าพันธุ์",
        "การแสดงพฤติกรรมก้าวร้าว ใช้ความรุนแรง จนนำไปสู่การทะเลาะเบาะแว้งในหมู่นักเรียนด้วยกันเองจะถือว่ามีความผิด และต้องได้รับการลงโทษ",
        "การขาดเรียนโดยไม่จำเป็นถือว่ามีความผิด หากพบว่าโดดเรียนจะต้องถูกทำโทษและมีผลต่อการเลื่อนระดับพลังของตัวเอง",
        "อบายมุกทุกสิ่งอย่าง การพนัน เครื่องดื่มแอลกอฮอลล์ และสิ่งเสพติดถือว่าเป็นสิ่งยั่วยุให้กระทำการชั่วร้าย ไม่อนุญาตให้นำมายังเขตสถานศึกษาโดยเด็ดขาด",
        "นักเรียนมีอิสระในการเลือกสวมชุดตามเพศสภาพและดัดแปลงชุดนักเรียนตามความเหมาะสม แต่ต้องไม่เข้าข่ายลามกอนาจาร",
        "อนุญาตให้ย้อมสีผมหรือสวมคอนแทคเลนส์ได้",
        "อนุญาตให้สวมเครื่องประดับได้",
        "ห้ามขีดเขียนหรือทำลายทรัพย์สินของโรงเรียนเป็นอันขาด",
        "นักเรียนทุกคนจะต้องเชื่อฟังคุณครู เคารพ และให้เกียรติในฐานะผู้สอนวิชา",
        "ความปลอดภัยของโลกมาอันดับหนึ่งเสมอ หากได้ยินเสียงสัญญาณการเรียกทำภารกิจ ขอให้ละทิ้งภาระตรงหน้าและรีบไปทำหน้าที่ของตัวเองโดยด่วน",
      ],
    },
    {
      label: "ข้อปฏิบัติเพื่อความปลอดภัย",
      content: [
        "นักเรียนทุกคนจะถูกฝังชิพไว้ที่หลังต้นคอเพื่อเป็นการติดตามและยืนยันตัวตน โรงเรียนไม่อนุญาตให้นำชิพดังกล่าวออกเพื่อความปลอดภัยของนักเรียนเอง",
        "นักศึกษาจะต้องงดเว้นจากการใช้พลังวิเศษในพื้นที่สาธารณะที่อยู่นอกเขตที่กำหนด เว้นแต่นักเรียนสามารถใช้พลังของตนเพื่อการป้องกันตัวได้เมื่อถูกคุกคามหรือถูกโจมตีเท่านั้น",
        "กฎเหล็กระหว่างปฏิบัติหน้าที่ภายนอกโรงเรียน ฮีโร่จะห้ามเปิดเผยตัวตนเป็นอันขาด นักเรียนสามารถใช้นามแฝงหรือชื่อย่อได้ เนื่องจากการเปิดเผยชื่อ-นามสกุลที่แท้จริงอาจนำไปสู่ภัยอันตรายแก่ตนเอง, ครอบครัว, และคนใกล้ตัวได้",
        "นักเรียนทุกคนจะต้องใช้พลังวิเศษของตัวเองในทางชอบธรรม ไม่ใช้ความสามารถของตัวเองในการก่ออาชญากรรม หรือมีส่วนร่วมในกิจกรรมที่ก่อให้เกิดความวุ่นวายทั้งในและด้านนอกสถานศึกษา",
        "Apex Heroic Academy เป็นหนึ่งในองค์กรลับ นักเรียนและบุคลากรจะต้องไม่เปิดเผยการมีอยู่ รวมถึงหลีกเลี่ยงการสวมชุดนักเรียนออกไปด้านนอกโดยไม่จำเป็น",
        "เมื่อพบเหตุการณ์ทะเลาะวิวาทหรือเหตุการณ์บาดเจ็บ ต้องรีบแจ้งเจ้าหน้าที่ของสถานศึกษาโดยด่วน",
        "คณะครูผู้สอนสามารถใช้ดุลยพินิจในการเข้าช่วยเหลือหรือหยุดภารกิจของนักเรียนได้ ในกรณีที่มีการออกคำสั่งให้นักเรียนหยุดภารกิจ จะต้องหยุดทันทีเพื่อความปลอดภัยของตัวนักเรียนเอง",
        "นักเรียนที่มีสัตว์เลี้ยงจะต้องดูแลสวัสดิภาพของสัตว์ดังกล่าวให้ดี ไม่ให้ก่อความวุ่นวายในสถานศึกษา",
      ],
    },
  ];
  return (
    <main className="bg-secondary-400 text-white w-full relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto relative">
        <div className="absolute left-[-200px] top-[-200px]">
          <GreenBlur />
        </div>
        <div className="absolute left-[-200px] top-[1500px]">
          <GreenBlur />
        </div>
        <div className="absolute right-[-200px] top-[1000px]">
          <GreenBlur />
        </div>
        <Navbar />
        <div className="container mx-auto md:border-x border-faded">
          <div className={kanit.className}>
            <Ruleshero />
            {content.map((item) => (
              <Rulescontent
                key={item.label}
                label={item.label}
                data={item.content}
              />
            ))}
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
