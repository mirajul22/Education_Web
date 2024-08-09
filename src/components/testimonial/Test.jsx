import Swapper from "./Swapper";

const Test = () => {
  return (
    <>
      <section className="test">
        <div className="flex flex-row  justify-center gap-24">
          <Swapper />

          <div className="flex flex-col pt-[11rem] ">
            <div className="">
              <span className="text-base font-bold tracking-widest	text-[#535fdb]">
                TESTIMONIALS
              </span>
              <h1 className="text-[2.5rem] font-bold">Students Feedback</h1>
            </div>
            <div className="flex flex-col gap-8 pt-[1rem]">
              <p className="text-base font-medium text-[#6f6b80]">
                We are committed to continuous improvement and
                <br /> strive to provide a learning environment.
              </p>

              <h1 className="text-xl font-bold text-[#231f40]">
                People Love To Learn With Us
              </h1>
              <div className="flex flex-row items-center gap-14">
                <div>
                  <span className="text-3xl font-bold text-[#f86f03]">90%</span>
                  <p className="text-base font-medium text-[#6f6b80] mt-2">
                    Students Complete
                    <br />
                    Course Successfully
                  </p>
                </div>

                <div>
                  <span className="text-3xl font-bold text-[#f86f03]">
                    9/10
                  </span>
                  <p className=" mt-2 text-base font-medium text-[#6f6b80]">
                    Users reported better
                    <br />
                    learning outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Test;
