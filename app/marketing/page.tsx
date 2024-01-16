import HeroSection3 from "@/components/OnlineMarketingPage/HeroSection3";
import Sponsor from "@/components/OnlineMarketingPage/Sponsor";
import WhatCanWeDo from "@/components/OnlineMarketingPage/WhatCanWeDo";
import WhyChooseUs from "@/components/OnlineMarketingPage/WhyChooseUs";
import { Metadata } from "next";

export default function Home() {
  return (
    <main>
      <HeroSection3 />
      <WhyChooseUs />
      <WhatCanWeDo />
      <Sponsor />
    </main>
  );
}
