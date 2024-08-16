import { TiArrowRight } from "react-icons/ti";

const Hero = () => {
  return (
    <>
      <section>
        <div className="flex flex-row items-center justify-normal pt-[8rem]">
          <div className="flex flex-row gap-0">
            <div className="about1 pt-[3.4rem]">
              <div className="h-[10.625rem] w-[10.625rem] bg-white shadow-xl rounded-full flex items-center justify-center z-1">
                <div className="">
                  <h1 className="text-3xl font-bold text-[#525fe1]">2.98</h1>
                  <p className="text-base font-bold text-[#231f40] mt-1">
                    Finished <br />
                    Sessions
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-full">
              <img
                src="/images/hero/about-image-01.png"
                alt="1"
                className="h-[28.75rem] w-[28.75rem]"
              />
            </div>
            <div className="about2 max-w-full pt-[16rem]">
              <img
                src="/images/hero/about-image-02.png"
                alt="2"
                className="z-1 h-[17rem] w-[17rem]"
              />
            </div>
          </div>
          <div>
            <div className="">
              <span className="text-base font-bold tracking-widest	text-[#535fdb]">
                ABOUT US
              </span>
              <h1 className="text-[2.5rem] font-bold">
                Knowledge is power,
                <br /> Information is liberating.
              </h1>
            </div>
            <div className="flex flex-col gap-8 pt-[1rem]">
              <p className="text-base font-medium text-[#6f6b80]">
                Online learning has become increasingly popular in recent years,
                offering a<br /> flexible and convenient way for individuals to
                pursue education.
              </p>

              <h1 className="text-xl font-bold text-[#231f40]">
                People Love To Learn With Us
              </h1>
              <div className="flex flex-row items-center gap-14">
                <div>
                  <span className="text-3xl font-bold text-[#f86f03]">90%</span>
                  <p className="text-base font-medium text-[#6f6b80] mt-2">
                    Students Complete
                    <br />
                    Course Successfully
                  </p>
                </div>

                <div>
                  <span className="text-3xl font-bold text-[#f86f03]">
                    9/10
                  </span>
                  <p className=" mt-2 text-base font-medium text-[#6f6b80]">
                    Users reported better
                    <br />
                    learning outcomes.
                  </p>
                </div>
              </div>
              <div className="pt-[1rem]">
                <button className="flex flex-row gap-2 font-bold bg-[#535fdb] text-[#f5eeee] px-[1.938rem] py-[0.906rem] text-lg rounded-md hover:bg-[#273849] duration-300">
                  Learn More <TiArrowRight className="mt-1.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
