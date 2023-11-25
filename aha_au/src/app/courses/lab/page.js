import React from "react";
import Maincourse from "../Maincourse";
import Classcard from "../Classcard";
import Labelmobile from "../Labelmobile";

export default function page() {
  const superDetail = (
    <div>
      วิชาที่สอนให้นักเรียนเข้าใจ ควบคุม
      และเพิ่มพูลพลังพิเศษที่มีเอกลักษณ์ของแต่ละบุคคล
      นักเรียนจะได้เรียนรู้ขอบเขตของตัวเองในการใช้พลัง
      วิชาการฝึกซ้อมพลังวิเศษถือว่าเป็นวิชาสุดหินสำหรับนักเรียนหลายคน
      เนื่องจากมีเกณฑ์การสอบที่ยากและท้าทายสุด ๆ<br></br>
      <br></br>
      ด้วยความเชื่อที่ว่าฮีโร่ทุกคนย่อมมีเอกลักษณ์และพลังเฉพาะตัว
      นอกเหนือจากนี้วิชาดังกล่าวยังมีจุดประสงค์ในการช่วยเหลือนักเรียนให้ปลดล็อคความสามารถที่ยังหลับใหลอยู่
      รวมถึงค้นหาตัวตนที่แท้จริง
    </div>
  );
  const fieldDetail = (
    <div>
      วิชาที่นักเรียนทุกคนต่างเฝ้ารอคอย
      เพราะจะได้นำวิชาที่เรียนและพลังของตัวเองไปโลดแล่นบนโลกมนุษย์ที่แท้จริง
      พวกเขาจะถูกมอบหมายงานทั้งแบบเดี่ยวและแบบกลุ่ม
      เพื่อออกไปปฏิบัติหน้าที่ภายนอกโรงเรียน
      <br></br>
      <br></br>
      วิชานี้ส่วนใหญ่สอบเก็บคะแนนจากการออกไปทำภารกิจนอกสถานที่
      โดยอยู่ในความดูแลของครูผู้ฝึกสอน ภารกิจที่ได้รับจะค่อนข้างง่ายไปถึงปานกลาง อาทิ
      <br></br>
      <br></br>
      <ul className="list-disc ml-4">
        <li>การจับโจรปล้นธนาคาร</li>
        <li>ช่วยเหลือทางภัยพิบัติ</li>
        <li>จัดการกับนักเลงและอันธพาลในเมือง</li>
      </ul>
    </div>
  );
  const classContent = [
    {
      th: "การฝึกซ้อมพลังวิเศษ",
      en: "Superpower training",
      detail: superDetail,
      icon: "/sample-class.svg",
    },
    {
      th: "ศิลปะการต่อสู้",
      en: "Martial arts",
      detail:
        "ในกรณีที่คับขันหรือมีเหตุจำเป็นที่ก่อให้เกิดความเสี่ยงในการใช้พลังวิเศษ หรือบางทีพลังวิเศษใช้ไม่ได้ผล ? ศิลปะการต่อสู้เป็นวิชาจำเป็นที่ซุปเปอร์ฮีโร่ทุกคนต้องมีติดตัวไว้เป็นความรู้ ศิลปะการต่อสู้ที่สอนมีหลากหลาย แล้วแต่ครูประจำวิชาและผู้ฝึกอบรมจะสอนในคลาสนั้นๆ อาทิ คาราเต้, คาโปเอร่า หรือต่อยมวย",
      icon: "/sample-class.svg",
    },
    {
      th: "จริยธรรมและคุณธรรมของซุปเปอร์ฮีโร่",
      en: "Ethics and morality",
      detail:
        "คุณสมบัติเบื้องต้นของฮีโร่คือการเป็นคนดี ในวิชานี้จะส่งเสริมสำนึกด้านจริยธรรมและความรับผิดชอบ โดยเน้นความสำคัญของการใช้พลังวิเศษของตัวเองเพื่อจุดประสงค์อันดีงาม เรียนรู้การตัดสินใจโดยยึดหลักคุณธรรมเพื่อปกป้องประโยชน์ของโลกและส่วนรวม",
      icon: "/sample-class.svg",
    },
    {
      th: "การปฐมพยาบาลและอบรมทางการแพทย์",
      en: "First aid and medical training",
      detail:
        "ฮีโร่บางคนก็เกิดมาพร้อมกับความสามารถในการรักษา แต่สำหรับคนที่ไม่มี พวกเขาเองก็ต้องรู้วิธีการปฐมพยาบาลเบื้องต้นให้กับเหยื่อ หรือประชาชนที่บาดเจ็บหรือโดนลูกหลงจากวายร้าย",
      icon: "/sample-class.svg",
    },
    {
      th: "วิชาภาคสนาม",
      en: "Field study",
      detail: fieldDetail,
      icon: "/sample-class.svg",
    },
  ];

  const content = (
    <>
    <Labelmobile icon='/lab.svg'/>
    <div className="grid md:grid-cols-2 gap-4 pb-24 md:pb-0">
      {classContent.map((classContent) => (
        <Classcard
        key={classContent.en}
          th={classContent.th}
          en={classContent.en}
          icon={classContent.icon}
          detail={classContent.detail}
        ></Classcard>
      ))}
    </div>
    </>
  );

  return (
    <>
      <Maincourse content={content} />
    </>
  );
}
