import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="inline-block mb-4 text-4xl font-extrabold text-transparent bg-gradient-to-r from-[#c6a0f6] via-[#8bd5ca] to-indigo-400 bg-clip-text lg:text-6xl">
            Hello, I&apos;m Gwy
          </h1>
          <p className="mb-6 text-lg lg:text-xl text-[#cad3f5]">
            Well, hello there! Welcome to my portfolio! I&apos;m a front-end
            developer that codes in bursts of energy. I
            <span style={{ color: "#a6da95" }}> design</span>,
            <span style={{ color: "#7dc4e4" }}> develop</span>,
            <span style={{ color: "#f5bde6" }}> sing</span>,
            <span style={{ color: "#ee99a0" }}> game</span>, and
            <span style={{ color: "#c6a0f6" }}> paint</span>! I do have a lot of
            hobbies but I am passionate about improving the lives of others by
            developing great user-friendly applications.
          </p>
          <div>
            <Link
              className="text-[#7dc4e4] px-6 py-3 rounded-full mr-4 bg-[#363a4f] hover:bg-[#494d64]"
              href="#contact"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="col-span-5 mt-4 place-self-center lg:mt-0">
          <div className="w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative">
            <Image
              src="/images/heroImage.png"
              alt="hero image profile"
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