"use client";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <header
      className={`flex justify-between items-center h-[70px] fixed top-0  w-full px-8 md:px-12 z-50  ${
        !!isScrolled && "bg-black/60 backdrop-blur-2xl "
      }`}
    >
      <Link href={"/"}>
        <img
          src="/images/Logo_Light.webp"
          alt="Stay On"
          fetchPriority="high"
          className=" w-[158px] h-[43px]"
          width={158}
          height={43}
        />
      </Link>
      <MobileNavbar />
    </header>
  );
};

export default Navbar;
