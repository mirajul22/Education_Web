// import { Accordion } from "rsuite";

const Work = () => {
  return (
    <>
      <section>
        <div className="flex flex-row justify-center gap-20 py-[8rem]">
          <div className="flex flex-row gap-5">
            <div className="h-[530px] w-[250px]">
              <img
                src="/images/work/accordion-1.jpg"
                alt="2"
                className="h-full w-full rounded-md"
              />
            </div>
            <div className="h-[269.237px] w-[264.125px] flex flex-col gap-4 mt-10">
              <img
                src="/images/work/accordion-2.jpg"
                alt="3"
                className="h-full w-full rounded-md"
              />
              <img
                src="/images/work/accordion-3.jpg"
                alt="4"
                className="h-full w-full rounded-md"
              />
            </div>
          </div>

          <div className="mt-2">
            <div className="py-[2rem]">
              <span className="text-base font-bold tracking-widest	text-[#535fdb]">
                ABOUT US
              </span>
              <h1 className="text-[2.5rem] font-bold">
                Get Every General Answers
                <br /> From Here
              </h1>
            </div>
            <div className="container mx-auto">
              {/* <!-- notice here, the key rule is `[&_svg]:open:-rotate-180` --> */}
              <hr className="w-[578.2px]" />
              <details className="border-stone-500 p-4 [&_svg]:open:-rotate-180">
                {/* <!-- notice here, we have disabled the summary's default triangle/arrow --> */}
                <summary className="flex relative cursor-pointer list-none items-center gap-4">
                  <div>
                    {/* <!-- notice here, we added our own triangle/arrow svg --> */}
                    <svg
                      className="rotate-0 transform text-blue-700 transition-all"
                      fill="none"
                      height="20"
                      width="20"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                  <h1 className="text-xl font-bold">
                    What does it take become an author?
                  </h1>
                </summary>

                <p className="pt-5 text-base text-[#6f6b80] font-medium ">
                  Becoming an author takes passion, dedication, and hard work.
                  It requires a deep
                  <br /> love for writing and storytelling, as well as a
                  willingness to continually learn and it
                  <br /> also takes courage to share your writing with others
                  and receive feedback.
                </p>
              </details>
            </div>

            <div className="container mx-auto">
              {/* <!-- notice here, the key rule is `[&_svg]:open:-rotate-180` --> */}
              <hr className="w-[578.2px]" />
              <details className="border-stone-500 p-4 [&_svg]:open:-rotate-180">
                {/* <!-- notice here, we have disabled the summary's default triangle/arrow --> */}
                <summary className="flex relative cursor-pointer list-none items-center gap-4">
                  <div>
                    {/* <!-- notice here, we added our own triangle/arrow svg --> */}
                    <svg
                      className="rotate-0 transform text-blue-700 transition-all"
                      fill="none"
                      height="20"
                      width="20"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                  <h1 className="text-xl font-bold">
                    How to change my password easily?
                  </h1>
                </summary>

                <p className="pt-5 text-base text-[#6f6b80] font-medium ">
                  Learning management system, combines a wide range of features
                  to present a<br /> class setting without having the students
                  come into a physical classroom. It all
                  <br /> depends on the WordPress LMS plugin you go with, but in
                  general.
                </p>
              </details>
            </div>

            <div className="container mx-auto">
              {/* <!-- notice here, the key rule is `[&_svg]:open:-rotate-180` --> */}
              <hr className="w-[578.2px]" />
              <details className="border-stone-500 p-4 [&_svg]:open:-rotate-180">
                {/* <!-- notice here, we have disabled the summary's default triangle/arrow --> */}
                <summary className="flex relative cursor-pointer list-none items-center gap-4">
                  <div>
                    {/* <!-- notice here, we added our own triangle/arrow svg --> */}
                    <svg
                      className="rotate-0 transform text-blue-700 transition-all"
                      fill="none"
                      height="20"
                      width="20"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                  <h1 className="text-xl font-bold">
                    How to change my plan using PayPal?
                  </h1>
                </summary>

                <p className="pt-5 text-base text-[#6f6b80] font-medium ">
                  Changing your plan using PayPal is a straightforward process.
                  First, log in to your
                  <br /> PayPal account and navigate to the subscription
                  section. Locate the subscription
                  <br /> you wish to modify and click on the{" "}
                  {"Manage Subscription"} button.
                </p>
              </details>
            </div>

            <div className="container mx-auto">
              {/* <!-- notice here, the key rule is `[&_svg]:open:-rotate-180` --> */}
              <hr className="w-[578.2px]" />
              <details className="border-stone-500 p-4 [&_svg]:open:-rotate-180">
                {/* <!-- notice here, we have disabled the summary's default triangle/arrow --> */}
                <summary className="flex relative cursor-pointer list-none items-center gap-4">
                  <div>
                    {/* <!-- notice here, we added our own triangle/arrow svg --> */}
                    <svg
                      className="rotate-0 transform text-blue-700 transition-all"
                      fill="none"
                      height="20"
                      width="20"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                  <h1 className="text-xl font-bold">
                    How long it take to create a video course?
                  </h1>
                </summary>

                <p className="pt-5 text-base text-[#6f6b80] font-medium ">
                  Creating a video course can take anywhere from a few weeks to
                  several months,
                  <br /> depending on various factors such as the length of the
                  course, the complexity of
                  <br /> the content, and the production quality.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
