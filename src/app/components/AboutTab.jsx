import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const AboutTab = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-[#7dc4e4]" : "text-[#cad3f5]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-[#7dc4e4] ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 mt-2 mr-3 bg-gradient-to-r from-[#c6a0f6] via-[#91d7e3] to-[#8aadf4]"
      ></motion.div>
    </button>
  );
};

export default AboutTab;
