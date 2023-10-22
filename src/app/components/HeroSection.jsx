import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-[#cad3f5] mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I'm Gwy
          </h1>
          <p className="text-[#b8c0e0] text-lg lg:text-xl">
            I'm a front-end developer that codes in bursts of energy.
          </p>
        </div>

        <div className="col-span-5">
          <div className="w-500 h-400">
            <Image
              src="/images/heroImage.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
