import React from "react";

const Shopsection = () => {
  const classContent = "text-xs font-light pb-4 md:text-sm";
  return (
    <div>
      <div className="flex flex-col min-h-screen py-20 position relative">
        <div className="my-auto relative w-full">
          <div className="w-40 h-40 md:w-80 md:h-80 border border-[#fff6] rounded-full absolute top-[80%] md:top-[50%] left-[65%]"></div>
          <div className="md:w-4/5">
            <div className="text-lg md:text-2xl font-semibold border-b border-faded w-fit pb-5 mb-5 tracking-wider md:tracking-widest">
              ร้านค้าปริศนา
            </div>
            <div className={classContent}>
              เหตุร้ายไม่เลือกสถานที่และเวลาเกิด
              แต่จะทำยังไงให้เหล่าฮีโร่ไปถึงสถานที่เกิดเหตุก่อนที่ทุกอย่างจะพังพินาศ
              ?
            </div>
            <div className={classContent}>
              เรื่องนั้นไม่ต้องห่วง !
              ในยุคสมัยที่เทคโนโลยีได้ก้าวเข้าสู่ยุครุ่งเรือง Apex Heroic
              Academy
              ได้รับการสนับสนุนนวัตกรรมการเคลื่อนย้ายมวลสารขนาดใหญ่ที่เรียกว่า
              ‘ประตูเทเลพอร์ต’
              ด้วยประตูนี้มันสามารถนำคุณไปยังจุดหมายปลายทางที่ไหนก็ได้บนโลก
              โดยใช้เวลาไม่ถึงเสี้ยววินาที แม้ ‘ประตูเทเลพอร์ต’
              ยังไม่ได้ถูกประกาศสู่สายตาประชาชนอย่างเป็นทางการ
              แต่ในยุคปัจจุบันรัฐบาลได้นำมันมาใช้ในการทำภารกิจลับมาแล้วนับไม่ถ้วน
            </div>
            <div className={classContent}>
              ไม่น่าเชื่อว่าเทคโนโลยีไฮเทคอย่างการเทเลพอร์ตจะอยู่ภายใต้จมูกของประชาชนเพียงชั่วคืบ
              เพราะที่ผ่านมามันถูกปิดบังอยู่ในรูปแบบร้านขายของชำแบรนด์ดัง
              ที่ชื่อว่า
              <span className="font-normal"> ‘PunnyPuddle’</span>
            </div>
            <div className={classContent}>
              <span className="font-normal">‘PunnyPuddle’ </span>
              เป็นร้านค้าที่ถูกก่อตั้งโดยรัฐบาลขึ้นมาเฉพาะกิจ
              ไม่ได้มีไว้เพื่อขายของโชห่วย
              แต่ให้เหล่านักเรียนจากสถาบันลับได้เคลื่อนย้ายไปมาได้สะดวกด้วยการซ่อนประตูเทเลพอร์ตไว้หลังร้าน
              ตามตู้แช่สินค้า หรือกระทั่งหลังแคชเชียร์
              ร้านพันนีพัดเดิลเป็นร้านค้าที่กระจายสาขาอยู่ทั่วอเมริกา
              มีจำนวนไม่ต่ำกว่า 30,000 สาขาเลยทีเดียว !
            </div>
            <div className={classContent}>
              เหล่าฮีโร่อาจจะต้องระวังตัวหน่อยเวลาที่รีบวิ่งออกมาจากร้าน
              ไม่อย่างนั้นประชาชนอาจตั้งข้อสงสัยว่าทำไมเหล่ายอดมนุษย์ถึงมีขนมติดมือมาทุกครั้งที่มากู้โลก
              ?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopsection;
