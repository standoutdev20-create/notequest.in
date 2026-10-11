import ResourcesBanner from "../../components/resources/ResourcesBanner";
import ResourcesHero from "../../components/resources/ResourcesHero";
import ResourceCategories from "../../components/resources/ResourceCategories";

import BrowseBySubject from "../../components/resources/BrowseBySubject";
import PopularResources from "../../components/resources/PopularResources";
import ResourcesCTA from "../../components/resources/ResourcesCTA";

export default function ResourcesPage() {
  return (
    <main>
      <ResourcesBanner />

      <ResourcesHero />

      <ResourceCategories />

    

      <BrowseBySubject />

      <PopularResources />

      <ResourcesCTA />
    </main>
  );
}