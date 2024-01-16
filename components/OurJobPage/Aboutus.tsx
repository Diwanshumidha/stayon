import React from "react";
import Heading from "../Heading";
import Button from "../Button";

const AboutUs = () => {
  return (
    <section className=" grid lg:grid-cols-2 bg-black">
      <div className=" bg-primary relative   about_image--gradient">
        <img
          loading="lazy"
          alt="Partners Image"
          className="w-full  object-cover h-full"
          src="/images/Us.webp"
        ></img>
      </div>
      <div className=" grid md:justify-items-end  gap-6 content-center md:text-right p-10 sm:p-20">
        <Heading>A proč stránky od nás? </Heading>

        <p className=" text-lg md:text-xl  text-white">
          Děláme si vlastní UI/UX design, nepoužíváme šablony.
          <br />
          <br />
          S každým zákazníkem provedeme analýzu, aby jsme se přiblížili co
          nejvíce jeho potřebám.
          <br />
          <br />
          Jsme agentura, která vám poskytne komplexní řešení, nabízíme i další
          služby spojené s webovými stránkami.
        </p>
        <Button className=" text-xl font-semibold hover:scale-105 transition-all">
          Více o našem týmu
        </Button>
      </div>
    </section>
  );
};

export default AboutUs;
