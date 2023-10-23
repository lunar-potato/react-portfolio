"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./projectTag";
import { motion, useInView } from "framer-motion";

const projectInformation = [
  {
    id: 1,
    title: "Bootstrap Portfolio",
    description: "This is a portfolio that I have made with Bootstrap.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lunar-potato/bootstrap-portfolio",
    previewUrl: "https://lunar-potato.github.io/bootstrap-portfolio/",
  },
  {
    id: 2,
    title: "Coding Quiz",
    description: "A simple coding quiz game with timer and scoring.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lunar-potato/coding-quiz",
    previewUrl: "https://lunar-potato.github.io/coding-quiz/",
  },
  {
    id: 3,
    title: "Gamma Movies",
    description: "It's a movie category list.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lunar-potato/gamma-movies",
    previewUrl: "https://lunar-potato.github.io/gamma-movies/",
  },
  {
    id: 4,
    title: "Moonfolio",
    description: "A personal portfolio created with HTML and styled with CSS.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lunar-potato/moonfolio",
    previewUrl: "https://lunar-potato.github.io/moonfolio/",
  },
  {
    id: 5,
    title: "Password Generator",
    description: "Description",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lunar-potato/password-generator",
    previewUrl: "https://lunar-potato.github.io/password-generator/",
  },
  {
    id: 6,
    title: "Team Profile Generator",
    description: "A command-line application for generating a team profile webpage.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lunar-potato/teamProfile-generator/",
  },
  {
    id: 7,
    title: "Weather Dashboard",
    description: "A weather dashboard displaying current weather and a 5-day forecast.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lunar-potato/weather-dashboard",
    previewUrl: "https://lunar-potato.github.io/weather-dashboard/",
  },
  {
    id: 8,
    title: "Daily Planner App",
    description: "Simple Daily Planner App for Work.",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lunar-potato/daily-planner-app",
    previewUrl: "https://lunar-potato.github.io/daily-planner-app/",
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectInformation.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-white md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
