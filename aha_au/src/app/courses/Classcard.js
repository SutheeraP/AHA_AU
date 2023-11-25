import Image from "next/image";
import React from "react";

const Classcard = ({ th, en, detail, icon }) => {
  return (
    <div>
      <div
        className="h-full bg-darklight-400 w-full py-4 px-6 rounded-2xl backdrop-blur-sm"
      >
        <div className="flex flex-col gap-3">
          <div className="flex gap-4">
            <Image
              width={30}
              height={50}
              src={icon}
              alt="icon class"
              className=""
            ></Image>
            <div className="flex flex-col">
              <div>{th}</div>
              <div className="text-faded text-sm font-light">{en}</div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-faded"></div>
          <div className="text-white text-xs font-extralight">{detail}</div>
        </div>
      </div>
    </div>
  );
};

export default Classcard;
