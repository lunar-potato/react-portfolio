import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#8087a2] border-l-transparent border-b-transparent border-r-transparent text-[#cad3f5]">
      <div className="container flex justify-between p-5">
        <span>
          <Image
            src="/images/Sukiluna.png"
            alt="Sukiluna logo."
            width={50}
            height={50}
          />
        </span>
        <p>Sukiluna 2023 &copy; All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
