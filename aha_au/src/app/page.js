import Image from "next/image";
import Navbar from "./component/Navbar";
import GreenBlur from "./component/GreenBlur";
import Herosection from "./component/Herosection";
import Footer from "./component/Footer";
import { Kanit } from "@next/font/google";
import StarsCanvas from "./component/StarComponent";
const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "600", "700"],
});

export default function Home() {
  return (
    <main className="bg-secondary-400 text-white overflow-hidden relative">
      <StarsCanvas/>
      <div className="max-w-screen-xl mx-auto relative">
        <div className="absolute left-[-200px] top-[-200px]">
          <GreenBlur />
        </div>
        <div className="absolute left-[-200px] top-[1500px]">
          <GreenBlur />
        </div>
        <div className="absolute right-[-100px] top-[600px]">
          <GreenBlur />
        </div>
        <div className="absolute right-[-200px] top-[2400px]">
          <GreenBlur />
        </div>
        <Navbar />
        <Herosection />

        <div className={kanit.className}>
          <div className="container mx-auto px-4 lg:px-60 text-sm pt-32 text-center font-light">
            <div className="py-12">
              ในปี 2096 โลกมนุษย์ได้มีการพัฒนาของเทคโนโลยีสู่จุดสูงสุด
              จนสามารถเปิดประตูปริศนาเพื่อติดต่อสื่อสารกับสิ่งมีชีวิตต่างมิติและสิ่งมีชีวิตจากนอกโลกได้อย่างเป็นทางการ
              แต่การค้นพบดังกล่าวกลับกลายเป็นดาบสองคม
              เพราะมันไม่ต่างอะไรกับการเปิดประตูนรกให้พวกมันเข้ามาแย่งชิงทรัพยากรและเบียดเบียนมนุษย์โลก{" "}
            </div>
            <div className="h-24 w-[0.5px] mx-auto bg-faded my-12"></div>
            <div className="py-12">
              รัฐบาลจำเป็นต้องแก้ไขปัญหานี้โดยด่วน
              จึงจัดตั้งหน่วยงานพิเศษขึ้นมาในชื่อ “Apex”
              เพื่อเสาะหามนุษย์และสิ่งมีชีวิตอื่น ๆ
              ที่พร้อมจะเข้าร่วมอุดมการณ์ในการปกป้องประชาชนให้ปลอดภัย ไม่ว่าจะเป็นเผ่าไหน หรือตัวอะไรก็ตาม
              เราต้องรีบพาตัวเข้ามาร่วมกับพวกเรา !
            </div>
            <div className="h-24 w-[0.5px] mx-auto bg-faded my-12"></div>
            <div className="py-12">
              ประตูดังกล่าวที่ถูกเปิดออกคือประตูมิติที่สามารถเชื่อมกับทั้ง 4 ภพ
              ได้แก่ โลกมนุษย์, โลกหลังความตาย, จักรวาลภพ, และภพของเวทมนต์
              การเปิดประตูดังกล่าวทำให้สิ่งมีชีวิตในทุกภพสามารถเข้าออกได้อิสระ
              ไร้การควบคุม
              และรวมถึงผู้ประสงค์ร้ายที่ต้องการยึดครองโลกมนุษย์ให้เป็นหนึ่งกับโลกที่ไร้ศีลธรรม
            </div>
            <div className="h-24 w-[0.5px] mx-auto bg-faded my-12"></div>
            <div className="py-12">
              การแฝงตัวของมนุษย์ต่างดาวและสิ่งมีชีวิตปริศนาเกิดขึ้นบนโลกมนุษย์มาโดยตลอด
              ตั้งแต่สมัยโบราณ อาจเป็นคนที่เดินสวนกันเมื่อวาน
              หรือเป็นคนแปลกหน้าที่คุณเคยเจอเมื่อหลายวันก่อน กลุ่มคนพวกนี้รักสงบ
              ไม่เปิดเผยตัวตน และเก็บตัวสมถะมาโดยตลอด ไม่เว้นแม้แต่ในปี 2099
              พวกเขาก็ยังไม่ปรากฎตัวให้คนอื่นเห็น
            </div>
            <div className="h-[0.5px] w-36 mx-auto bg-faded mt-60 mb-12"></div>
            <div className="pb-6">
              #AHA_AU เป็นแท็กวาดรูป
              และจักรวาลใหม่ที่ถูกคิดขึ้นเองโดยไม่พาดพิงไทม์ไลน์สื่อออนไลน์
              การ์ตูน หรือเกมที่เคยมีมาก่อน
              ผู้เล่นสามารถคิดค้นความทันสมัยของเทคโนโลยีได้อย่างหลากหลาก
              สามารถอิงจากสิ่งที่เคยปรากฎมาก่อน
              หรือจะเป็นสิ่งที่คิดขึ้นมาใหม่เองได้
            </div>
            <div>
              อย่างไรก็ตามควรคำนึงถึงความเหมาะสมว่าสิ่งของดังกล่าวไม่กระทบภาพรวมหรือหลุด
              Setting มากจนเกินไป
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
