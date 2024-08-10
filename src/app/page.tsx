import { Articles } from "./_components/articles";
import { Banner } from "./_components/banner";
import { BrandsBanner } from "./_components/brands-banner";
import { Destinations } from "./_components/destinations";
import { Footages } from "./_components/footages";
import { Services } from "./_components/services";

export default function Home() {
  return (
    <>
      <Banner />
      <Services />
      <Destinations />
      <Footages />
      <BrandsBanner />
      <Articles />
    </>
  );
}
