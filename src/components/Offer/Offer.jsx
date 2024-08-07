import { TiArrowRight } from "react-icons/ti";
import Counter from "./Counter";

const Offer = () => {
  return (
    <>
      <section>
        <div className="flex flex-row gap-2">
          <div className="flex ">
            <div className=" block h-[12.5rem] w-[9.375rem] translate-y-20 z-[-1]">
              <img
                src="/images/offer/about-group-2.jpg"
                alt="1"
                className="max-w-full min-h-auto min-w-auto rounded-md translate-x-6 z-[-1]"
              />
            </div>
            <div className="h-[36.875rem] w-[28.125rem] inline-block">
              <img
                src="/images/offer/about-group-1.jpg"
                alt="2"
                className="max-w-full z-1 rounded-md"
              />
            </div>
            <div className="h-[15.125rem] w-[11.75rem] inline-block translate-y-[10.7rem]">
              <img
                src="/images/offer/about-group-3.jpg "
                alt="3"
                className="max-w-full rounded-md z-10 translate-x-[-5rem]"
              />
            </div>
          </div>

          <div>
            <div>
              <span className="text-base font-bold tracking-widest	text-[#535fdb]">
                WHO WE ARE
              </span>
              <h1 className="text-[2.5rem] font-bold">
                We Offer The Best Carrier
              </h1>
            </div>

            <div className="flex flex-col gap-8 pt-[2rem]">
              <div className="flex flex-row gap-8">
                <div className="bg-[#f6efee] h-[3.75rem] w-[3.75rem] rounded-full mt-2 ">
                  <img
                    src="/images/offer/student-2.png"
                    alt="1"
                    className="max-w-full mx-auto pt-3"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-bold">
                    Industry Expert Instructor
                  </h1>
                  <p className="text-[#6f6b80] text-base font-normal">
                    Online learning has become increasingly popular in recent
                    years,
                    <br /> offering a flexible and convenient way for learning.
                  </p>
                </div>
              </div>

              <div className="flex flex-row gap-8">
                <div className="bg-[#f6efee] h-[3.75rem] w-[3.75rem] rounded-full mt-2 ">
                  <img
                    src="/images/offer/book-2.png"
                    alt="1"
                    className="max-w-full mx-auto pt-4"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-bold">
                    Up-to-Date Course Content
                  </h1>
                  <p className="text-[#6f6b80] text-base font-normal">
                    Our platform also features a collaborative learning
                    environment,
                    <br /> where you can connect with fellow learners.
                  </p>
                </div>
              </div>

              <div className="flex flex-row gap-8">
                <div className="bg-[#f6efee] h-[3.75rem] w-[3.75rem] rounded-full mt-2 ">
                  <img
                    src="/images/offer/reward-2.png"
                    alt="1"
                    className="max-w-full mx-auto pt-4"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-bold">
                    Biggest Student Community
                  </h1>
                  <p className="text-[#6f6b80] text-base font-normal">
                    Our courses are designed by industry experts and delivered
                    through
                    <br /> interactive online modules with a great community.
                  </p>
                </div>
              </div>

              <div className="pt-[1rem]">
                <button className="flex flex-row gap-2 bg-[#535fdb] text-[#f5eeee] px-[1.938rem] py-[0.906rem] text-lg rounded-md hover:bg-[#273849] duration-300">
                  Know About Us <TiArrowRight className="mt-1.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Counter />
    </>
  );
};

export default Offer;
