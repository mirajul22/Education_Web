import { TiArrowRight } from "react-icons/ti";

const Hero = () => {
  return (
    <>
      <section className="bg py-[7.5rem] px-[6.25rem]">
        <img src="/images/hero/shape-11-03-2.png" alt="1" className="bg1" />
        <div className="relative flex flex-row item-center justify-center gap-0">
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-[#535fd9] text-[1rem] font-extrabold tracking-widest 	">
                BETTER LEARNING FUTURE WITH US
              </span>
            </div>

            <div className="text-7xl font-extrabold flex flex-col gap-2">
              <h1>Education Is</h1>
              <h1>About Academic</h1>
              <h1>Excellence</h1>
            </div>

            <div className="text-lg flex flex-col font-medium text-[#9f94a1]">
              <p>
                Empower yourself with the knowledge and skills gained through
              </p>
              <p>online education and best instructors.</p>
            </div>

            <div className="pt-[1rem]">
              <button className="flex flex-row gap-2 bg-[#535fdb] text-[#f5eeee] px-[1.938rem] py-[0.906rem] text-lg  rounded-md hover:bg-[#273849] duration-300">
                Get Started Today <TiArrowRight className="mt-1.5" />
              </button>
            </div>
          </div>

          <div className="flex flex-row justify-end mt-[6.875rem]">
            <div className="bg2">
              <img
                src="/images/hero/image-03-2.png"
                alt="2"
                className="translate-y-[-6.25rem]"
              />
            </div>
            <div className="bg3">
              <img
                src="/images/hero/image-01-2.png"
                alt="3"
                className="translate-y-[5.625rem]"
              />
            </div>
            <div className="bg4 ">
              <img src="/images/hero/image-02-2.png" alt="4" className="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
