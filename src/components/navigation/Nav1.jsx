import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { useState } from "react";

const Nav1 = () => {
  const [color, setColor] = useState(false);

  const colorChange = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", colorChange);
  return (
    <>
      <header>
        <nav className={color ? "header1 header-bg" : "header1"}>
          <div className="max-w-[8.75rem]">
            <img src="/images/logo/logo-2.png" alt="logo" className="w-full" />
          </div>

          <div>
            <ul className="flex flex-row gap-8">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/courses"}>Courses</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-row gap-6 cursor-pointer	">
            <div className="">
              <CiSearch size={20} className="text-[#231f40]" />
            </div>
            <button className="">
              <CiUser size={20} className=" text-[#231f40]" />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav1;
