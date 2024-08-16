import Commu from "../components/community/Commu";
import Cours from "../components/courses/Cours";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Nav from "../components/navigation/Nav";
import Offer from "../components/Offer/Offer";
import Popular from "../components/popular/Popular";
import Test from "../components/testimonial/Test";
import Work from "../components/workshop/Work";
import Work1 from "../components/workshop/Work1";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Cours />
      <Offer />
      <Popular />
      <Work1 />
      <Work />
      <Test />
      <Commu />
      <Footer />
    </>
  );
};

export default Home;
