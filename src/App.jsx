import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import About from "./About/About";
import Corses from "./Courses_us/Corses";
import Contact from "./Contact/Contact";
import Blog from "./Blog/Blog";
import Detail from "./components/blog/Detail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Corses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;
