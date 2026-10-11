import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import WhatMakesUsDifferent from "@/components/about/WhatMakesUsDifferent";
import AboutFeatures from "@/components/about/AboutFeatures";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
    return (<main> 
        <AboutHero />
     <OurStory />
      <MissionVision />
       <WhatMakesUsDifferent />
        <AboutFeatures /> 
        <AboutCTA /> 
        </main>
    );
}
