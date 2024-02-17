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

      <div className="grid md:grid-cols-3 gap-4 mb-12">
        {contentMission.map((item) => (
          <div
            key={item.label}
            className="border border-primary rounded-[30px] px-5 py-8"
          >
            <div className="text-center text-faded text-sm">Level</div>
            <div className="text-center text-3xl border-b border-faded pb-8 mb-8">
              {item.label}
            </div>
            <ul className="list-disc pl-4 text-xs font-light">
              {item.content.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Cardtoggle
            icon="./mission.svg"
            label="ขอบเขตการช่วยเหลือ"
            data={
              <div>
                ภารกิจที่ได้รับจะเป็นการมอบหมายจากทางโรงเรียนนั้นไม่สามารถเลือกได้เอง โดยส่วนใหญ่จะคัดความเหมาะสมของความยากง่ายจากระดับของฮีโร่แต่ละคน บางครั้งก็ได้รับมอบหมายเป็นทีมสุ่ม หรือบางครั้งก็เป็นการฉายเดี่ยว ส่วนใหญ่จะทำภารกิจบนโลก แต่หากมีความจำเป็นก็สามารถออกทำภารกิจที่นอกโลกหรือมิติอื่นได้เช่นกัน ผู้เข้าร่วมแท็กสามารถสมมุติภารกิจขึ้นเอาเองได้
                <br></br>
                <br></br>
                <span className="font-semibold">หมายเหตุ : </span>
                 กำหนดภารกิจให้อยู่ในประเทศอเมริกาเท่านั้น
              </div>
            }
          />
        </div>
        <div>
          <Cardtoggle
            icon="./mission.svg"
            label="การจบภารกิจ"
            data={
              <div className="grid gap-4">
                <div>
                  ภารกิจของเหล่าฮีโร่จะถูกสังเกตการณ์อยู่เสมอจากคณะครูผู้ฝึกสอนและคนของรัฐบาล
                  คุณมีหน้าที่จัดการกับเหล่าร้ายให้พวกมันยอมถอยกลับไปจากที่ ๆ
                  มันมาตามดุลยพิจิ หรือตามคำบัญชาที่เบื้องบนส่งมา เช่น
                </div>
                <div>
                  <ul className="list-disc pl-4">
                    <li>จบชีวิตของพวกมัน</li>
                    <li>ส่งกลับมิติต้นกำเนิด</li>
                    <li>ส่งให้ตำรวจ</li>
                    <li>สั่งสอนให้กลายเป็นคนดี</li>
                    <li>ส่งให้รัฐจัดการต่อ</li>
                    <li>พูดให้กลับใจเป็นยอดมนุษย์</li>
                  </ul>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Examplesection;
