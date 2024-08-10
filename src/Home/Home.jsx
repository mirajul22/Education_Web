import Commu from "../components/community/Commu";
import Cours from "../components/courses/Cours";
import Hero from "../components/hero/Hero";
import Nav from "../components/navigation/Nav";
import Offer from "../components/Offer/Offer";
import Popular from "../components/popular/Popular";
import Test from "../components/testimonial/Test";
import Work from "../components/workshop/Work";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Cours />
      <Offer />
      <Popular />
      <Work />
      <Test />
      <Commu />
    </>
  );
};

export default Home;
