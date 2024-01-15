import Footer from "@/components/Footer";
import AboutUs from "@/components/LandingPage/AboutUs";
import HeroSection from "@/components/LandingPage/HeroSection";
import HowItsGoing from "@/components/LandingPage/HowItsGoing";

export default function Home() {
  return (
    <main className=" space-y-7">
      <HeroSection />
      <AboutUs />
      <HowItsGoing />
    </main>
  );
}
