"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <GiHamburgerMenu className="w-[32px] hover:text-white transition-colors duration-300  h-[43px]" />
      </button>
      <div
        className={`fixed left-0 top-0 navbar right-0 bg-black ${
          isOpen ? "navbar--opened" : "navbar--closed"
        }`}
      >
        <button onClick={() => setIsOpen((prev) => !prev)}>close</button>
      </div>
    </div>
  );
};

export default MobileNavbar;
