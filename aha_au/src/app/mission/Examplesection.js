import Image from "next/image";
import React from "react";
import Cardtoggle from "../component/Cardtoggle";

const Examplesection = () => {
  const contentMission = [
    {
      label: "F",
      content: [
        "ปกป้องเด็กประถมจากการถูกรังแก",
        "การโจรกรรม",
        "ช่วยเหลือตัวประกัน",
        "อพยพผู้คน",
        "จัดการพื้นที่หลังจบภารกิจ",
        "ดูแลความปลอดภัยในพื้นที่เสี่ยงน้อย เช่น งานเลี้ยงประจำเมือง",
      ],
    },
    {
      label: "A-B-C",
      content: [
        "ภัยพิบัติทางธรรมชาติ",
        "ผู้ร้ายแหกคุก",
        "การก่อจลาจลโดยผู้ไม่หวังดี",
        "ช่วยเหลือผู้คนจากเหตุการณ์ไฟไหม้",
        "จัดการกับผู้ร้าย / ภัยจากมิติอื่น : ระดับง่าย",
        "โจรปล้นธนาคาร",
        "จัดการกับสิ่งมีชีวิตจากมิติอื่นที่เล็ดลอดออกมาทางประตูมิติ",
        "ต่อสู้กับเอเลี่ยน : ระดับง่าย - ปานกลาง",
      ],
    },
    {
      label: "SS-S",
      content: [
        "การรุกรานของสัตว์ต่างดาวขนาดใหญ่",
        "การรับมือกับอาวุธทางเทคโนโลยีจากต่างดาว",
        "จัดการกับสิ่งเหนือธรรมชาติที่มีผลมหาศาลกับมนุษย์ทั้งเมือง",
        "การครองโลกจากผู้ประสงค์ร้าย",
        "ภัยคุกคามจากมิติอื่น ที่มีการรวมกลุ่มกันมากกว่า 50 คนเป็นต้นไป",
        "วายร้ายครองโลก",
        "เป็นบอดี้การ์ดให้กับบุคคลสำคัญ",
      ],
    },
  ];
  return (
    <div className="py-20">
      <div className="flex justify-center">
        <Image width={50} height={50} src="./mission.svg" alt="mision icon" />
      </div>
      <div className="flex justify-center mb-12 md:text-2xl md:tracking-widest">
        ตัวอย่างภารกิจ
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-16 xl:gap-32 mb-12">
        {contentMission.map((item) => (
          <div className="border border-primary rounded-[30px] px-5 py-16">
            <div className="text-center text-faded text-sm">Level</div>
            <div className="text-center text-2xl border-b border-faded pb-12 mb-12">
              {item.label}
            </div>
            <ul className="list-disc pl-4 text-xs font-light">
              {item.content.map((list) => (
                <li>{list}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Cardtoggle
        icon="./mission.svg"
        label="ขอบเขตการช่วยเหลือ"
        data="ภารกิจที่ได้รับจะเป็นการมอบหมายจากทางโรงเรียนนั้นไม่สามารถเลือกได้เอง โดยส่วนใหญ่จะคัดความเหมาะสมของความยากง่ายจากระดับของฮีโร่แต่ละคน บางครั้งก็ได้รับมอบหมายเป็นทีมสุ่ม หรือบางครั้งก็เป็นการฉายเดี่ยว ส่วนใหญ่จะทำภารกิจบนโลก แต่หากมีความจำเป็นก็สามารถออกทำภารกิจที่นอกโลกหรือมิติอื่นได้เช่นกัน ผู้เข้าร่วมแท็กสามารถสมมุติภารกิจขึ้นเอาเองได้"
      />
    </div>
  );
};

export default Examplesection;
