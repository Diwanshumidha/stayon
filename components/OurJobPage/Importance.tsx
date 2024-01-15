import { ImportancePoints } from "@/lib/constants";
import React from "react";

const Importance = () => {
  return (
    <section className=" grid md:grid-cols-2 px-10  sm:px-20   ">
      <div className=" grid place-content-center">
        <h2 className=" text-primary  text-3xl md:text-6xl font-semibold  py-2 border-primary ">
          Proč jsou vaše webové stránky důležité?
        </h2>
        <div className=" space-y-3 mt-6">
          {ImportancePoints.map((point) => {
            return (
              <ImportancePoint
                heading={point.heading}
                para={point.para}
                key={point.heading}
              />
            );
          })}
        </div>
      </div>
      <div className=" grid place-content-center wobbling">
        <img
          src="/images/cwok_casual_21 1.webp"
          alt=" Person sitting and thinking"
        />
      </div>
    </section>
  );
};

export default Importance;

const ImportancePoint = ({
  heading,
  para,
}: {
  heading: string;
  para: string;
}) => {
  return (
    <div>
      <h3 className=" text-primary text-xl font-semibold">{heading}</h3>
      <p className=" text-black">{para}</p>
    </div>
  );
};
