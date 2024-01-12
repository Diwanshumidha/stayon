import React from "react";

const HeroSection2 = () => {
  return (
    <section className=" w-full h-svh grid place-content-center relative">
      <img
        src="/images/Hero_Section.webp"
        className=" object-cover w-full h-full absolute top-0 -z-20 "
      />
      <div aria-hidden className=" absolute inset-0 -z-10 bg-black/75" />
      <h1 className=" text-7xl font-normal">Webové stránky</h1>
    </section>
  );
};

export default HeroSection2;
