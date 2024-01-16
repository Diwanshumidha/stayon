import { WhatcanWeDoPoints } from "@/lib/constants";
import React from "react";

const WhatCanWeDo = () => {
  return (
    <section className="relative marketing-icons-grid-container--gradient mt-10 md:mt-24 md:gap-6 px-20 md:px-60">

      <h2 className=" md:mt-24 md:pt-6 text-primary text-center text-3xl md:text-6xl font-semibold  py-2 border-primary ">
        Co vše umíme
      </h2>

      <div className=" grid sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6 place-content-center text-center space-y-3 py-4 sm:py-8 md:py-10 lg:py-12">
        {WhatcanWeDoPoints.map((point) => {
          return (
            <WhatCanWeDoPoint
              heading={point.heading}
              para={point.para}
              icon={point.icon}
              key={point.heading}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WhatCanWeDo;

const WhatCanWeDoPoint = ({
  heading,
  para,
  icon
}: {
  heading: string;
  para: string;
  icon: string;
}) => {
  return (
    <div className="grid">
      <div className="flex mx-auto icon-backgroung--gradient w-[93px] h-[93px] items-center justify-center rounded-md">
        <img
          src={icon}
          alt={heading}
          className=""
        />
      </div>
      <div className="my-2 text-white">
        <h3 className="text-xl font-semibold">{heading}</h3>
        <p className="">{para}</p>
      </div>
    </div>
  );
};