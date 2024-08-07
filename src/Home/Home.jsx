import Cours from "../components/courses/Cours";
import Hero from "../components/hero/Hero";
import Nav from "../components/navigation/Nav";
import Offer from "../components/Offer/Offer";
import Popular from "../components/popular/Popular";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Cours />
      <Offer />
      <Popular />
    </>
  );
};

export default Home;
