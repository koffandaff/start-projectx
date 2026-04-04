import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Stats from "@/components/sections/Stats";
import WhyUs from "@/components/sections/WhyUs";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Stats />
      <WhyUs />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}
