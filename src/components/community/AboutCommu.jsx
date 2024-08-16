import { PiMedalFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { HiMiniFlag } from "react-icons/hi2";
import { TiArrowRight } from "react-icons/ti";

const AboutCommu = () => {
  return (
    <>
      <section className="">
        <div className="flex flex-row gap-8 justify-center py-[8rem]">
          <div className="h-[34.063rem] w-[40rem] max-w-full">
            <img src="/images/choose/choose-us.webp" alt="1" />
          </div>

          <div>
            <div className="">
              <span className="text-base font-bold tracking-widest	text-[#535fdb]">
                ABOUT US
              </span>
              <h1 className="text-[2.5rem] font-bold">
                Creating A Community Of Life
                <br /> Long Learners
              </h1>
            </div>
            <div className=" py-[2rem]">
              <p className="text-base font-medium text-[#6f6b80] pl-2 border-l-2 border-[#535fdb]">
                Our online learning platform is designed to be flexible,
                enabling you to fit
                <br /> your learning around your busy schedule. You can access
                the courses on any
                <br /> device, including desktop computers, tablet & mobile
                devices.
              </p>
            </div>
            <div className="flex flex-row items-center gap-14">
              <div className="flex flex-col gap-8">
                <div className="flex flex-row gap-4">
                  <div className="h-[40px] w-[40px] bg-[#fff1f1] rounded-full flex items-center justify-center">
                    <PiMedalFill className="text-base text-[#f86f03]" />
                  </div>
                  <p className="text-lg font-bold text-[#231f40] mt-2">
                    2000+ Verified Course
                  </p>
                </div>

                <div className="flex flex-row gap-4">
                  <div className="h-[40px] w-[40px] bg-[#fff1f1] rounded-full flex items-center justify-center">
                    <FaUser className="text-base text-[#f86f03]" />
                  </div>
                  <p className="text-lg font-bold text-[#231f40] mt-2">
                    Expert Instructors
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex flex-row gap-4">
                  <div className="h-[40px] w-[40px] bg-[#fff1f1] rounded-full flex items-center justify-center">
                    <FaVideo className="text-base text-[#f86f03]" />
                  </div>
                  <p className="text-lg font-bold text-[#231f40] mt-2">
                    256+ Free Videos
                  </p>
                </div>

                <div className="flex flex-row gap-4">
                  <div className="h-[40px] w-[40px] bg-[#fff1f1] rounded-full flex items-center justify-center">
                    <HiMiniFlag className="text-base text-[#f86f03]" />
                  </div>
                  <p className="text-lg font-bold text-[#231f40] mt-2">
                    Big Student Community
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-[3rem]">
              <button className="flex flex-row gap-2 font-bold bg-[#535fdb] text-[#f5eeee] px-[1.938rem] py-[0.906rem] text-lg rounded-md hover:bg-[#273849] duration-300">
                Explore Courses <TiArrowRight className="mt-1.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCommu;
