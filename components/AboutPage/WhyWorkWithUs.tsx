import { WhyWOrkWithUsPoints } from "@/lib/constants";
import React from "react";

const WhyWorkWithUs = () => {
  return (
    <section className="md:my-24 px-20 md:px-60 place-content-center text-center">
      <div className="">
        <h2 className="text-primary text-3xl md:text-6xl font-semibold  py-2 border-primary ">
          Proč s námi spolupracovat?
        </h2>
        <div className="space-y-2 md:space-y-4 mt-6">
          {WhyWOrkWithUsPoints.map((point) => {
            return (
              <WhyWOrkWithUsPoint
                heading={point.heading}
                para={point.para}
                key={point.heading}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;

const WhyWOrkWithUsPoint = ({
  heading,
  para,
}: {
  heading: string;
  para: string;
}) => {
  return (
    <div>
      <h3 className="md:my-2 text-primary text-xl font-semibold">{heading}</h3>
      <span className=" text-black">{para}</span>
    </div>
  );
};
