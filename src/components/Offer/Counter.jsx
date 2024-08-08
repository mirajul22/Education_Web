import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [count, setCount] = useState(false);
  return (
    <>
      <section className="flex justify-center translate-y-40">
        <div className="bg-[#525fe1] h-[290.75px] w-[1200px] py-[65px] rounded-lg">
          <ScrollTrigger
            onEnter={() => setCount(true)}
            onExit={() => setCount(false)}>
            <div className="flex flex-row  justify-evenly">
              <div className="flex flex-col gap-1">
                <div className="w-[32px]">
                  <img
                    src="/images/counter/backpack.png"
                    alt="1"
                    className="w-full ml-16"
                  />
                </div>
                <div className="mt-3">
                  <h1 className="text-[40px] font-extrabold text-white text-center">
                    {count && (
                      <CountUp start={0} end={449} duration={2} delay={0} />
                    )}
                    +
                  </h1>
                  <h1 className="text-base font-extrabold text-white">
                    STUDENTS ENROLLED
                  </h1>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="w-[32px]">
                  <img
                    src="/images/counter/trophy.png"
                    alt="1"
                    className="w-full ml-16"
                  />
                </div>
                <div className="mt-3">
                  <h1 className="text-[40px] font-extrabold text-white text-center">
                    {count && (
                      <CountUp start={0} end={378} duration={2} delay={0} />
                    )}
                    +
                  </h1>
                  <h1 className="text-base font-extrabold text-white">
                    STUDENTS ENROLLED
                  </h1>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="w-[32px]">
                  <img
                    src="/images/counter/book.png"
                    alt="1"
                    className="w-full ml-16"
                  />
                </div>
                <div className="mt-3">
                  <h1 className="text-[40px] font-extrabold text-white text-center">
                    {count && (
                      <CountUp start={0} end={289} duration={2} delay={0} />
                    )}
                    +
                  </h1>
                  <h1 className="text-base font-extrabold text-white">
                    STUDENTS ENROLLED
                  </h1>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="w-[32px]">
                  <img
                    src="/images/counter/lesson.png"
                    alt="1"
                    className="w-full ml-16"
                  />
                </div>
                <div className="mt-3">
                  <h1 className="text-[40px] font-extrabold text-white text-center">
                    {count && (
                      <CountUp start={0} end={235} duration={2} delay={0} />
                    )}
                    +
                  </h1>
                  <h1 className="text-base font-extrabold text-white">
                    STUDENTS ENROLLED
                  </h1>
                </div>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </>
  );
};

export default Counter;
