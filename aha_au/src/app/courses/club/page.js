import React from "react";
import Maincourse from "../Maincourse";
import Labelmobile from "../Labelmobile";
import Cardclub from "./Cardclub";

export default function page() {
  const clubList = [
    {
      label: "ชมรมศิลปะและงานฝีมือ",
      icon: "/sample-class.svg",
    },
    {
      label: "ชมรมธรรมชาติและสิ่งแวดล้อม",
      icon: "/sample-class.svg",
    },
    {
      label: "ชมรมการสร้างหุ่นยนต์และนวัตกรรม",
      icon: "/sample-class.svg",
    },
    {
      label: "ชมรมวิทยาศาสตร์และอวกาศ",
      icon: "/sample-class.svg",
    },
    {
      label: "ชมรมทำอาหาร",
      icon: "/sample-class.svg",
    },
    {
      label: "ชมรมโหราศาสตร์ ",
      icon: "/sample-class.svg",
    }
  ];

  const content = (
    <>
      <Labelmobile icon="/club.svg" />
      <div className="grid md:grid-cols-2 gap-4 pb-24 md:pb-0">
        {clubList.map((clubList) => (
          <Cardclub icon={clubList.icon} label={clubList.label} key={clubList.label} />
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
