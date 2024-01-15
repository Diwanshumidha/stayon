import React from "react";

const HeroSection2 = () => {
  return (
    <section
      className=" h-svh relative bg-fixed"
      style={{
        backgroundImage: "url(/images/Hero_Section.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div aria-hidden className=" absolute inset-0 z-10 bg-black/75" />
      <div className=" grid place-content-center  h-full z-20 relative">
        <h1 className=" text-7xl font-normal">Webové stránky</h1>
        <img
          src="/svg/scroll.svg"
          width={72}
          height={90}
          aria-hidden
          className="mx-auto  float self-end   "
        />
      </div>
    </section>
  );
};

export default HeroSection2;
