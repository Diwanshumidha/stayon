import React from "react";
import Tick from "../Icons/Tick";
import Button from "../Button";
import ComputerIcon from "../Icons/Computer";

const Features = () => {
  return (
    <section>
      <div className=" grid lg:grid-cols-3 gap-9 justify-items-center  mx-auto  px-10 xl:px-20 -mt-[500px] relative z-20 ">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </section>
  );
};

export default Features;

const FeatureCard = () => {
  const Point = () => (
    <li className=" flex gap-4 ">
      <div className="w-[70px] ">
        <Tick />
      </div>
      <p className=" text-lg">Navrhujeme kompletní rešení webu od A do Z</p>
    </li>
  );
  return (
    <div className=" bg-karta shadow-xl max-w-[500px] h-[700px]  rounded-2xl flex flex-col gap-3 items-center  text-white px-10 pb-10">
      <div className=" w-[40%] aspect-square bg-gradient-slant shadow-xl rounded-full mx-auto -mt-7  flex justify-center items-center  ">
        <img
          src="/svg/icons/computer.png"
          alt="Computer Icon"
          className=" object-contain w-[70%] "
        />
      </div>
      <div className=" text-center space-y-2">
        <h2 className=" text-2xl font-semibold">Webové stránky</h2>

        <p>UI/UX Design, web development</p>
      </div>
      <hr className=" w-2/3 " />
      <ul className=" grid gap-4">
        <Point />
        <Point />
        <Point />
      </ul>
      <div className=" mt-auto text-lg">
        <Button>Zjistit více</Button>
      </div>
    </div>
  );
};
