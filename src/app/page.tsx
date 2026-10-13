import Image from "next/image";
import HeroSection from "@/components/hero-section";
import ProjectSection from "@/components/projects";
import Orbit from "@/components/Orbit";
import About from "@/components/About";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="whole">
      <HeroSection/>  
      <ProjectSection/>
      <Orbit/>
      <About/>
      <Contact/>
    </div>
  );
}
