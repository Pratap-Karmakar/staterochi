import About from "@/components/About";
import Footer from "@/components/Footer";
import ResponsiveLanding from "@/components/LandingPage";
import ProjectContact from "@/components/ProjectContact";
import TeamData from "@/components/TeamData";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <div>
      <ResponsiveLanding/>
      <About/>
      <WhatWeDo/>
      <TeamData/>
      <ProjectContact/>
      <Footer/>
    </div>
  );
}
