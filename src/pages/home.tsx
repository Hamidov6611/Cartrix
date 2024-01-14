import { Hero, HeroAbout, Pricing, Service, Subscribe } from "../components";
import Work from "../components/work";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroAbout />
      <Service />
      <Work />
      <Pricing />
      <Subscribe />
    </>
  );
};

export default Home;
