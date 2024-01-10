import React from "react";

const HeroSection = () => {
  return (
    <div className="relative grid min-h-[1438px]">
      <img
        src="/images/Hero_Section.webp"
        className=" absolute top-0 object-cover h-[1438px] -z-20 left-0 w-full"
        aria-hidden
      />
      <div className="overlay absolute -z-10  top-0 left-0 w-full h-full"></div>
      <div className="pt-[70px] z-20 mx-auto px-8 md:px-12 ">
        <div className="h-[calc(100svh-100px)] flex flex-col lg:max-w-[800px]   w-full text-center justify-center py-6  ">
          <h1 className=" sr-only">Stay On</h1>
          <img
            src="/images/Logo_Light.webp"
            className=" object-contain aspect-[3.694] mt-auto "
            height={300}
            alt=""
          />
          <p className="  gap-x-[0.5ch] text-4xl sm:text-5xl font-normal break-words text-white flex flex-wrap justify-center">
            Zůstaňte <span>s</span> <span className=" text-primary"> námi</span>{" "}
            v obraze a <span className=" text-primary">tvořte</span>{" "}
            <span>svoji</span>
            <span className=" text-primary">budoucnost</span>
          </p>

          <img
            src="/svg/scroll.svg"
            width={72}
            height={90}
            aria-hidden
            className="mx-auto  float mt-auto   "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
