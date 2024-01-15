"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Close from "./Icons/Close";
import Link from "next/link";
import { NavLinks } from "@/lib/constants";

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
        className={`fixed left-0 top-0 navbar right-0 bg-black p-10 grid ${
          isOpen ? "navbar--opened" : "navbar--closed"
        }`}
      >
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className=" ml-auto  h-max  hover:text-white"
        >
          <Close />
        </button>
        <div className=" container mx-auto grid md:grid-cols-2">
          <div className="pl-3 space-y-4">
            <img
              src="/images/Logo_Light.webp"
              width={392}
              height={100}
              className=" w-full max-w-[340px]"
              alt=""
            />
            <div className="">
              <h3 className="text-xl xl:text-3xl text-white font-bold mb-2 ">
                Kontaktní údaje:
              </h3>
              <ul className=" text-lg  xl:text-xl">
                <li className=" flex gap-2 max-lg:flex-col">
                  <p className="  font-bold">Jan Adamec</p>
                  <span className="text-white">+420 775 487 300</span>
                </li>
                <li className=" flex gap-2 max-lg:flex-col">
                  <p className="  font-bold">Ondřej Kocziszký</p>
                  <span className="text-white">+420 888 888 888</span>
                </li>
                <li className=" flex gap-2 mt-2 max-lg:flex-col">
                  <p className="  font-bold">email</p>
                  <a
                    className=" text-white hover:text-primary hover:underline"
                    target="_blank"
                    href="mailto:stayon.info@gmail.com"
                  >
                    stayon.info@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Links */}

          <div>
            <ul className=" text-white text-end font-bold text-2xl space-y-8">
              {NavLinks.map((item) => (
                <li key={item.text}>
                  <Link
                    onClick={() => setIsOpen(false)}
                    className=" hover:text-primary"
                    href={item.path}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
