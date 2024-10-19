import Footer from "@/components/Footer";
import ResponsiveLanding from "@/components/LandingPage";
import ProjectContact from "@/components/ProjectContact";
import Something from "@/components/Something";
import TeamData from "@/components/TeamData";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <div >
      <section className="min-h-screen sticky top-0">
        <ResponsiveLanding />
      </section>


      <section className="min-h-screen sticky top-0">
        <Something />
      </section>
      

      <section className="min-h-screen sticky top-0">
        <WhatWeDo />
      </section>

      

      <section className="min-h-screen sticky top-0">
        <TeamData />
      </section>

      <section className="min-h-screen sticky top-0">
        <ProjectContact />
      </section>

      <section className="min-h-screen sticky top-0">
        <Footer />
      </section>


      
    </div>
  );
}


















// import Footer from "@/components/Footer";
// import ResponsiveLanding from "@/components/LandingPage";
// import ProjectContact from "@/components/ProjectContact";
// import Something from "@/components/Something";
// import TeamData from "@/components/TeamData";
// import WhatWeDo from "@/components/WhatWeDo";

// export default function Home() {
//   return (
//     <div>
//       <section className="sticky top-0">
//         <ResponsiveLanding />
//       </section>


//       <section className="sticky top-0">
//           <Something />
//       </section>



//       <section className="sticky top-0">
//         <WhatWeDo />

//         </section>



//       <section className="sticky top-0">
//         <TeamData />
//       </section>


//       <section className="sticky top-0">
//         <ProjectContact />
//       </section>


//       <section className="sticky top-0">
//         <Footer />
//       </section>
//     </div>
//   );
// }
