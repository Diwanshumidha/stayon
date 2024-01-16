import Footer from "@/components/Footer";
import AboutUs from "@/components/LandingPage/AboutUs";
import Features from "@/components/LandingPage/Features";
import HeroSection from "@/components/LandingPage/HeroSection";
import HowItsGoing from "@/components/LandingPage/HowItsGoing";

export default function Home() {
  return (
    <main className=" space-y-7">
      <HeroSection />
      <Features />
      <AboutUs />
      <HowItsGoing />
    </main>
  );
}
