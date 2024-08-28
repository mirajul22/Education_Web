// import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
// import { FaHeart } from "react-icons/fa6";
// import { PiNotebookThin } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";
// import { HiOutlineUserCircle } from "react-icons/hi2";
// import { CiClock2 } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import Pagin from "../pagination/Pagin";

const Grid = () => {
  return (
    <>
      <section>
        <div className="pt-[6rem]">
          <div className="flex flex-row justify-center gap-8">
            <Link to={"/detail"}>
              <div className="pt-[2rem]">
                <div className=" h-[30rem] w-[23.125rem]  bg-[#F4F4F4] rounded-md hover:bg-white hover:shadow-lg duration-300">
                  <div className=" relative h-[16.853rem] w-[23.125rem] rounded-t-md overflow-hidden">
                    <img
                      src="/images/blogCard/course-01.webp"
                      alt="1"
                      className="max-w-full h-full w-full   relative transform hover:scale-110 duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-4 px-4">
                    <div className="flex flex-row gap-8  py-[1rem] ">
                      <div className="flex flex-row-reverse gap-3">
                        <p className="text-[#6f6b80] text-sm font-medium">
                          13 Lessons
                        </p>
                        <BiSolidOffer className="mt-1 text-[#525fe1]" />
                      </div>
                    </div>

                    <div className="font-bold text-2xl cursor-pointer hover:text-[#535fdb] duration-300">
                      <h1>
                        The Complete Web
                        <br /> Developer Guideline 2023
                      </h1>
                    </div>
                    <div className="flex flex-row justify-between mt-2">
                      <h1 className=" flex flex-row items-center justify-center gap-2 text-base font-bold text-[#6f6b80]">
                        <SlCalender />
                        17 Feb,2023
                      </h1>
                      <div className="flex flex text-lg font-bold text-[#525fe1] gap-4">
                        <Link className="hover:underline">Read More</Link>
                        <GoArrowRight size={20} className="mt-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to={"/detail"}>
              <div className="pt-[2rem]">
                <div className=" h-[30rem] w-[23.125rem]  bg-[#F4F4F4] rounded-md hover:bg-white hover:shadow-lg duration-300">
                  <div className=" relative h-[16.853rem] w-[23.125rem] rounded-t-md overflow-hidden">
                    <img
                      src="/images/blogCard/course-02.webp"
                      alt="1"
                      className="max-w-full h-full w-full   relative transform hover:scale-110 duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-4 px-4">
                    <div className="flex flex-row gap-8  py-[1rem] ">
                      <div className="flex flex-row-reverse gap-3">
                        <p className="text-[#6f6b80] text-sm font-medium">
                          13 Lessons
                        </p>
                        <BiSolidOffer className="mt-1 text-[#525fe1]" />
                      </div>
                    </div>

                    <div className="font-bold text-2xl cursor-pointer hover:text-[#535fdb] duration-300">
                      <h1>
                        The Complete Web
                        <br /> Developer Guideline 2023
                      </h1>
                    </div>
                    <div className="flex flex-row justify-between mt-2">
                      <h1 className=" flex flex-row items-center justify-center gap-2 text-base font-bold text-[#6f6b80]">
                        <SlCalender />
                        17 Feb,2023
                      </h1>
                      <div className="flex flex text-lg font-bold text-[#525fe1] gap-4">
                        <Link className="hover:underline">Read More</Link>
                        <GoArrowRight size={20} className="mt-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to={"/detail"}>
              <div className="pt-[2rem]">
                <div className=" h-[30rem] w-[23.125rem]  bg-[#F4F4F4] rounded-md hover:bg-white hover:shadow-lg duration-300">
                  <div className=" relative h-[16.853rem] w-[23.125rem] rounded-t-md overflow-hidden">
                    <img
                      src="/images/blogCard/course-03.webp"
                      alt="1"
                      className="max-w-full h-full w-full   relative transform hover:scale-110 duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-4 px-4">
                    <div className="flex flex-row gap-8  py-[1rem] ">
                      <div className="flex flex-row-reverse gap-3">
                        <p className="text-[#6f6b80] text-sm font-medium">
                          13 Lessons
                        </p>
                        <BiSolidOffer className="mt-1 text-[#525fe1]" />
                      </div>
                    </div>

                    <div className="font-bold text-2xl cursor-pointer hover:text-[#535fdb] duration-300">
                      <h1>
                        The Complete Web
                        <br /> Developer Guideline 2023
                      </h1>
                    </div>
                    <div className="flex flex-row justify-between mt-2">
                      <h1 className=" flex flex-row items-center justify-center gap-2 text-base font-bold text-[#6f6b80]">
                        <SlCalender />
                        17 Feb,2023
                      </h1>
                      <div className="flex flex text-lg font-bold text-[#525fe1] gap-4">
                        <Link className="hover:underline">Read More</Link>
                        <GoArrowRight size={20} className="mt-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-row justify-center gap-8">
            <Link to={"/detail"}>
              <div className="pt-[2rem]">
                <div className=" h-[30rem] w-[23.125rem]  bg-[#F4F4F4] rounded-md hover:bg-white hover:shadow-lg duration-300">
                  <div className=" relative h-[16.853rem] w-[23.125rem] rounded-t-md overflow-hidden">
                    <img
                      src="/images/blogCard/course-04.webp"
                      alt="1"
                      className="max-w-full h-full w-full   relative transform hover:scale-110 duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-4 px-4">
                    <div className="flex flex-row gap-8  py-[1rem] ">
                      <div className="flex flex-row-reverse gap-3">
                        <p className="text-[#6f6b80] text-sm font-medium">
                          13 Lessons
                        </p>
                        <BiSolidOffer className="mt-1 text-[#525fe1]" />
                      </div>
                    </div>

                    <div className="font-bold text-2xl cursor-pointer hover:text-[#535fdb] duration-300">
                      <h1>
                        The Complete Web
                        <br /> Developer Guideline 2023
                      </h1>
                    </div>
                    <div className="flex flex-row justify-between mt-2">
                      <h1 className=" flex flex-row items-center justify-center gap-2 text-base font-bold text-[#6f6b80]">
                        <SlCalender />
                        17 Feb,2023
                      </h1>
                      <div className="flex flex text-lg font-bold text-[#525fe1] gap-4">
                        <Link className="hover:underline">Read More</Link>
                        <GoArrowRight size={20} className="mt-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to={"/detail"}>
              <div className="pt-[2rem]">
                <div className=" h-[30rem] w-[23.125rem]  bg-[#F4F4F4] rounded-md hover:bg-white hover:shadow-lg duration-300">
                  <div className=" relative h-[16.853rem] w-[23.125rem] rounded-t-md overflow-hidden">
                    <img
                      src="/images/blogCard/course-05.webp"
                      alt="1"
                      className="max-w-full h-full w-full   relative transform hover:scale-110 duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-4 px-4">
                    <div className="flex flex-row gap-8  py-[1rem] ">
                      <div className="flex flex-row-reverse gap-3">
                        <p className="text-[#6f6b80] text-sm font-medium">
                          13 Lessons
                        </p>
                        <BiSolidOffer className="mt-1 text-[#525fe1]" />
                      </div>
                    </div>

                    <div className="font-bold text-2xl cursor-pointer hover:text-[#535fdb] duration-300">
                      <h1>
                        The Complete Web
                        <br /> Developer Guideline 2023
                      </h1>
                    </div>
                    <div className="flex flex-row justify-between mt-2">
                      <h1 className=" flex flex-row items-center justify-center gap-2 text-base font-bold text-[#6f6b80]">
                        <SlCalender />
                        17 Feb,2023
                      </h1>
                      <div className="flex flex text-lg font-bold text-[#525fe1] gap-4">
                        <Link className="hover:underline">Read More</Link>
                        <GoArrowRight size={20} className="mt-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to={"/detail"}>
              <div className="pt-[2rem]">
                <div className=" h-[30rem] w-[23.125rem]  bg-[#F4F4F4] rounded-md hover:bg-white hover:shadow-lg duration-300">
                  <div className=" relative h-[16.853rem] w-[23.125rem] rounded-t-md overflow-hidden">
                    <img
                      src="/images/blogCard/course-06.webp"
                      alt="1"
                      className="max-w-full h-full w-full   relative transform hover:scale-110 duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-4 px-4">
                    <div className="flex flex-row gap-8  py-[1rem] ">
                      <div className="flex flex-row-reverse gap-3">
                        <p className="text-[#6f6b80] text-sm font-medium">
                          13 Lessons
                        </p>
                        <BiSolidOffer className="mt-1 text-[#525fe1]" />
                      </div>
                    </div>

                    <div className="font-bold text-2xl cursor-pointer hover:text-[#535fdb] duration-300">
                      <h1>
                        The Complete Web
                        <br /> Developer Guideline 2023
                      </h1>
                    </div>
                    <div className="flex flex-row justify-between mt-2">
                      <h1 className=" flex flex-row items-center justify-center gap-2 text-base font-bold text-[#6f6b80]">
                        <SlCalender />
                        17 Feb,2023
                      </h1>
                      <div className="flex flex text-lg font-bold text-[#525fe1] gap-4">
                        <Link className="hover:underline">Read More</Link>
                        <GoArrowRight size={20} className="mt-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <Pagin />
      </section>
    </>
  );
};

export default Grid;
