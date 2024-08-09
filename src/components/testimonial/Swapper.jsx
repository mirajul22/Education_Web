// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Swapper = () => {
  return (
    <>
      <div className="h-[401.75px] w-[685.8px]">
        <Swiper
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper mt-[10rem] h-full w-full">
          <SwiperSlide className="flex flex-col gap-4 py-[3rem] px-[5rem] rounded-md">
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

            <div className="py-[2rem]">
              <p className="text-lg text-[#6f6b80] font-medium">
                I had an amazing experience at EduVibe. The instructors were
                <br />
                knowledgeable and passionate, and the coursework was
                <br /> challenging and relevant to my future career. I feel
                confident that
                <br /> the education I received will prepare me for success.
              </p>
            </div>

            <div className=" flex flex-row gap-4">
              <div className="w-[60px] h-[60px]">
                <img
                  src="/images/test/client-03.png"
                  alt="1"
                  className="w-full rounded-full"
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
          </SwiperSlide>

          <SwiperSlide className="flex flex-col gap-4 py-[3rem] px-[5rem] rounded-md">
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

            <div className="py-[2rem]">
              <p className="text-lg text-[#6f6b80] font-medium">
                The online courses at EduVibe were the perfect fit for my busy
                <br />
                schedule. I was able to work full-time while pursuing my degree,
                <br />
                thanks to the flexibility and convenience of online learning.
                The
                <br /> instructors were supportive and engaging.
              </p>
            </div>

            <div className=" flex flex-row gap-4">
              <div className="w-[60px] h-[60px]">
                <img
                  src="/images/test/client-04.png"
                  alt="1"
                  className="w-full rounded-full"
                />
              </div>
              <div className="flex flex-col items-center gap-1">
                <h1 className="text-xl font-bold text-[#231f40]">
                  Michle A.Smith
                </h1>
                <p className="text-base font-medium text-[#525fe1]">
                  Web Developer
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex flex-col gap-4 py-[3rem] px-[5rem] rounded-md">
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

            <div className="py-[2rem]">
              <p className="text-lg text-[#6f6b80] font-medium">
                I had an amazing experience at EduVibe. The instructors were
                <br />
                knowledgeable and passionate, and the coursework was
                <br /> challenging and relevant to my future career. I feel
                confident that
                <br /> the education I received will prepare me for success.
              </p>
            </div>

            <div className=" flex flex-row gap-4">
              <div className="w-[60px] h-[60px]">
                <img
                  src="/images/test/client-01.png"
                  alt="1"
                  className="w-full rounded-full"
                />
              </div>
              <div className="flex flex-col items-center gap-1">
                <h1 className="text-xl font-bold text-[#231f40]">
                  Devid M.Bard
                </h1>
                <p className="text-base font-medium text-[#525fe1]">
                  Laravel Developer
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Swapper;
