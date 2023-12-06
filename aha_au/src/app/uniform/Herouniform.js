import React from "react";

const Herouniform = () => {
  return (
    <div>
      <div className="h-screen flex justify-center relative">
        <div className="bg-[url('../../public/aha_ask.jpg')] bg-no-repeat bg-cover  bg-center w-full h-full absolute z-0"></div>
        <div className="bg-zinc-900/70 bg-no-repeat bg-cover bg-center  w-full h-full absolute z-0"></div>
        <div className="w-full h-full absolute z-0 flex">
            <div className="mx-auto w-1/2 relative">
                <div className="border border-faded ml-4 w-36 md:w-72 aspect-square right-0 top-1/2 md:top-1/4 rounded-full absolute z-0"></div>
            </div>
        </div>
        <div className="w-full h-full absolute z-0 flex">
          <div className="m-auto">
            <div className="text-4xl md:text-5xl font-semibold md:font-bold tracking-widest">UNIFORM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herouniform;
