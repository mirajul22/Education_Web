import { FaHeart } from "react-icons/fa6";
import { PiNotebookThin } from "react-icons/pi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { CiClock2 } from "react-icons/ci";
import { TiArrowRight } from "react-icons/ti";

const Popular = () => {
  return (
    <>
      <section className="popular">
        <div className="pt-[18rem]">
          <div className="text-center">
            <span className="text-base font-bold tracking-widest	text-[#535fdb]">
              POPULAR COURSES
            </span>
            <h1 className="text-[2.5rem] font-bold">Our Popular Courses</h1>
          </div>

          <div className="flex flex-row justify-center gap-8">
            <div className="pt-[2rem]">
              <div className=" h-[33.75rem] w-[23.125rem]  bg-white rounded-md">
                <div className="relative h-[16.853rem] w-[23.125rem] rounded-md overflow-hidden">
                  <img
                    src="/images/popular/course-27.webp "
                    alt="1"
                    className="h-full w-full  rounded-t-md object-cover object-center  transform hover:scale-150 duration-300 "
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
                        16 Lessons
                      </p>
                      <PiNotebookThin className="mt-1" />
                    </div>

                    <div className="flex flex-row-reverse gap-3">
                      <p className="text-[#6f6b80] text-sm font-medium">
                        15 week
                      </p>
                      <CiClock2 className="mt-1" />
                    </div>
                  </div>

                  <div className="font-bold text-xl">
                    <h1>The Complete HTML & CSS</h1>
                    <h1>Bootcamp 2024 Edition</h1>
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
                    <h1 className="text-xl font-bold text-[#535fdb]">$45.00</h1>
                    <div className="flex flex-row gap-3 text-[#6f6b80] text-sm font-medium ">
                      <HiOutlineUserCircle className="" size={18} />
                      <p>228 Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-[2rem]">
              <div className=" h-[33.75rem] w-[23.125rem]  bg-white rounded-md">
                <div className=" relative h-[16.853rem] w-[23.125rem] rounded-md">
                  <img
                    src="/images/popular/course-32.webp"
                    alt="1"
                    className="max-w-full rounded-t-md relative"
                  />
                  <div className="flex flex-row justify-between px-4 translate-y-[-15.938rem]">
                    <span className="bg-white py-1 px-4 text-sm font-medium text-[#535fdb] rounded-sm mt-1">
                      Expert
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
                        18 Lessons
                      </p>
                      <PiNotebookThin className="mt-1" />
                    </div>

                    <div className="flex flex-row-reverse gap-3">
                      <p className="text-[#6f6b80] text-sm font-medium">
                        17 week
                      </p>
                      <CiClock2 className="mt-1" />
                    </div>
                  </div>

                  <div className="font-bold text-xl">
                    <h1>Grow Personal Financial Security</h1>
                    <h1>Thinking & Principles</h1>
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
                      &nbsp; &nbsp; (1 Reviews)
                    </p>
                  </div>

                  <hr />

                  <div className="flex flex-row justify-between mt-2">
                    <h1 className="text-xl font-bold text-[#535fdb] flex gap-2">
                      $49.00
                      <span className="text-base font-medium text-[#6f6b80] line-through	">
                        $59.00
                      </span>
                    </h1>
                    <div className="flex flex-row gap-3 text-[#6f6b80] text-sm font-medium ">
                      <HiOutlineUserCircle className="" size={18} />
                      <p>189 Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-[2rem]">
              <div className=" h-[33.75rem] w-[23.125rem]  bg-white rounded-md">
                <div className=" relative h-[16.853rem] w-[23.125rem] rounded-md">
                  <img
                    src="/images/popular/course-38.webp"
                    alt="1"
                    className="max-w-full rounded-t-md relative"
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
                        15 Lessons
                      </p>
                      <PiNotebookThin className="mt-1" />
                    </div>

                    <div className="flex flex-row-reverse gap-3">
                      <p className="text-[#6f6b80] text-sm font-medium">
                        20 hour
                      </p>
                      <CiClock2 className="mt-1" />
                    </div>
                  </div>

                  <div className="font-bold text-xl">
                    <h1>The Complete Guide to Build</h1>
                    <h1>RESTful API Application</h1>
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
                      &nbsp; &nbsp; (3 Reviews)
                    </p>
                  </div>

                  <hr />

                  <div className="flex flex-row justify-between mt-2">
                    <h1 className="text-xl font-bold text-[#535fdb]">Free</h1>
                    <div className="flex flex-row gap-3 text-[#6f6b80] text-sm font-medium ">
                      <HiOutlineUserCircle className="" size={18} />
                      <p>442 Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center gap-8">
            <div className="pt-[2rem]">
              <div className=" h-[33.75rem] w-[23.125rem]  bg-white rounded-md">
                <div className=" relative h-[16.853rem] w-[23.125rem] rounded-md">
                  <img
                    src="/images/popular/course-30.webp"
                    alt="1"
                    className="max-w-full rounded-t-md relative"
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
                      <PiNotebookThin className="mt-1" />
                    </div>

                    <div className="flex flex-row-reverse gap-3">
                      <p className="text-[#6f6b80] text-sm font-medium">
                        25 hour
                      </p>
                      <CiClock2 className="mt-1" />
                    </div>
                  </div>

                  <div className="font-bold text-xl">
                    <h1>Competitive Strategy Law for</h1>
                    <h1>Management Consultants</h1>
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
                      &nbsp; &nbsp; (1 Reviews)
                    </p>
                  </div>

                  <hr />

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
              <div className=" h-[33.75rem] w-[23.125rem]  bg-white rounded-md">
                <div className=" relative h-[16.853rem] w-[23.125rem] rounded-md">
                  <img
                    src="/images/popular/course-39.webp"
                    alt="1"
                    className="max-w-full rounded-t-md relative"
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

                  <div className="font-bold text-xl">
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
              <div className=" h-[33.75rem] w-[23.125rem]  bg-white rounded-md">
                <div className=" relative h-[16.853rem] w-[23.125rem] rounded-md">
                  <img
                    src="/images/popular/course-33.webp"
                    alt="1"
                    className="max-w-full rounded-t-md relative"
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

                  <div className="font-bold text-xl">
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
        </div>
        <div className="pt-[3rem] ">
          <button className="flex flex-row gap-2 bg-[#535fdb] text-[#f5eeee] px-[1.938rem] py-[0.906rem] text-lg font-bold rounded-md hover:bg-[#273849] duration-300 mx-auto">
            View All Courses <TiArrowRight className="mt-[2px]" size={25} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Popular;
