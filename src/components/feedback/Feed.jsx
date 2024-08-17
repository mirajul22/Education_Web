// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style1.css";

// import required modules
import { Pagination } from "swiper/modules";

const Feed = () => {
  return (
    <>
      <section className="swipbg">
        <div className="py-[8rem]">
          <div className="text-center">
            <span className="text-base font-bold tracking-widest	text-[#535fdb]">
              TESTIMONIALS
            </span>
            <h1 className="text-[2.5rem] font-bold">
              Our Lovely Students Feedback
            </h1>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper pt-[4rem]">
            <SwiperSlide className="flex flex-col p-[2rem] rounded-lg">
              <div className=" flex flex-row gap-4">
                <div className="w-[60px] h-[60px]">
                  <img
                    src="/images/test/client-03.png"
                    alt="1"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h1 className="text-xl font-bold text-[#231f40]">
                    Lorrain D. Raines
                  </h1>
                  <p className="text-base font-medium text-[#525fe1]">
                    WordPress Expert
                  </p>
                </div>
              </div>

              <div className="py-[2rem]">
                <p className="text-base text-[#6f6b80] font-medium">
                  I had an amazing experience at EduVibe.
                  <br /> The instructors were knowledgeable and
                  <br /> passionate, and the coursework was
                  <br /> challenging and relevant to my future
                  <br />
                </p>
              </div>

              <div className="text-base flex flex-row gap-1 w-[24px]">
                <img
                  src="/images/popular/favorite.png"
                  alt="1"
                  className="w-full"
                />
                <img
                  src="/images/popular/favorite.png"
                  alt="2"
                  className="w-full"
                />
                <img
                  src="/images/popular/favorite.png"
                  alt="3"
                  className="w-full"
                />
                <img
                  src="/images/popular/favorite.png"
                  alt="4"
                  className="w-full"
                />
                <img
                  src="/images/popular/favorite.png"
                  alt="5"
                  className="w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col p-[2rem] rounded-lg">
              <div className=" flex flex-row gap-4">
                <div className="w-[60px] h-[60px]">
                  <img
                    src="/images/test/client-03.png"
                    alt="1"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h1 className="text-xl font-bold text-[#231f40]">
                    Lorrain D. Raines
                  </h1>
                  <p className="text-base font-medium text-[#525fe1]">
                    WordPress Expert
                  </p>
                </div>
              </div>

              <div className="py-[2rem]">
                <p className="text-base text-[#6f6b80] font-medium">
                  I had an amazing experience at EduVibe.
                  <br /> The instructors were knowledgeable and
                  <br /> passionate, and the coursework was
                  <br /> challenging and relevant to my future
                  <br />
                </p>
              </div>

              <div className="text-base flex flex-row gap-1 w-[24px]">
                <img
                  src="/images/popular/favorite.png"
                  alt="1"
                  className="w-full"
                />
                <img
                  src="/images/popular/favorite.png"
                  alt="2"
                  className="w-full"
                />
                <img
                  src="/images/popular/favorite.png"
                  alt="3"
                  className="w-full"
                />
                <img
                  src="/images/popular/favorite.png"
                  alt="4"
                  className="w-full"
                />
                <img
                  src="/images/popular/favorite.png"
                  alt="5"
                  className="w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col p-[2rem] rounded-lg">
              <div className=" flex flex-row gap-4">
                <div className="w-[60px] h-[60px]">
                  <img
                    src="/images/test/client-03.png"
                    alt="1"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h1 className="text-xl font-bold text-[#231f40]">
                    Lorrain D. Raines
                  </h1>
                  <p className="text-base font-medium text-[#525fe1]">
                    WordPress Expert
                  </p>
                </div>
              </div>

              <div className="py-[2rem]">
                <p className="text-base text-[#6f6b80] font-medium">
                  I had an amazing experience at EduVibe.
                  <br /> The instructors were knowledgeable and
                  <br /> passionate, and the coursework was
                  <br /> challenging and relevant to my future
                  <br />
                </p>
              </div>

              <div className="text-base flex flex-row gap-1 w-[24px]">
                <img
                  src="/images/popular/favorite.png"
                  alt="1"
                  className="w-full"
                />
                <img
                  src="/images/popular/favorite.png"
                  alt="2"
                  className="w-full"
                />
                <img
                  src="/images/popular/favorite.png"
                  alt="3"
                  className="w-full"
                />
                <img
                  src="/images/popular/favorite.png"
                  alt="4"
                  className="w-full"
                />
                <img
                  src="/images/popular/favorite.png"
                  alt="5"
                  className="w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col p-[2rem] rounded-lg">
              <div className=" flex flex-row gap-4">
                <div className="w-[60px] h-[60px]">
                  <img
                    src="/images/test/client-03.png"
                    alt="1"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h1 className="text-xl font-bold text-[#231f40]">
                    Lorrain D. Raines
                  </h1>
                  <p className="text-base font-medium text-[#525fe1]">
                    WordPress Expert
                  </p>
                </div>
              </div>

              <div className="py-[2rem]">
                <p className="text-base text-[#6f6b80] font-medium">
                  I had an amazing experience at EduVibe.
                  <br /> The instructors were knowledgeable and
                  <br /> passionate, and the coursework was
                  <br /> challenging and relevant to my future
                  <br />
                </p>
              </div>

              <div className="text-base flex flex-row gap-1 w-[24px]">
                <img
                  src="/images/popular/favorite.png"
                  alt="1"
                  className="w-full"
                />
                <img
                  src="/images/popular/favorite.png"
                  alt="2"
                  className="w-full"
                />
                <img
                  src="/images/popular/favorite.png"
                  alt="3"
                  className="w-full"
                />
                <img
                  src="/images/popular/favorite.png"
                  alt="4"
                  className="w-full"
                />
                <img
                  src="/images/popular/favorite.png"
                  alt="5"
                  className="w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col p-[2rem] rounded-lg">
              <div className=" flex flex-row gap-4">
                <div className="w-[60px] h-[60px]">
                  <img
                    src="/images/test/client-03.png"
                    alt="1"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h1 className="text-xl font-bold text-[#231f40]">
                    Lorrain D. Raines
                  </h1>
                  <p className="text-base font-medium text-[#525fe1]">
                    WordPress Expert
                  </p>
                </div>
              </div>

              <div className="py-[2rem]">
                <p className="text-base text-[#6f6b80] font-medium">
                  I had an amazing experience at EduVibe.
                  <br /> The instructors were knowledgeable and
                  <br /> passionate, and the coursework was
                  <br /> challenging and relevant to my future
                  <br />
                </p>
              </div>

              <div className="text-base flex flex-row gap-1 w-[24px]">
                <img
                  src="/images/popular/favorite.png"
                  alt="1"
                  className="w-full"
                />
                <img
                  src="/images/popular/favorite.png"
                  alt="2"
                  className="w-full"
                />
                <img
                  src="/images/popular/favorite.png"
                  alt="3"
                  className="w-full"
                />
                <img
                  src="/images/popular/favorite.png"
                  alt="4"
                  className="w-full"
                />
                <img
                  src="/images/popular/favorite.png"
                  alt="5"
                  className="w-full"
                />
              </div>
            </SwiperSlide>

            {/* <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
          </Swiper>
        </div>
      </section>
    </>
  );
};
export default Feed;
