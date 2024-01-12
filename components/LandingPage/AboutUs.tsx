import React from "react";
import Heading from "../Heading";

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
      <div className=" grid justify-items-end  gap-6 content-center text-right p-24">
        <Heading>O nás </Heading>
        <p className=" text-2xl  text-white">
          Jsme inovativní marketingová a digitální agentura, zaměřená na
          poskytování kreativních řešení a strategií, které pomáhají našim
          klientům dosáhnout svých obchodních cílů. <br /> <br /> S vášní a
          zkušenostmi v oboru se snažíme vytvářet silné propojení mezi značkami
          a jejich cílovým publikem, abychom podpořili jejich růst a úspěch.
          Jsme tu pro vás, abychom společně vytvořili příběh, který osloví a
          zanechá trvalý dojem.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
