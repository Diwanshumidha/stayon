import React from "react";

const HeroSection2 = () => {
  return (
    <section
      className=" h-svh relative bg-center bg-fixed"
      style={{
        backgroundImage: "url('/images/web.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div aria-hidden className=" absolute inset-0 z-10 bg-black/85" />
      <div className=" grid place-content-center  h-full z-20 relative">
        <h1 className=" text-7xl font-normal text-center">Webové stránky</h1>
        <img
          src="/svg/scroll.svg"
          width={72}
          height={90}
          aria-hidden
          className="absolute float mt-auto bottom-10  m-auto left-0 right-0"
        />
      </div>
    </section>
  );
};

export default HeroSection2;
