import AboutUs from "@/components/LandingPage/AboutUs";
import HeroSection from "@/components/LandingPage/HeroSection";
import HowItsGoing from "@/components/LandingPage/HowItsGoing";
import HeroSection2 from "@/components/OurJobPage/HeroSection";
import Importance from "@/components/OurJobPage/Importance";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutUs />
      <HowItsGoing />
      <HeroSection2 />
      <Importance />
    </main>
  );
}
