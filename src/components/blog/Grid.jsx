// import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { PiNotebookThin } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";

import { HiOutlineUserCircle } from "react-icons/hi2";
import { CiClock2 } from "react-icons/ci";
const Grid = () => {
  return (
    <>
      <section>
        <div className="flex flex-row justify-center gap-8">
          <div className="pt-[2rem]">
            <div className=" h-[30rem] w-[23.125rem]  bg-[#F4F4F4] rounded-md hover:bg-white hover:shadow-lg duration-300">
              <div className=" relative h-[16.853rem] w-[23.125rem] rounded-t-md overflow-hidden">
                <img
                  src="/images/popular/course-30.webp"
                  alt="1"
                  className="max-w-full h-full w-full   relative transform hover:scale-110 duration-300"
                />
                <div className="flex flex-row justify-between px-4 translate-y-[-15.938rem]">
                  <span className="bg-white py-1 px-4 text-sm font-medium text-[#535fdb] rounded-sm mt-1">
                    All Levels
                  </span>
                  <span className=" p-2 bg-[#CCCCCC] rounded-full">
                    <FaHeart color="#fff" />
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 px-4">
                <div className="flex flex-row gap-8  py-[1.5rem] ">
                  <div className="flex flex-row-reverse gap-3">
                    <p className="text-[#6f6b80] text-sm font-medium">
                      13 Lessons
                    </p>
                    <BiSolidOffer className="mt-1 text-[#525fe1]" />
                  </div>

                  {/* <div className="flex flex-row-reverse gap-3">
                    <p className="text-[#6f6b80] text-sm font-medium">
                      25 hour
                    </p>
                    <CiClock2 className="mt-1" />
                  </div> */}
                </div>

                <div className="font-bold text-xl cursor-pointer hover:text-[#535fdb] duration-300">
                  <h1>Competitive Strategy Law for</h1>
                  <h1>Management Consultants</h1>
                </div>

                {/* <div className="flex flex-row gap-1 py-[0.5rem]">
                  <img
                    src="/images/popular/favorite.png"
                    alt="1"
                    className=""
                  />
                  <img src="/images/popular/favorite.png" alt="2" />
                  <img src="/images/popular/favorite.png" alt="3" />
                  <img src="/images/popular/favorite.png" alt="4" />
                  <img src="/images/popular/favorite.png" alt="5" />
                  <p className="text-sm font-medium text-[#6f6b80]">
                    &nbsp; &nbsp; (1 Reviews)
                  </p>
                </div> */}

                {/* <hr /> */}

                <div className="flex flex-row justify-between mt-2">
                  <h1 className="text-xl font-bold text-[#535fdb]">$75.00</h1>
                  <div className="flex flex-row gap-3 text-[#6f6b80] text-sm font-medium ">
                    <HiOutlineUserCircle className="" size={18} />
                    <p>364 Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-[2rem]">
            <div className=" h-[33.75rem] w-[23.125rem]  bg-[#F4F4F4] rounded-md hover:bg-white hover:shadow-lg	duration-300">
              <div className=" relative h-[16.853rem] w-[23.125rem] rounded-md overflow-hidden">
                <img
                  src="/images/popular/course-39.webp"
                  alt="1"
                  className="max-w-full rounded-t-md relative transform hover:scale-110 duration-300"
                />
                <div className="flex flex-row justify-between px-4 translate-y-[-15.938rem]">
                  <span className="bg-white py-1 px-4 text-sm font-medium text-[#535fdb] rounded-sm mt-1">
                    Intermediate
                  </span>
                  <span className=" p-2 bg-[#CCCCCC] rounded-full">
                    <FaHeart color="#fff" />
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 px-4">
                <div className="flex flex-row gap-8  py-[1.5rem] ">
                  <div className="flex flex-row-reverse gap-3">
                    <p className="text-[#6f6b80] text-sm font-medium">
                      13 Lessons
                    </p>
                    <PiNotebookThin className="mt-1" />
                  </div>

                  <div className="flex flex-row-reverse gap-3">
                    <p className="text-[#6f6b80] text-sm font-medium">
                      30 hour
                    </p>
                    <CiClock2 className="mt-1" />
                  </div>
                </div>

                <div className="font-bold text-xl cursor-pointer hover:text-[#535fdb] duration-300">
                  <h1>Machine Learning A-Z: Hands-On</h1>
                  <h1>Python and java</h1>
                </div>

                <div className="flex flex-row gap-1 py-[0.5rem]">
                  <img
                    src="/images/popular/favorite.png"
                    alt="1"
                    className=""
                  />
                  <img src="/images/popular/favorite.png" alt="2" />
                  <img src="/images/popular/favorite.png" alt="3" />
                  <img src="/images/popular/favorite.png" alt="4" />
                  <img src="/images/popular/favorite.png" alt="5" />
                  <p className="text-sm font-medium text-[#6f6b80]">
                    &nbsp; &nbsp; (4 Reviews)
                  </p>
                </div>

                <hr />

                <div className="flex flex-row justify-between mt-2">
                  <h1 className="text-xl font-bold text-[#535fdb] flex gap-2">
                    $79.00
                    <span className="text-base font-medium text-[#6f6b80] line-through	">
                      $99.00
                    </span>
                  </h1>
                  <div className="flex flex-row gap-3 text-[#6f6b80] text-sm font-medium ">
                    <HiOutlineUserCircle className="" size={18} />
                    <p>674 Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-[2rem]">
            <div className=" h-[33.75rem] w-[23.125rem]   bg-[#F4F4F4] rounded-md hover:bg-white hover:shadow-lg	duration-300">
              <div className=" relative h-[16.853rem] w-[23.125rem] rounded-md overflow-hidden">
                <img
                  src="/images/popular/course-33.webp"
                  alt="1"
                  className="max-w-full rounded-t-md relative transform hover:scale-110 duration-300"
                />
                <div className="flex flex-row justify-between px-4 translate-y-[-15.938rem]">
                  <span className="bg-white py-1 px-4 text-sm font-medium text-[#535fdb] rounded-sm mt-1">
                    Beginner
                  </span>
                  <span className=" p-2 bg-[#CCCCCC] rounded-full">
                    <FaHeart color="#fff" />
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 px-4">
                <div className="flex flex-row gap-8  py-[1.5rem] ">
                  <div className="flex flex-row-reverse gap-3">
                    <p className="text-[#6f6b80] text-sm font-medium">
                      19 Lessons
                    </p>
                    <PiNotebookThin className="mt-1" />
                  </div>

                  <div className="flex flex-row-reverse gap-3">
                    <p className="text-[#6f6b80] text-sm font-medium">
                      15 hour
                    </p>
                    <CiClock2 className="mt-1" />
                  </div>
                </div>

                <div className="font-bold text-xl cursor-pointer hover:text-[#535fdb] duration-300">
                  <h1>Learning How To Write As A</h1>
                  <h1>Professional Author</h1>
                </div>

                <div className="flex flex-row gap-1 py-[0.5rem]">
                  <img
                    src="/images/popular/favorite.png"
                    alt="1"
                    className=""
                  />
                  <img src="/images/popular/favorite.png" alt="2" />
                  <img src="/images/popular/favorite.png" alt="3" />
                  <img src="/images/popular/favorite.png" alt="4" />
                  <img src="/images/popular/favorite.png" alt="5" />
                  <p className="text-sm font-medium text-[#6f6b80]">
                    &nbsp; &nbsp; (2 Reviews)
                  </p>
                </div>

                <hr />

                <div className="flex flex-row justify-between mt-2">
                  <h1 className="text-xl font-bold text-[#535fdb]">$29.00</h1>
                  <div className="flex flex-row gap-3 text-[#6f6b80] text-sm font-medium ">
                    <HiOutlineUserCircle className="" size={18} />
                    <p>425 Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Grid;
