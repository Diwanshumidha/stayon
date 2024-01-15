import React from "react";

const HeroSection3 = () => {
  return (
    <section className=" w-full h-svh grid place-content-center relative">
      <img
        src="/images/marketing_hero.webp"
        className=" object-cover w-full h-full absolute top-0 -z-20 "
      />
      <div aria-hidden className=" absolute inset-0 -z-10 bg-black/75" />
      <h1 className=" text-7xl font-normal">Online Marketing</h1>
      <img
        src="/svg/scroll.svg"
        width={72}
        height={90}
        aria-hidden
        className="absolute float mt-auto bottom-4  m-auto left-0 right-0"
      />
    </section>
  );
};

export default HeroSection3;
