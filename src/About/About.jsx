import Hero from "../components/about_hero/Hero";
import Coach from "../components/coach/Coach";
import AboutCommu from "../components/community/AboutCommu";
import Feed from "../components/feedback/Feed";
import Footer1 from "../components/footer/Footer1";
import Nav1 from "../components/navigation/Nav1";
import Skill from "../components/skill/Skill";
import Work1 from "../components/workshop/Work1";

const About = () => {
  return (
    <>
      <Nav1 />
      <Hero />
      <Skill />
      <Work1 />
      <AboutCommu />
      <Coach />
      <Feed />
      <Footer1 />
    </>
  );
};

export default About;
