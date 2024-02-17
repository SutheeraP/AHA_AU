import React from "react";
import Maincourse from "../Maincourse";
import Classcard from "../Classcard";
import Labelmobile from "../Labelmobile";

export default function page() {
  const classContent = [
    {
      th: "คณิตศาสตร์และการคำนวณ",
      en: "Mathematics and calculations",
      detail:
        "เสียใจด้วยที่แม้คุณจะต้องกู้โลก แต่ก็หนีไม่พ้นวิชาเลขอยู่ดี ในวิชานี้นักเรียนจะเรียนการคำนวนเป็นหลัก เพื่อนำมาปรับใช้และพัฒนาพลังของตัวเองให้เก่งขึ้นในหลักทางตรรกะศาสตร์ หรือการคิดวิเคราะห์อย่างมีหลักการ ",
      icon: "/sample-class.svg",
    },
    {
      th: "วิทยาศาสตร์",
      en: "Science laboratory",
      detail:
        "ในยุคที่เทคโนโลยีเป็นส่วนหนึ่งของชีวิตประจำวัน วิชาวิทยาศาสตร์จึงกลายเป็นวิชาบังคับให้เหล่าซุปเปอร์ฮีโร่ต้องเรียน ภายในโรงเรียนมีห้องแลป ห้องทดลอง และสถานที่จำลองเสมือนจริงให้นักเรียนได้เรียนรู้เพื่อต่อยอดพลังของตัวเอง แน่นอนว่าอยู่ภายใต้การดูแลของคุณครูและผู้เชี่ยวชาญ  ",
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
      th: "จิตวิทยาของผู้ร้าย",
      en: "Villain psychology",
      detail:
        "รู้เขารู้เรารบร้อยครั้งชนะร้อยครั้ง ฮีโร่จะถูกสอนให้เข้าใจและวางกลยุทธ์ในการเอาชนะเหล่าร้ายโดยใช้จิตวิทยา วิชานี้อาจจะต้องปวดสมองกันสักหน่อย เพราะบางทีหัวใจของเหล่าร้ายก็ยากเกินกว่าที่คนทั่วไปหรือแม้แต่ฮีโร่เองจะเข้าใจ ",
      icon: "/sample-class.svg",
    },
    {
      th: "กลยุทธิ์ทางยุทธวิถี",
      en: "Tactical strategy",
      detail:
        "เรียนรู้ที่จะเอาชนะศัตรูด้วยมันสมองและกลยุทธ์ในการวางแผนต่อสู้เพราะกำลังและความรุนแรงอาจไม่ใช่คำตอบเสมอไป นักเรียนจะได้เรียนรู้ทักษะในการตัดสินใจ และการปรับตัวในสถานการณ์การต่อสู้รูปแบบต่าง ๆ ",
      icon: "/sample-class.svg",
    },
  ];

  const content = (
    <>
      <Labelmobile icon="/lecture.svg" label='วิชาทฤษฎี'/>
      <div className="grid md:grid-cols-2 gap-4 md:pb-0">
        {classContent.map((classContent) => (
          <Classcard
            key={classContent.en}
            th={classContent.th}
            en={classContent.en}
            icon="/book.svg"
            detail={classContent.detail}
          ></Classcard>
        ))}
       
      </div>
       <div className="text-xs text-faded text-center py-16">วิชาที่กล่าวถึงเป็นเพียงตัวอย่างเท่านั้น ผู้เล่นสามารถอ้างอิงถึงวิชาอื่นได้</div>
    </>
  );

  return (
    <>
      <Maincourse content={content} />
    </>
  );
}
