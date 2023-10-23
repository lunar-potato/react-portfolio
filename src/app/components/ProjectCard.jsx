import React from "react";
import { Eye, Code2 } from "lucide-react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const cardStyles = {
    background: `url(${imgUrl})`,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    width: "100%",
    height: "200px", 
  };

  return (
    <div>
      <div
        className="relative h-52 md:h-72 rounded-t-xl group"
        style={cardStyles}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link href={gitUrl || '/'} className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <Code2 className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link href={previewUrl || '/'} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <Eye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="rounded-b-xl bg-[#1e2030] py-6 px-4">
        <h5 className="mb-2 text-xl font-semibold text-[#7dc4e4]">{title}</h5>
        <p className="text-[#cad3f5]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;