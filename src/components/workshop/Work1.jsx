import { TiArrowRight } from "react-icons/ti";
const Work1 = () => {
  return (
    <>
      <section className="bg-[#545fda] h-full p-4">
        <div className="work flex flex-row gap-28 items-center justify-center">
          <div className="">
            <span className="text-base font-bold tracking-widest text-white mb-2">
              FREE WORKSHOP
            </span>
            <h1 className="text-[2.5rem] font-bold text-white">
              Join Our Free Workshops
            </h1>
            <p className="text-base font-medium text-white pt-8">
              Join us at our “Free Workshop” event to expand your knowledge,
              gain new
              <br />
              insights, and connect with like-minded individuals. Our expert
              speakers will
              <br />
              provide valuable insights on a range of topics.
            </p>

            <div className="pt-[2rem]">
              <button className="flex flex-row gap-2 font-medium bg-[#fff] text-[#535fdb] px-[1.938rem] py-[0.906rem] text-lg rounded-md hover:bg-[#FF8C00] hover:text-white duration-300">
                More Upcoming Workshop <TiArrowRight className="mt-1.5" />
              </button>
            </div>
          </div>

          <div className="h-[340px] w-[508.487px] ">
            <img
              src="/images/work/video-popup.jpg"
              alt="1"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Work1;
