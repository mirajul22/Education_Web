import Edu from "../edubg/Edu";
import { TbWorld } from "react-icons/tb";
import { RiHeadphoneFill, RiMailOpenFill } from "react-icons/ri";
import { IoLocation } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

const Conthero = () => {
  return (
    <>
      <section>
        <Edu title={"Contact Us"} />
        <div className="pt-[9rem]">
          <div className="text-center">
            <span className="text-base font-bold tracking-widest	text-[#535fdb]">
              NEED HELP?
            </span>
            <h1 className="text-[2.5rem] font-bold">Get In Touch With us</h1>
          </div>
          <div className="flex flex-row items-center justify-center gap-24 pt-[3rem]">
            <div className="flex flex-col items-center justify-center gap-7">
              <div className="flex flex-row items-center justify-center gap-7">
                <div className=" ani ani1 flex items-center justify-center bg-[#fff] h-[17rem] w-[15rem] rounded-md shadow-2xl cursor-pointer">
                  <div className=" flex flex-col gap-6 items-center justify-center text-center">
                    <div className="icon-bg w-[3.125rem] h-[3.125rem] bg-[#eff4fc] rounded-full flex items-center justify-center duration-300">
                      <TbWorld
                        size={25}
                        className="icon text-[#535fdb] duration-300"
                      />
                    </div>

                    <h1 className="text-xl font-bold text-[#231f40] duration-300">
                      Our Website
                    </h1>
                    <p className="text-base font-medium text-[#231f40] text-center duration-300">
                      www.example.com
                      <br />
                      www.theme.net
                    </p>
                  </div>
                </div>

                <div className=" ani ani1 flex items-center justify-center bg-[#fff] h-[17rem] w-[15rem] rounded-md shadow-2xl cursor-pointer">
                  <div className=" flex flex-col gap-6 items-center justify-center text-center">
                    <div className="icon-bg w-[3.125rem] h-[3.125rem] bg-[#eff8f6] rounded-full flex items-center justify-center duration-300">
                      <RiHeadphoneFill
                        size={25}
                        className="icon text-[#50C878] duration-300"
                      />
                    </div>

                    <h1 className="text-xl font-bold text-[#231f40] duration-300">
                      Call Us On
                    </h1>
                    <p className="text-base font-medium text-[#231f40] text-center duration-300">
                      +2763 (388) 2930
                      <br /> +4875 (356) 2568
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-center justify-center gap-7">
                <div className=" ani ani1 flex items-center justify-center bg-[#fff] h-[17rem] w-[15rem] rounded-md shadow-2xl cursor-pointer">
                  <div className=" flex flex-col gap-6 items-center justify-center text-center">
                    <div className="icon-bg w-[3.125rem] h-[3.125rem] bg-[#fff3ee] rounded-full flex items-center justify-center duration-300">
                      <RiMailOpenFill
                        size={25}
                        className="icon text-[#FFAC1C] duration-300"
                      />
                    </div>

                    <h1 className="text-xl font-bold text-[#231f40] duration-300">
                      Email Us
                    </h1>
                    <p className="text-base font-medium text-[#231f40] text-center duration-300">
                      eduvibe@example.com <br />
                      contact@eduvibe.com
                    </p>
                  </div>
                </div>

                <div className=" ani ani1 flex items-center justify-center bg-[#fff] h-[17rem] w-[15rem] rounded-md shadow-2xl cursor-pointer">
                  <div className=" flex flex-col gap-6 items-center justify-center text-center">
                    <div className="icon-bg w-[3.125rem] h-[3.125rem] bg-[#fff1f1] rounded-full flex items-center justify-center duration-300">
                      <IoLocation
                        size={25}
                        className="icon text-[#FF5733] duration-300"
                      />
                    </div>

                    <h1 className="text-xl font-bold text-[#231f40] duration-300">
                      Our Location
                    </h1>
                    <p className="text-base font-medium text-[#231f40] text-center duration-300">
                      486 Normana Avenue
                      <br /> Morningtide, 4223
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-5">
              <input
                type="text"
                placeholder="Name*"
                required
                className="px-[30px] h-[60px] w-[570px] max-w-full rounded-md text-base  font-medium bg-[#f5f5f5] placeholder:text-[#6f6b80] outline-none focus:outline-[#525fe1] duration-300"
              />
              <input
                type="email"
                placeholder="Email*"
                required
                className="px-[30px] h-[60px] w-[570px] max-w-full rounded-md text-base  font-medium bg-[#f5f5f5] placeholder:text-[#6f6b80] outline-none focus:outline-[#525fe1] duration-300"
              />
              <input
                type="text"
                placeholder="Phone"
                className="px-[30px] h-[60px] w-[570px] max-w-full rounded-md text-base  font-medium bg-[#f5f5f5] placeholder:text-[#6f6b80] outline-none focus:outline-[#525fe1] duration-300"
              />
              <input
                type="text"
                placeholder="Subject"
                className="px-[30px] h-[60px] w-[570px] max-w-full rounded-md text-base  font-medium bg-[#f5f5f5] placeholder:text-[#6f6b80] outline-none focus:outline-[#525fe1] duration-300"
              />
              <textarea
                type="text"
                placeholder="Your Message"
                className="px-[30px] py-[17px] min-h-[180px] h-[180px] w-[570px] max-w-full rounded-md text-base  font-medium bg-[#f5f5f5] placeholder:text-[#6f6b80] outline-none focus:outline-[#525fe1] duration-300"
              />
              <button className="flex flex-row items-center justify-center gap-4 font-bold bg-[#535fdb] text-[#f5eeee] h-[60px] w-[570px] px-[30px] text-lg rounded-md hover:bg-[#273849] duration-300">
                Submit Now <FaArrowRight className="" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center h-[515px] w-[1200px] p-[15px] my-[9rem] mx-auto">
            <div className="mapouter relative,text-right h-[500px] w-[1170px]">
              <div className="gmap_canvas overflow-hidden bg-none h-[500px] w-[1170px]">
                <iframe
                  width="1170"
                  height="500"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=saket&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"></iframe>
                <a href="https://www.analarmclock.com/">online alarm clock</a>
                <br />
                <a href="https://timenowin.net/"></a>
                <br />
                {/* <style>.mapouter{position: relative;text-align: right;height: 500px;width: 1170px;}</style><a href="https://www.embedmaps.co">embedding maps in website</a><style>.gmap_canvas{overflow: hidden;background: none !important;height: 500px;width: 1170px;}
                    </style> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Conthero;
