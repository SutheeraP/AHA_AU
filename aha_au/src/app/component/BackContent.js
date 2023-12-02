import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Kanit } from "@next/font/google";
import Link from "next/link";
const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "600", "700"],
});

const BackContent = ({label, content, prev}) => {
  return (
    <div className={kanit.className}>
      <div className="pt-20 md:pt-28 container mx-auto px-4 relative z-10">
        <div className="flex gap-4 pb-10 md:text-lg text-base font-semibold tracking-wider">
            <Link href={prev}>
                <ChevronLeftIcon width={27}/>
            </Link>
            <div>{label}</div>
        </div>

        <div className="pl-9">{content} </div>
        
      </div>
    </div>
  );
};

export default BackContent;
