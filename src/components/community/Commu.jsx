import { GrLocation } from "react-icons/gr";
import { GoArrowRight } from "react-icons/go";

import { Link } from "react-router-dom";
import News from "./News";
const Commu = () => {
  return (
    <>
      <section className="pb-[2rem]">
        <div className="text-center pt-[8rem]">
          <span className="text-base font-bold tracking-widest	text-[#535fdb]">
            UPCOMING EVENT
          </span>
          <h1 className="text-[2.5rem] font-bold pt-[0.5rem]">
            Let’s Join Our Community
          </h1>
        </div>

        <div className="flex flex-row items-center justify-center gap-7 cursor-pointer pt-[2.5rem]">
          <div className="relative h-[28.75rem] w-[23.125rem] max-w-full min-h-[15.625rem] bg-[#F4F4F4] rounded-sm hover:bg-white hover:shadow-md	duration-500">
            <div className="relative h-[16.875rem] w-[23.125rem]">
              <img
                src="/images/common/masonry1.webp"
                alt="1"
                className="relative h-full w-full rounded-t-md"
              />
              <span className="absolute top-5 bg-[#525fe1] py-2 px-4 text-base font-bold text-white rounded-r-full">
                13th Dec 2024
              </span>
            </div>
            <div className="flex flex-col items-left  gap-4 px-6">
              <div className="flex flex gap-2 pt-6">
                <GrLocation color="blue" className="mt-1" />
                <span className="text-base font-normal text-[#6f6b80]">
                  Washington DC, EK 3642
                </span>
              </div>
              <div>
                <h1 className="text-xl font-bold">
                  Explorations of Regional
                  <br /> Chief Executive Network
                </h1>
              </div>
              <div className="flex flex text-lg font-bold text-[#525fe1] gap-4">
                <Link className="hover:underline">Get Ticket</Link>
                <GoArrowRight size={20} className="mt-1" />
              </div>
            </div>
          </div>

          <div className="relative h-[28.75rem] w-[23.125rem] max-w-full min-h-[15.625rem] bg-[#F4F4F4] rounded-sm hover:bg-white hover:shadow-md	duration-500">
            <div className="relative h-[16.875rem] w-[23.125rem]">
              <img
                src="/images/common/course2.webp"
                alt="1"
                className="relative h-full w-full rounded-t-md"
              />
              <span className="absolute top-5 bg-[#525fe1] py-2 px-4 text-base font-bold text-white rounded-r-full">
                27th Dec 2024
              </span>
            </div>
            <div className="flex flex-col  gap-4 px-6">
              <div className="flex flex gap-2 pt-6">
                <GrLocation color="blue" className="mt-1" />
                <span className="text-base font-normal text-[#6f6b80]">
                  New York City, PA 17401
                </span>
              </div>
              <div>
                <h1 className="text-xl font-bold">
                  Virtual Spring Part-time Jobs
                  <br /> Fair for Student
                </h1>
              </div>
              <div className="flex flex text-lg font-bold text-[#525fe1] gap-4">
                <Link className="hover:underline">Get Ticket</Link>
                <GoArrowRight size={20} className="mt-1" />
              </div>
            </div>
          </div>

          <div className="relative h-[28.75rem] w-[23.125rem] max-w-full min-h-[15.625rem] bg-[#F4F4F4] rounded-sm hover:bg-white hover:shadow-md	duration-500">
            <div className="relative h-[16.875rem] w-[23.125rem]">
              <img
                src="/images/common/course3.webp"
                alt="1"
                className="relative h-full w-full rounded-t-md"
              />
              <span className="absolute top-5 bg-[#525fe1] py-2 px-4 text-base font-bold text-white rounded-r-full">
                16th Dec 2024
              </span>
            </div>
            <div className="flex flex-col items-left gap-4 px-6">
              <div className="flex flex gap-2 pt-6">
                <GrLocation color="blue" className="mt-1" />
                <span className="text-base font-normal text-[#6f6b80]">
                  New York City, PA 17401
                </span>
              </div>
              <div>
                <h1 className="text-xl font-bold">
                  Write A Novel Outline From
                  <br /> Scratch
                </h1>
              </div>
              <div className="flex flex text-lg font-bold text-[#525fe1] gap-4">
                <Link className="hover:underline">Get Ticket</Link>
                <GoArrowRight size={20} className="mt-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <News />
    </>
  );
};

export default Commu;
