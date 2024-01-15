import HeroSection2 from "@/components/OurJobPage/HeroSection";
import Importance from "@/components/OurJobPage/Importance";
import OurJob from "@/components/OurJobPage/OurJob";
import React from "react";

const page = () => {
  return (
    <main>
      {" "}
      <HeroSection2 />
      <Importance />
      <OurJob />
    </main>
  );
};

export default page;
