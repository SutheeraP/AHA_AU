import React from "react";

const Timeline = () => {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const season = ["SPRING", "SUMMER", "FALL"];
  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-12 min-w-[1000px] lg:min-w-0 gap-y-4">
        {month.map((item) => (
          <div key={item} className="text-center">
            {item}
          </div>
        ))}
        {month.map((item) => (
          <div key={item} className="border-t border-faded relative h-2">
            <div className="w-2 h-2 bg-faded rounded-full absolute top-[-50%]"></div>
            {item == 'Dec' ? (<div className="w-2 h-2 bg-faded rounded-full absolute top-[-50%] right-0"></div>): ''}
          </div>
        ))}
        {season.map((item) => (
          <>
            <div></div>
            <div key={item} className="text-xs py-1 col-span-3 text-center bg-faded text-darklight-400 font-semibold">
              {item}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
