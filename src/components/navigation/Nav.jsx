import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import { RiUserLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const [color, setColor] = useState(false);

  const colorChange = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", colorChange);

  return (
    <>
      <header>
        <nav className={color ? "header header-bg " : "header "}>
          <div className="max-w-[8.75rem]">
            <img src="/images/logo/logo-2.png" alt="logo" className="w-full" />
          </div>

          <div>
            <ul className="hidden md:flex flex-row gap-8">
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

          <div className="flex flex-row gap-2 md:gap-4 cursor-pointer	">
            <div className="hidden md:block border border-1 border-[#fff] px-3 py-3 rounded-lg bg-[#fff] shadow-md">
              <CiSearch size={20} className="text-[#535fd9]" />
            </div>
            <div className="block md:hidden border border-1 border-[#fff] px-3 py-3 rounded-lg bg-[#fff] shadow-md">
              <CiSearch size={15} className="text-[#535fd9]" />
            </div>
            <div className="block md:hidden border border-1 border-[#fff] px-3 py-3 rounded-lg bg-[#fff] shadow-md">
              <RiUserLine size={15} className="text-[#535fd9]" />
            </div>
            <button className="hidden md:flex flex-row gap-2 px-6 py-3 bg-[#535fd9] rounded-lg text-white hover:bg-[#273849] duration-300">
              <FaRegUser className="mt-1" />
              <Link>Login/Register</Link>
            </button>
            <div className="block md:hidden border border-1 border-[#fff] px-3 py-3 rounded-lg bg-[#fff] shadow-md">
              <AiOutlineMenu size={15} className="text-[#535fd9]" />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
