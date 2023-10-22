import React from "react";

const AboutTab = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-[#7dc4e4]" : "text-[#cad3f5]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-[#7dc4e4] ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default AboutTab;