import Image from "next/image";
import React from "react";

const Herosection = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto">
          <div className="flex flex-col md:flex-row-reverse container mx-auto px-4 lg:px-36">
            <div className="mx-auto px-2 pb-24 md:py-16 relative">
              <Image
                src="/greenblur.svg"
                width={400}
                height={50}
                className="absolute"
              />
              <Image src="/logo.svg" width={400} height={50} />
            </div>
            <div className="my-auto">
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-center md:text-left">
                Apex Heroic Academy
              </div>
              <div className="text-faded text-xs md:text-base text-center mt-4 md:text-left">
                a scifi superhero school project
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
