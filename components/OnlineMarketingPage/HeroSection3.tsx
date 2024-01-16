import React from "react";

const HeroSection3 = () => {
  return (
    <section
      className=" w-full h-svh grid bg-center place-content-center relative bg-fixed"
      style={{
        backgroundImage: "url(/images/marketing_hero.webp)",
        backgroundRepeat: "no-repeat",

        backgroundSize: "cover",
      }}
    >
      {/* <img
        src="/images/marketing_hero.webp"
        className=" object-cover w-full h-full absolute top-0  "
      /> */}
      <div aria-hidden className=" absolute inset-0  bg-black/75" />
      <h1 className=" text-7xl font-normal z-20 text-center max-sm:text-5xl">
        Online Marketing
      </h1>
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
