"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import AboutTab from "./AboutTab";

const TabInformation = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="pl-2 list-disc">
        <li className="text-[#f5a97f]">HTML5</li>
        <li className="text-[#8aadf4]">CSS3</li>
        <li className="text-[#c6a0f6]">Bootstrap</li>
        <li className="text-[#8bd5ca]">TailwindCSS</li>
        <li className="text-[#eed49f]">JavaScript</li>
        <li className="text-[#91d7e3]">React</li>
        <li className="text-[#cad3f56]">NextJS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2 list-disc">
        <li>University of Birmingham</li>
      </ul>
    ),
  },
];

const AboutMe = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-[#b8c0e0]">
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-stars.jpg"
          width={500}
          height={500}
          className="rounded-lg"
        />
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="mb-2 text-4xl font-bold text-[#c6a0f6]">About Me</h2>
          <hr className="mb-4"></hr>
          <p className="text-base lg:text-lg">
            Currently on a 16-week intensive course in Front-End Development in University of Birmingham.
            I'm a passionate developer and I love building applications which provides great user experience
            and also enjoying learning new technologies to improve applications further. Expanding my knowledge
            to solve real-world problems and provide better user-friendly websites.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <AboutTab
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {""}
              Skills{""}
            </AboutTab>
            <AboutTab
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {""}
              Education{""}
            </AboutTab>
          </div>
          <div className="mt-2">
          {TabInformation.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
