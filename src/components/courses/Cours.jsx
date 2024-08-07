const Cours = () => {
  return (
    <>
      <section className="py-[7rem]">
        <div className="flex flex-col gap-2 text-center">
          <span className="text-lg font-bold tracking-widest	text-[#535fdb]">
            COURSE CATEGORIES
          </span>
          <h1 className="text-[2.5rem] font-bold">Popular Topics To Learn</h1>
        </div>

        <div className="flex flex-row item-center justify-center gap-10 pt-[2rem]">
          <div className="bg-[#f6efee] min-w-80 flex flex-row gap-8 p-5 rounded-md hover:bg-[#535fdb]  duration-300 col">
            <div className="bg-[#fff] p-3">
              <img src="/images/card/bag.png" alt="6" className="w-[30px]" />
            </div>
            <div className="flex flex-col ">
              <span className="font-medium text-lg">Lifestyle</span>
              <span className="text-[#9f939c] font-medium">7 Courses</span>
            </div>
          </div>

          <div className="bg-[#f6efee] min-w-80 flex flex-row   gap-8 p-5 rounded-md hover:bg-[#535fdb]  duration-300 col">
            <div className="bg-[#fff] p-3">
              <img
                src="/images/card/reading-book.png"
                alt="7"
                className="w-[30px]"
              />
            </div>
            <div className="flex flex-col ">
              <span className="font-medium text-lg">Motivation</span>
              <span className="text-[#9f939c] font-medium">3 Courses</span>
            </div>
          </div>

          <div className="bg-[#f6efee] min-w-80 flex flex-row   gap-8 p-5 rounded-md hover:bg-[#535fdb]  duration-300 col">
            <div className="bg-[#fff] p-3">
              <img
                src="/images/card/pen-tool.png"
                alt="8"
                className="w-[30px]"
              />
            </div>
            <div className="flex flex-col ">
              <span className="font-medium text-lg">Photography</span>
              <span className="text-[#9f939c] font-medium">4 Courses</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row item-center justify-center gap-10 pt-[2rem]">
          <div className="bg-[#f6efee] min-w-80 flex flex-row gap-8 p-5 rounded-md hover:bg-[#535fdb]  duration-300 col">
            <div className="bg-[#fff] p-3">
              <img src="/images/card/video.png" alt="9" className="w-[30px]" />
            </div>
            <div className="flex flex-col ">
              <span className="font-medium text-lg">Sales Marketing</span>
              <span className="text-[#9f939c] font-medium">3 Courses</span>
            </div>
          </div>

          <div className="bg-[#f6efee] min-w-80 flex flex-row   gap-8 p-5 rounded-md hover:bg-[#535fdb]  duration-300 col">
            <div className="bg-[#fff] p-3">
              <img
                src="/images/card/calculator.png"
                alt="10"
                className="w-[30px]"
              />
            </div>
            <div className="flex flex-col ">
              <span className="font-medium text-lg">UI Design</span>
              <span className="text-[#9f939c] font-medium">3 Courses</span>
            </div>
          </div>

          <div className="bg-[#f6efee] min-w-80 flex flex-row   gap-8 p-5 rounded-md hover:bg-[#535fdb]  duration-300 col">
            <div className="bg-[#fff] p-3">
              <img
                src="/images/card/microscope.png"
                alt="11"
                className="w-[30px]"
              />
            </div>
            <div className="flex flex-col ">
              <span className="font-medium text-lg">Creativity</span>
              <span className="text-[#9f939c] font-medium">6 Courses</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row item-center justify-center gap-10 pt-[2rem]">
          <div className="bg-[#f6efee] min-w-80 flex flex-row gap-8 p-5 rounded-md hover:bg-[#535fdb]  duration-300 col">
            <div className="bg-[#fff] p-3">
              <img
                src="/images/card/headphones.png"
                alt="12"
                className="w-[30px]"
              />
            </div>
            <div className="flex flex-col ">
              <span className="font-medium text-lg">Business Analysis</span>
              <span className="text-[#9f939c] font-medium">5 Courses</span>
            </div>
          </div>

          <div className="bg-[#f6efee] min-w-80 flex flex-row   gap-8 p-5 rounded-md hover:bg-[#535fdb]  duration-300 col">
            <div className="bg-[#fff] p-3">
              <img
                src="/images/card/science-report.png"
                alt="6"
                className="w-[30px]"
              />
            </div>
            <div className="flex flex-col ">
              <span className="font-medium text-lg">Data Science</span>
              <span className="text-[#9f939c] font-medium">4 Courses</span>
            </div>
          </div>

          <div className="bg-[#f6efee] min-w-80 flex flex-row   gap-8 p-5 rounded-md hover:bg-[#535fdb]  duration-300 col">
            <div className="bg-[#fff] p-3">
              <img src="/images/card/dumble.png" alt="6" className="w-[30px]" />
            </div>
            <div className="flex flex-col ">
              <span className="font-medium text-lg">Health & Fitness</span>
              <span className="text-[#9f939c] font-medium">3 Courses</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cours;
