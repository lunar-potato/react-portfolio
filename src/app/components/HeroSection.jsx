import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="my-16 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="inline-block mb-4 text-4xl font-extrabold text-transparent bg-gradient-to-r from-[#c6a0f6] via-[#8bd5ca] to-indigo-400 bg-clip-text lg:text-6xl">
            Hello, I'm Gwy
          </h1>
          <p className="text-[#b8c0e0] text-lg lg:text-xl mb-6">
            I'm a front-end developer that codes in bursts of energy.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div>
            <button className="text-[#7dc4e4] px-6 py-3 rounded-full mr-4 bg-[#363a4f] hover:bg-[#494d64]">Contact Me</button>
            <button className="text-[#7dc4e4] px-6 py-3 rounded-full my-2 bg-[#363a4f] hover:bg-[#494d64]">Download CV</button>
          </div>
        </div>

        <div className="col-span-5 mt-4 place-self-center lg:mt-0">
          <div className="w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative">
            <Image
              src="/images/heroImage.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-lg top-1/2 left-1/2"
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
