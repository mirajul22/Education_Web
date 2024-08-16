import Hero from "../components/about_hero/Hero";
import AboutCommu from "../components/community/AboutCommu";
import Nav from "../components/navigation/Nav";
import Skill from "../components/skill/Skill";
import Work1 from "../components/workshop/Work1";
// import Footer from "../components/footer/Footer";

const About = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Skill />
      <Work1 />
      <AboutCommu />
      {/* <Footer /> */}
    </>
  );
};

export default About;
