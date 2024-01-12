import React from "react";
import Heading from "../Heading";

const HowItsGoing = () => {
  return (
    <section className=" grid lg:grid-cols-2 mt-24 px-20 md:px-60 ">
      <div className=" space-y-6 ">
        <Heading>
          Jak probíhá <br /> <span className=" font-bold">spolupráce?</span>
        </Heading>
        <p className=" text-black text-xl">
          Náš systém spolupráce si zakládá na zjištění cílů našich klientů tak,
          abychom vždy byli schopni co nejvíce vyhovět jeho potřebám a přiblížit
          se k danému cíli. <br />
          <br />
          Jako profesionálové vždy vymýšlíme unikátní strategii, kterou se
          zákazníkem komunikujeme, a vysvětlíme krok po kroku.
        </p>
      </div>
      <div className=" grid justify-center">
        <img
          loading="lazy"
          alt="How Its Going"
          src="/images/How_its_going.png"
        ></img>
      </div>
    </section>
  );
};

export default HowItsGoing;
