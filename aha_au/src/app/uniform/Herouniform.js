import React from "react";

const Herouniform = () => {
  return (
    <div>
      <div className="h-screen flex justify-center relative">
        <div className="bg-[url('../../public/aha_ask.jpg')] bg-no-repeat bg-cover  bg-center w-full h-full absolute z-0"></div>
        <div className="bg-zinc-900/70 bg-no-repeat bg-cover bg-center  w-full h-full absolute z-0"></div>
        <div className="w-full h-full absolute z-0 flex">
            <div className="border border-faded w-48 h-48 md:w-96 md:h-96 top-1/3 left-4 md:top-1/4 md:left-36 rounded-full absolute z-0"></div>
        </div>
        <div className="w-full h-full absolute z-0 flex">
          <div className="m-auto">
            <div className="text-4xl font-semibold md:font-bold pl-12 md:pl-48 tracking-widest">UNIFORM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herouniform;
