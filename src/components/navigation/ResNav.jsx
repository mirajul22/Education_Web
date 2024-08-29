import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
// import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ResNav = ({ Close }) => {
  // const [close, setClose] = useState(true);

  // const Close = () => {
  //   console.log("closes");
  //   setClose(!close);
  // };
  return (
    <>
      {close ? (
        <div className="fixed text-xl z-[999]">
          <ul className="resul  relative md:hidden   flex flex-col gap-8 px-8 py-12   bg-white  font-bold hover:text-[#]">
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
            <div className="absolute top-10 right-10 md:hidden border border-1 border-[#fff] px-3 py-3 rounded-full bg-[#fff] shadow-lg">
              <RxCross2 size={15} className="text-[#535fd9]" onClick={Close} />
            </div>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default ResNav;
