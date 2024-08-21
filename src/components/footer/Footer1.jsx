import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
const Footer1 = () => {
  return (
    <>
      <section className="footer1">
        <div className=" flex flex-row justify-evenly pt-[12rem]">
          <div>
            <img src="/images/foot/logo-white-2.png" alt="1" />
            <p className="text-base font-medium text-white pt-[3rem]">
              It is a long established fact that a<br /> reader will be
              distracted by the
              <br /> readable content of a page when
              <br /> looking at its layout. The point of using
              <br /> Lorem Ipsum.
            </p>
            <div className="flex flex-row gap-3 pt-[3rem]">
              <button className="bg-[#6f6b80] p-4 text-white rounded-md hover:bg-[#535fdb] duration-300">
                <FaFacebookF className="text-xl" />
              </button>
              <button className="bg-[#6f6b80] p-4 text-white rounded-md hover:bg-[#535fdb] duration-300">
                <FaLinkedinIn className="text-xl" />
              </button>
              <button className="bg-[#6f6b80] p-4 text-white rounded-md hover:bg-[#535fdb] duration-300">
                <FaPinterestP className="text-xl" />
              </button>
              <button className="bg-[#6f6b80] p-4 text-white rounded-md hover:bg-[#535fdb] duration-300">
                <FaTwitter className="text-xl" />
              </button>
            </div>
          </div>

          <div className="">
            <h1 className="text-2xl bold text-white">Explore</h1>
            <div className="text-white text-base font-medium flex flex-col gap-5 pt-[3rem]">
              <p className="flex flex-row gap-3 cursor-pointer hover:text-[#535fdb] duration-300">
                <FaAngleDoubleRight className="mt-1" />
                About Us
              </p>
              <p className="flex flex-row gap-3 cursor-pointer hover:text-[#535fdb] duration-300">
                <FaAngleDoubleRight className="mt-1" />
                Upcoming Events
              </p>
              <p className="flex flex-row gap-3 cursor-pointer hover:text-[#535fdb] duration-300">
                <FaAngleDoubleRight className="mt-1" />
                Blog & News
              </p>
              <p className="flex flex-row gap-3 cursor-pointer hover:text-[#535fdb] duration-300">
                <FaAngleDoubleRight className="mt-1" />
                FAQ Question
              </p>
              <p className="flex flex-row gap-3 cursor-pointer hover:text-[#535fdb] duration-300">
                <FaAngleDoubleRight className="mt-1" />
                Testimonial
              </p>
              <p className="flex flex-row gap-3 cursor-pointer hover:text-[#535fdb] duration-300">
                <FaAngleDoubleRight className="mt-1" />
                Privacy Policy
              </p>
            </div>
          </div>

          <div>
            <h1 className="text-2xl bold text-white">Useful Links</h1>
            <div className="text-white text-base font-medium flex flex-col gap-5 pt-[3rem]">
              <p className="flex flex-row gap-3 cursor-pointer hover:text-[#535fdb] duration-300">
                <FaAngleDoubleRight className="mt-1" />
                Contact Us
              </p>
              <p className="flex flex-row gap-3 cursor-pointer hover:text-[#535fdb] duration-300">
                <FaAngleDoubleRight className="mt-1" />
                Pricing Plan
              </p>
              <p className="flex flex-row gap-3 cursor-pointer hover:text-[#535fdb] duration-300">
                <FaAngleDoubleRight className="mt-1" />
                Gallery
              </p>
              <p className="flex flex-row gap-3 cursor-pointer hover:text-[#535fdb] duration-300">
                <FaAngleDoubleRight className="mt-1" />
                Instructor
              </p>
              <p className="flex flex-row gap-3 cursor-pointer hover:text-[#535fdb] duration-300">
                <FaAngleDoubleRight className="mt-1" />
                Purchase Guide
              </p>
            </div>
          </div>

          <div>
            <h1 className="text-2xl bold text-white">Contact Info</h1>
            <div className="text-white text-base font-medium flex flex-col gap-5 pt-[3rem]">
              <p className="flex flex-row gap-3">
                <GrLocation className="mt-1" />
                275 Quadra Street Victoria Road,
                <br /> New York
              </p>
              <p className="flex flex-row gap-3 cursor-pointer hover:text-[#535fdb] duration-300">
                <IoCallSharp className="mt-1" />+ 1 (237) 382-2839
              </p>
              <p className="flex flex-row gap-3 cursor-pointer hover:text-[#535fdb] duration-300">
                <IoCallSharp className="mt-1" />+ 1 (237) 382-2840
              </p>
              <p className="flex flex-row gap-3 cursor-pointer hover:text-[#535fdb] duration-300">
                <MdOutlineEmail className="mt-1" />
                yourmailaddress@example.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer1;
