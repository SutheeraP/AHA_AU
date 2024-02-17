import React from "react";
import Maincourse from "../Maincourse";
import Labelmobile from "../Labelmobile";
import Cardclub from "./Cardclub";
import Cardtoggle from "@/app/component/Cardtoggle";

export default function page() {
  const clubToggle = [
    {
      label: "ชมรมดนตรี",
      icon: "/club-music.svg",
      data: (
        <div>
          <ul className="list-disc ml-4">
            <li>ดนตรีคลาสสิค</li>
            <li>ดนตรีสากลทั่วไป</li>
          </ul>
        </div>
      ),
    },
    {
      label: "ชมรมกีฬา",
      icon: "/club-sport.svg",
      data: (
        <div>
          <ul className="list-disc ml-4">
            <li>Basketball Club</li>
            <li>Soccer Club</li>
            <li>Hockey club</li>
            <li>Swimming Club</li>
            <li>Tennis Club</li>
            <li>Cheerleading Squad</li>
            <li>Gymnastics Club</li>
            <li>Wrestling Club</li>
            <li>American Football Club</li>
            <li>Volleyball Club</li>
          </ul>
        </div>
      ),
    },
    {
      label: "ชมรมเกม",
      icon: "/club-game.svg",
      data: (
        <div>
          <ul className="list-disc ml-4">
            <li>บอร์ดเกม</li>
            <li>หมากรุก</li>
            <li>E-Sport</li>
          </ul>
        </div>
      ),
    },
  ];

  const clubList = [
    {
      label: "ชมรมศิลปะและงานฝีมือ",
      icon: "/club-art.svg",
    },
    {
      label: "ชมรมธรรมชาติและสิ่งแวดล้อม",
      icon: "/club-nature.svg",
    },
    {
      label: "ชมรมการสร้างหุ่นยนต์และนวัตกรรม",
      icon: "/club-robot.svg",
    },
    {
      label: "ชมรมวิทยาศาสตร์และอวกาศ",
      icon: "/club-science.svg",
    },
    {
      label: "ชมรมทำอาหาร",
      icon: "/club-food.svg",
    },
    {
      label: "ชมรมโหราศาสตร์ ",
      icon: "/club-star.svg",
    },
  ];

  const content = (
    <>
      <Labelmobile icon="/club.svg" label="ชมรม" />
      <div className="grid md:grid-cols-2 gap-4 pb-24 md:pb-0">
        <div className="flex flex-col gap-4">
          {clubList.map((clubList) => (
            <Cardclub
              icon={clubList.icon}
              label={clubList.label}
              key={clubList.label}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {clubToggle.map((clubToggle) => (
            <Cardtoggle
              icon={clubToggle.icon}
              label={clubToggle.label}
              data={clubToggle.data}
              key={clubToggle.label}
            />
          ))}
        </div>
      </div>
    </>
  );

  return (
    <>
      <Maincourse content={content} />
    </>
  );
}
