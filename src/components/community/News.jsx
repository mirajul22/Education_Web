import { TiArrowRight } from "react-icons/ti";
import { LuMailOpen } from "react-icons/lu";

const News = () => {
  return (
    <>
      <section className="sec">
        <div className="text-center pt-[14rem]">
          <span className="text-base font-bold tracking-widest	text-[#535fdb]">
            SUBSCRIBE NEWSLETTER
          </span>
          <h1 className="text-[2.5rem] font-bold pt-[0.5rem]">
            Get Every Latest News
          </h1>
        </div>
        <div className="pt-[3rem]">
          <div className="flex flex-row items-center justify-center h-[80px] w-[670px] bg-white mx-auto px-4 rounded-md">
            <div className="flex flex-row gap-3 items-center justify-center w-full h-full">
              <LuMailOpen className="text-[#6f6b80]" />
              <input
                type="text"
                placeholder="Enter your mail address"
                className="w-full h-full outline-none border-0"
              />
            </div>
            <div className="">
              <button className="flex flex-row gap-2 bg-[#535fdb] text-[#f5eeee] px-[1.938rem] py-[0.906rem] text-lg rounded-md hover:bg-[#273849] duration-300">
                Subscribe <TiArrowRight className="mt-1.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
