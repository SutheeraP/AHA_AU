"use client";

import React, { useState } from "react";
import Navbar from "../component/Navbar";
import GreenBlur from "../component/GreenBlur";
import { Kanit } from "@next/font/google";
import Footer from "../component/Footer";
import Labelmobile from "../courses/Labelmobile";
const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "600", "700", "100", "200"],
});

export default function Page() {
  const [current, setCurrent] = useState("main");
  const navigate = [
    {
      label: "อาคารเรียนหลัก",
      tag: "main",
      iconLabel: "/mainPlace.svg",
      icon: (
        <div>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
            fill={`${current === "main" ? "#1BB76C" : "#ADB7BE"}`}
          >
            <path d="M18.7498 2.08331H6.24984C5.10088 2.08331 4.1665 3.01769 4.1665 4.16665V21.875C4.1665 22.1512 4.27625 22.4162 4.4716 22.6115C4.66695 22.8069 4.9319 22.9166 5.20817 22.9166H19.7915C20.0678 22.9166 20.3327 22.8069 20.5281 22.6115C20.7234 22.4162 20.8332 22.1512 20.8332 21.875V4.16665C20.8332 3.01769 19.8988 2.08331 18.7498 2.08331ZM18.7498 20.8333H6.24984V4.16665H18.7498V20.8333Z" />
            <path d="M8.3335 6.25H11.4585V8.33333H8.3335V6.25ZM13.5418 6.25H16.6668V8.33333H13.5418V6.25ZM8.3335 10.4167H11.4585V12.5H8.3335V10.4167ZM13.5418 10.449H16.6668V12.5H13.5418V10.449ZM8.3335 14.5833H11.4585V16.6667H8.3335V14.5833ZM13.5418 14.5833H16.6668V16.6667H13.5418V14.5833Z" />
          </svg>
        </div>
      ),
      detail:
        "เป็นอาคารที่มีขนาดกลางแต่มีความสำคัญที่สุด เป็นพื้นที่จัดกิจกรรมและเป็นห้องเรียนหลักสำหรับเหล่าฮีโร่ ใช้ระบบเดินเรียนระหว่างเปลี่ยนคาบ มีทั้งหมด 3 ชั้นด้วยกัน ใช้ลิฟต์แก้วที่มีความทันสมัยและเร็วสูงในการเคลื่อนที่ระหว่างชั้นเรียน",
    },
    {
      label: "อาคารกิจกรรม",
      tag: "activity",
      iconLabel: "/activity.svg",
      icon: (
        <div>
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill={`${current === "activity" ? "#1BB76C" : "#ADB7BE"}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23.4415 11.3281L22.6101 10.4968L23.1901 9.88534C23.3456 9.72987 23.4233 9.55547 23.4233 9.36213C23.4233 9.1688 23.3456 8.9944 23.1901 8.83892L20.1608 5.80963C20.0054 5.65416 19.831 5.57642 19.6376 5.57642C19.4443 5.57642 19.2699 5.65416 19.1144 5.80963L18.503 6.38963L17.6415 5.52809L18.3157 4.82363C18.6701 4.46919 19.1047 4.2968 19.6195 4.30647C20.1334 4.31694 20.5676 4.4994 20.9221 4.85384L24.1459 8.07767C24.5004 8.43212 24.6776 8.86148 24.6776 9.36576C24.6776 9.87004 24.5004 10.2994 24.1459 10.6538L23.4415 11.3281ZM10.6839 24.1159C10.3294 24.4703 9.90006 24.6475 9.39579 24.6475C8.89151 24.6475 8.46215 24.4703 8.1077 24.1159L4.97812 20.9863C4.60757 20.6157 4.42229 20.155 4.42229 19.604C4.42229 19.053 4.60757 18.5926 4.97812 18.2228L5.55812 17.6416L6.41966 18.5032L5.83241 19.0844C5.67775 19.2399 5.60041 19.4143 5.60041 19.6076C5.60041 19.8009 5.67775 19.9753 5.83241 20.1308L8.86895 23.1673C9.02443 23.322 9.19883 23.3993 9.39216 23.3993C9.58549 23.3993 9.7599 23.322 9.91537 23.1673L10.4954 22.5801L11.3581 23.4416L10.6839 24.1159ZM22.4446 15.8944L23.8185 14.5205C23.9731 14.3658 24.0505 14.1878 24.0505 13.9864C24.0505 13.785 23.9731 13.607 23.8185 13.4523L15.5474 5.1813C15.3927 5.02663 15.2147 4.9493 15.0133 4.9493C14.8119 4.9493 14.6339 5.02663 14.4792 5.1813L13.1054 6.55518C12.9507 6.70984 12.8734 6.88424 12.8734 7.07838C12.8734 7.27172 12.9507 7.44572 13.1054 7.60038L21.3994 15.8944C21.554 16.0491 21.728 16.1264 21.9214 16.1264C22.1147 16.1264 22.2891 16.0491 22.4446 15.8944ZM14.5203 23.8186L15.8942 22.4375C16.0489 22.2828 16.1262 22.1088 16.1262 21.9155C16.1262 21.7222 16.0489 21.5478 15.8942 21.3923L7.60745 13.1055C7.45279 12.9509 7.27838 12.8736 7.08425 12.8736C6.89091 12.8736 6.71691 12.9509 6.56225 13.1055L5.18112 14.4794C5.02645 14.6341 4.94912 14.8121 4.94912 15.0135C4.94912 15.2149 5.02645 15.3929 5.18112 15.5476L13.4522 23.8186C13.6068 23.9733 13.7849 24.0506 13.9862 24.0506C14.1876 24.0506 14.3657 23.9733 14.5203 23.8186ZM13.666 17.4459L17.453 13.6662L15.3335 11.5468L11.5539 15.3337L13.666 17.4459ZM15.3601 24.6729C14.9896 25.0435 14.5316 25.2288 13.9862 25.2288C13.4409 25.2288 12.9829 25.0435 12.6124 24.6729L4.32683 16.3874C3.95627 16.0168 3.771 15.5589 3.771 15.0135C3.771 14.4681 3.95627 14.0102 4.32683 13.6396L5.6995 12.244C6.07005 11.8735 6.53083 11.6882 7.08183 11.6882C7.63283 11.6882 8.0932 11.8735 8.46295 12.244L10.6911 14.4722L14.4792 10.6841L12.2499 8.46313C11.8793 8.09258 11.694 7.63099 11.694 7.07838C11.694 6.52497 11.8793 6.06338 12.2499 5.69363L13.6467 4.2968C14.0173 3.92624 14.478 3.74097 15.029 3.74097C15.58 3.74097 16.0404 3.92624 16.4102 4.2968L24.703 12.5896C25.0735 12.9601 25.2588 13.4209 25.2588 13.9719C25.2588 14.5229 25.0735 14.9833 24.703 15.3531L23.3061 16.7499C22.9356 17.1204 22.474 17.3057 21.9214 17.3057C21.3688 17.3057 20.9072 17.1204 20.5366 16.7499L18.3157 14.5205L14.5276 18.3086L16.7557 20.5368C17.1263 20.9074 17.3116 21.3677 17.3116 21.9179C17.3116 22.4681 17.1263 22.9289 16.7557 23.3003L15.3601 24.6729Z" />
          </svg>
        </div>
      ),
      detail:
        "อาคารกิจกรรมเป็นอาคารที่มีขนาดใหญ่มากที่สุด เพื่อใช้สำหรับทำกิจกรรมที่ต้องใช้พื้นที่กว้าง มีทั้งหมด 6 ชั้น รวมชั้นใต้ดิน ใช้ลิฟต์แก้วที่มีความทันสมัยและเร็วสูงในการเคลื่อนที่ระหว่างชั้นเรียน ห้องประจำชมรมส่วนใหญ่สามารถพบเจอได้ที่นี่",
    },
    {
      label: "อาคารหอพักนักเรียน",
      tag: "dorm",
      iconLabel: "/dorm.svg",
      icon: (
        <div>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke={`${current === "dorm" ? "#1BB76C" : "#ADB7BE"}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.7918 20.8334V19.2709M5.2085 20.8334V19.2709"
              stroke-width="1.5625"
              stroke-linecap="round"
            />
            <path
              d="M21.8752 12.5C21.8752 8.5719 21.8752 6.60731 20.6543 5.38752C19.4345 4.16669 17.47 4.16669 13.5418 4.16669H11.4585C7.53037 4.16669 5.56579 4.16669 4.346 5.38752C3.12516 6.60731 3.12516 8.5719 3.12516 12.5M2.0835 15.625C2.0835 14.6542 2.0835 14.1688 2.24183 13.7865C2.34653 13.5335 2.50005 13.3037 2.69362 13.1101C2.8872 12.9166 3.11702 12.7631 3.36995 12.6584C3.75225 12.5 4.23766 12.5 5.2085 12.5H19.7918C20.7627 12.5 21.2481 12.5 21.6304 12.6584C21.8833 12.7631 22.1131 12.9166 22.3067 13.1101C22.5003 13.3037 22.6538 13.5335 22.7585 13.7865C22.9168 14.1688 22.9168 14.6542 22.9168 15.625C22.9168 16.5959 22.9168 17.0813 22.7585 17.4636C22.6538 17.7165 22.5003 17.9463 22.3067 18.1399C22.1131 18.3335 21.8833 18.487 21.6304 18.5917C21.2481 18.75 20.7627 18.75 19.7918 18.75H5.2085C4.23766 18.75 3.75225 18.75 3.36995 18.5917C3.11702 18.487 2.8872 18.3335 2.69362 18.1399C2.50005 17.9463 2.34653 17.7165 2.24183 17.4636C2.0835 17.0813 2.0835 16.5959 2.0835 15.625Z"
              stroke-width="1.5625"
            />
            <path
              d="M19.2712 12.5V10.9375C19.2712 8.97296 19.2712 7.99171 18.6607 7.38129C18.0503 6.77087 17.0691 6.77087 15.1045 6.77087H9.89616C7.93158 6.77087 6.95033 6.77087 6.33991 7.38129C5.72949 7.99171 5.72949 8.97296 5.72949 10.9375V12.5M12.5003 7.29171V12.5"
              stroke-width="1.5625"
            />
          </svg>
        </div>
      ),
      detail: "",
    },
    {
      label: "สถานที่อื่น ๆ",
      tag: "etc",
      iconLabel: "/etcPlace.svg",
      icon: (
        <div>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill={`${current === "etc" ? "#1BB76C" : "#ADB7BE"}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.4481 16.0937C15.0731 15.5208 14.771 14.9896 14.4897 14.5C13.271 12.4062 12.2814 10.9896 9.37516 10.5521V5.72915C9.37516 3.71873 7.73975 2.08331 5.72933 2.08331C3.71891 2.08331 2.0835 3.71873 2.0835 5.72915V22.9166H4.16683V20.8333H7.29183V22.9166H9.37516V12.6666C11.2085 13.0208 11.7606 13.9479 12.6772 15.5416C12.9793 16.0729 13.3127 16.6354 13.7189 17.25C16.0522 20.75 18.4064 22.9166 22.9168 22.9166V20.8333C19.3022 20.8333 17.5002 19.1666 15.4481 16.0937ZM5.72933 4.16665C6.59391 4.16665 7.29183 4.86456 7.29183 5.72915V10.4166H4.16683V5.72915C4.16683 4.86456 4.86475 4.16665 5.72933 4.16665ZM4.16683 18.75V16.6666H7.29183V18.75H4.16683ZM7.29183 14.5833H4.16683V12.5H7.29183V14.5833Z" />
          </svg>
        </div>
      ),
      detail: "สถานที่บริเวณรอบนอกตัวอาคาร",
    },
  ];

  const places = [
    {
      label: "โถงทางเดินใหญ่",
      tag: "main",
      detail:
        "เมื่อเดินเข้าประตูมาจะพบกับโถงทางเดินขนาดใหญ่เป็นอย่างแรก รอบข้างตกแต่งด้วยศิลปะสไตล์ Minimalism มีทางแยกให้เดินไปตามห้องเรียนและบริเวณอื่นในอาคาร บริเวณนี้ไม่ค่อยมีประโยชน์สำหรับใช้สอยอะไรมาก นอกจากให้นักเรียนเดินสวนกัน และมีจอขนาดใหญ่ติดตั้งบนผนังสำหรับประชาสัมพันธ์ข่าวสาร",
    },
    {
      label: "ห้องประชุม ",
      tag: "main",
      detail:
        "ห้องประชุมสำหรับจัดกิจกรรมในร่ม มีขนาดกว้างมากพอที่จะจุเหล่าฮีโร่ทั้งโรงเรียนได้ มักใช้ในงานหรือพิธีการสำคัญที่ผู้อำนวยการเป็นผู้จัดโดยเฉพาะ อาทิ พิธีเปิดการศึกษา งานเลี้ยง และงานสังคมทั่วไป",
    },
    {
      label: "ห้องเรียน",
      tag: "main",
      detail:
        "ห้องเรียนขนาดใหญ่ การออกแบบของห้องเรียนใกล้เคียงกับห้องเรียนของมหาวิทยาลัย ที่จะมีอาจารย์ผู้สอนอยู่ตรงกลาง พร้อมจอกว้างที่ใช้เป็นสื่อการเรียนการสอน ",
    },
    {
      label: "ห้องพักครู",
      tag: "main",
      detail: "ที่ประจำการของครูผู้สอนทุกท่าน",
    },
    {
      label: "ห้องทดลองแล็ปวิทยาศาสตร์ ",
      tag: "main",
      detail:
        "ห้องแลปวิทยาศาสตร์นอกจากจะใช้สำหรับเรียนแล้ว ยังเป็นสถานที่สำหรับทำการวิจัยเรื่องสิ่งมีชีวิตประเภทต่าง ๆ ในโรงเรียนโดยเฉพาะ ที่นี่ถูกดูแลและควบคุมโดยนักวิทยาศาสตร์ที่เป็นมนุษย์และ AI ตลอด 24 ชั่วโมง เพื่อป้องกันเหตุร้ายหรือการเล่นแผลง ๆ ของนักเรียน ",
    },
    {
      label: "ห้องฝึกซ้อม",
      tag: "main",
      detail: (
        <div>
          ใช้สำหรับเรียน และฝึกซ้อมส่วนตัวของนักเรียน
          ห้องฝึกซ้อมมีขนาดกว้างและจำนวนที่มากเพื่อตอบสนองความต้องการในการฝึกฝนฝีมือ
          ลักษณะห้องจะเป็นห้องสี่เหลี่ยมผืนผ้า ด้านบนมีห้องสังเกตการณ์อยู่
          สามารถมองผ่านกระจกลงมาได้
          <br></br>
          <br></br>
          ในการเลือกสถานที่ฝึกซ้อมจะมีการนำเทคโนโลยี Augmented Reality มาช่วย
          ทั้งการจำลองเหตุการณ์ สถานที่
          รวมถึงเหล่าร้ายให้ตัวผู้ฝึกซ้อมได้สัมผัสประสบการณ์ที่สมจริงที่สุด
        </div>
      ),
    },
    {
      label: "ห้องสมุด",
      tag: "main",
      detail:
        "ความรู้บางอย่างก็ไม่สามารถสืบค้นได้จากโลกอินเตอร์เน็ต ห้องสมุดโรงเรียนเปิดตลอด 24 ชั่วโมงให้เหล่าฮีโร่เข้ามาอ่านหนังสือ ติวสอบ หรือแม้กระทั่งเป็นสถานที่แอบหลับ ",
    },
    {
      label: "ห้องสันทนาการ",
      tag: "main",
      detail:
        "พื้นที่สำหรับให้นักเรียนที่มีเวลาว่างเข้ามาพักผ่อนหย่อนใจ ข้างในห้องมีกิจกรรมเบาสมองให้เลือกทำหลากหลาย ",
    },
    {
      label: "โรงอาหารและร้านขายของ ",
      tag: "main",
      detail:
        "นักเรียนทุกคนทานอาหารร่วมกันพร้อมกัน 3 เวลา โรงเรียนเป็นผู้จัดการเรื่องอาหารให้ทุกคน รวมถึงกลุ่มเด็กที่มีข้อจำกัดเรื่องการกินด้วยเช่นกัน ร้านขายของส่วนมากจะเน้นขายขนมทานเล่นหรืออาหารสำเร็จรูป ( อุปกรณ์การเรียน เครื่องแบบ และอุปกรณ์ทางเทคโนโลยีอื่น ๆ จะได้รับการสนับสนุนจากโรงเรียน )",
    },
    {
      label: "ห้องสั่งการ",
      tag: "main",
      detail:
        "ห้องผู้อำนวยการ เป็นสถานที่สำหรับผู้อำนวยการและผู้บริหารคนอื่น ๆ ในการทำงานและจัดการระบบในโรงเรียน นักเรียนทั่วไปไม่มีสิทธิ์เข้าถึงห้องนี้ และไม่มีผู้รู้แน่ชัดว่าห้องดังกล่าวใช้เก็บข้อมูลอะไรบ้างกันแน่ นอกจากเป็นศูนย์บัญชาการสำหรับการประสานงานของซูเปอร์ฮีโร่ เมื่อมีวิกฤตการณ์และการโจมตีของผู้ร้าย",
    },
    {
      label: "สนามประลอง",
      tag: "activity",
      detail:
        "พื้นที่ที่เปิดโอกาสให้เหล่าฮีโร่เข้ามาใช้ในการประชัญฝีมือได้อย่างเปิดเผย เป็นพื้นที่โล่งไร้สิ่งกีดขวาง สามารถเปิดใช้งาน Augmented Reality รวมถึงให้นักเรียนคนอื่นเข้ามาชมการต่อสู้ระหว่างประลองกันได้ด้วย การใช้สนามจะต้องมีการแจ้งทางโรงเรียนทุกครั้ง เพื่อป้องกันการทะเลาะวิวาทและควบคุมสถานการณ์ ",
    },
    {
      label: "สนามกีฬา ",
      tag: "activity",
      detail:
        "สนามกีฬาในร่ม สามารถใช้เล่นกีฬาได้หลากหลาย มีตั้งแต่ สนาม Basketball, สนาม Soccer, ลานน้ำแข็ง, สระว่ายน้ำ, สนาม Tennis, ห้องซ้อมสำหรับ Gymnastic-Cheerleading, ห้องฝึกซ้อมศิลปะการต่อสู้, และสนาม Volleyball",
    },
    {
      label: "เรือนกระจก",
      tag: "activity",
      detail: (
        <div>
          ถูกสร้างบริเวณจุดศูนย์กลางอาคารกิจกรรม
          ภายในมีต้นไม้ขนาดใหญ่สูงเทียบเท่าเรือนกระจก
          ข้างในบรรยากาศร่มรื่นด้วยธรรมชาติ แมกไม้หลากหลายพันธ์ุ
          รวมถึงสัตว์ตัวเล็ก ๆ ที่อาศัยอยู่ด้วย เช่น ผีเสื้อ, กระรอก,
          นกพันธุ์เล็ก
          <br></br>
          <br></br>
          ต้นไม้ที่ตั้งอยู่จุดศูนย์กลางมีขนาด 20 คนโอบ
          มันเป็นพืชสูญพันธุ์ตั้งแต่ปี 18xx แต่ด้วยเทคโนโลยีสมัยใหม่
          ทำให้นักวิทยาศาสตร์สามารถนำมันกลับมามีชีวิตได้ในโลกปัจจุบัน
        </div>
      ),
    },
    {
      label: "อาคารชาย-หญิง",
      tag: "dorm",
      detail:
        "แบ่งออกเป็น 2 อาคารย่อยด้วยกัน เนื่องจาก Apex Heroic Academy เป็นโรงเรียนประจำนักเรียนทุกคนจำเป็นต้องมีรูมเมทโดยระบบสุ่มเท่านั้น เว้นแต่ว่าจะมีเงื่อนไขพิเศษเป็นข้อยกเว้น จึงจะสามารถอนุโลมให้อยู่คนเดียวได้",
    },
    {
      label: "อุโมงค์สัตว์น้ำ",
      tag: "dorm",
      detail:
        "หอพักชายหญิงมีอุโมงค์สัตว์น้ำเป็นทางเชื่อมระหว่างสองอาคาร เป็นอุโมงค์ขนาดใหญ่ที่มีบรรดาพันธุ์ปลาหายากและสิ่งมีชีวิตน่าพิศวงอื่น ๆ ",
    },
    {
      label: "สนาม American Football  ",
      tag: "etc",
      detail: "เป็นกีฬาชนิดเดียวที่ต้องต้องซ้อมและแข่งขันด้านนอก ",
    },
    {
      label: "สวนหย่อม",
      tag: "etc",
      detail:
        "ที่พักผ่อนหย่อนใจของนักเรียน ด้านในมีน้ำพุขนาดใหญ่ชวนสร้างบรรยากาศให้ร่มรื่น",
    },
    {
      label: "อาคารพยาบาล",
      tag: "etc",
      detail:
        "เมื่อเกิดอาการเจ็บป่วยหรือบาดเจ็บ โรงเรียนมีสถานพยาบาลและบุคลากรคุณภาพที่พร้อมให้ความช่วยเหลือนักเรียนในทุกรูปแบบ ไม่ใช่เฉพาะแพทย์หรือพยาบาล แต่รวมถึงสัตวแพทย์ ช่างซ่อม และนักวิทยาศาสตร์ด้วยเช่นกัน รับรองได้เลยว่าปลอดภัยหายห่วงไม่ต่างอะไรกับโรงพยาบาลชั้นนำในตัวเมืองเลยทีเดียว",
    },
    {
      label: "ห้องกักบริเวณ",
      tag: "etc",
      detail: (
        <div>
          สถานที่กักบริเวณนักเรียนชั่วคราว
          สำหรับกลุ่มเด็กที่ละเมิดหรือฝ่าฝืนกฎร้ายแรงจนก่อให้เกิดเรื่องวุ่นวาย
          ห้องกักบริเวณที่นี่มีความปลอดภัยสูง
          ไม่ต่างอะไรกับคุกขังอาชญากรเพื่อป้องกันนักเรียนหัวขบถที่พร้อมจะแหกออกมาได้ทุกเมื่อ
          อย่างไรก็ตามห้องกักบริเวณไม่ได้มีจุดประสงค์เพื่อจำกัดเสรีของเหล่าซุปเปอร์ฮีโร่
          แต่เพื่อให้พวกเขาได้รับบทเรียน และยอมปรับตัวเป็นคนดี(กว่านี้) มากกว่า
          <br></br>
          <br></br>
          บางคนอาจได้รับโทษให้บำเพ็ญประโยชน์หรือพูดคุยกับนักจิตวิทยาเด็กระหว่างนั้น
          ขึ้นอยู่กับดุลยพินิจของอาจารย์ที่สั่งกักบริเวณ
        </div>
      ),
    },
  ];

  const filterplace = places.filter((item) => item.tag === current);

  const handleClick = (value) => {
    setCurrent(value);
  };

  return (
    <main className="bg-secondary-400 text-white w-full min-h-screen">
      <div className="absolute left-[-200px] top-[-200px]">
        <GreenBlur />
      </div>
      <Navbar />

      <div className={kanit.className}>
        <div className="pt-24 container mx-auto px-4">
          <nav>
            {/* mobile */}
            <div className="md:hidden">
              <div className="fixed bottom-0 w-full z-20">
                <div className="bg-whitesecondary-200 backdrop-blur-sm px-4 pb-10 border-t-[0.1px] border-slate-100/20">
                  <div className="flex items-center container ">
                    {navigate.map((navigate) => (
                      <div
                        key={navigate.tag}
                        onClick={() => handleClick(navigate.tag)}
                        className="py-8 flex-auto cursor-pointer"
                      >
                        <div className="flex justify-center">
                          <div className="w-min">{navigate.icon}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-4">
              <div className="flex justify-center space-x-4">
                {navigate.map((navigate) => (
                  <div
                    key={navigate.tag}
                    onClick={() => handleClick(navigate.tag)}
                    className={`${
                      current === navigate.tag
                        ? "text-white border-primary font-normal"
                        : "text-faded border-faded font-light hover:text-primary"
                    }  border w-fit py-1 px-8 rounded-full cursor-pointer text-sm`}
                  >
                    {navigate.label}
                  </div>
                ))}
              </div>

              {/* description */}
              <div className="text-faded text-xs font-light mx-auto md:px-40  text-center">
                {navigate.find((item) => item.tag === current).detail}
              </div>
              <div></div>
            </div>
          </nav>

          {/* mobile label */}
          <div className="md:hidden">
            <Labelmobile
              icon={navigate.find((item) => item.tag === current).iconLabel}
              label={navigate.find((item) => item.tag === current).label}
            />
          </div>

          {/* content */}
          <div className="grid md:grid-cols-2 gap-4 md:pt-12">
            {filterplace.map((filterplace) => (
              <div
                key={filterplace.label}
                className="h-full bg-darklight-400 w-full py-4 px-6 rounded-2xl backdrop-blur-sm"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex gap-4">
                    <div className="flex flex-col md:text-xl tracking-wider">
                      <div>{filterplace.label}</div>
                    </div>
                  </div>
                  <div className="text-white text-xs font-extralight">
                    {filterplace.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
