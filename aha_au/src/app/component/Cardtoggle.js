"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Cardtoggle = ({ icon, label, data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div onClick={handleToggle}>
      <div className="h-full bg-darklight-400 w-full py-4 px-6 rounded-2xl backdrop-blur-sm cursor-pointer">
        <div className="flex flex-col gap-3">
          <div className="flex gap-4">
            <div>
              <Image width={25} height={50} src={icon} alt="icon"></Image>
            </div>

            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <div className={`${isExpanded ? "text-primary" : ""} text-sm font-medium`}>
                  {label}
                </div>
                <div className={`${isExpanded ? "text-primary" : ""}`}>
                  {isExpanded ? (
                    <ChevronUpIcon className="h-5 w-5" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5" />
                  )}
                </div>
              </div>

              {isExpanded && (
                <div className="text-xs font-extralight pt-3">{data}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardtoggle;
