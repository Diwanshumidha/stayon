import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <header className=" flex justify-between items-center h-[70px] fixed top-0  w-full px-8 md:px-12 z-50">
      <img
        src="/images/Logo_Light.webp"
        alt="Stay On"
        fetchPriority="high"
        className=" w-[158px] h-[43px]"
        width={158}
        height={43}
      />

      <MobileNavbar />
    </header>
  );
};

export default Navbar;
