import { SlCalender } from "react-icons/sl";
import { PiChatCenteredText } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Detail1 = () => {
  return (
    <>
      <section className="mt-[8rem]">
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="h-[2488.66px] w-[780px] px-[15px]">
            <div className="h-[403.837px] w-[750px] max-w-full flex flex-col gap-8">
              <img
                src="/images/blogCard/course-1.webp"
                alt="1"
                className="rounded-md"
              />
              <div className="flex flex-row items-center gap-12">
                <div className="flex flex-row items-center gap-2">
                  <img
                    src="/images/blogCard/instructor-1.webp"
                    alt="2"
                    className="h-[30px] w-[30px] rounded-full"
                  />
                  <p className="text-base font-medium text-[#6f6b80]">
                    Janet Fleming
                  </p>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <SlCalender />
                  <p className="text-base font-medium text-[#6f6b80]">
                    09 Feb, 2023
                  </p>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <PiChatCenteredText />
                  <p className="text-base font-medium text-[#6f6b80]">
                    0 Comments
                  </p>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <PiEyeLight />
                  <p className="text-base font-medium text-[#6f6b80]">
                    Janet Fleming
                  </p>
                </div>
              </div>
              <h1 className="text-[#231f40] text-3xl font-bold">
                Social Media Marketing MASTERY( A-Z ) Journey
              </h1>
              <p className="text-base font-medium text-[#6f6b80]">
                Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
                consectetur elit. Vesti at bulum nec the odio aea the dumm
                ipsumm ipsum that dolocons rsus mal suada and fadolorit to the
                consectetur elit. All the Lorem Ipsum generators on the Internet
                tend to repeat that predefined chunks as necessary making this
                the first true dummy generator on the Internet.Grursus mal suada
                faci lisis Lorem ipsum dolarorit more ametion consectetur elit.
                Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons
                rsus mal suada and fadolorit to the consectetur elit. Grursus
                mal suada faci lisis Lorem ipsum dolarorit more ametion
                consectetur elit. Vesti at bulum nec at odio aea the dumm ipsumm
                ipsum that dolocons rsus mal suada and fadolorit to the
                consectetur elit. All the Lorem Ipsum generators on the Internet
                tend.
              </p>

              <div className="p-10  h-[148.4px] w-full bg-white shadow-lg border-t-2 border-t-[#525fe1] flex items-center justify-center rounded-md">
                <p className="text-xl font-medium text-[#525fe1] flex items-center justify-center">
                  “ Duis vel scelerisque augue, ut vehicula nisl. Curabitur et
                  mollis tortor, eget sollicitudin lectus. Praesent a ante ac
                  urna ultrices volutpat at sed ligula. Phasellus nibh dui,
                  pulvinar a nibh quis. ”
                </p>
              </div>

              <p className="text-base font-medium text-[#6f6b80]">
                Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
                consectetur elit. Vesti at bulum nec the odio aea the dumm
                ipsumm ipsum that dolocons rsus mal suada and fadolorit to the
                consectetur elit. All the Lorem Ipsum generators on the Internet
                tend to repeat that predefined chunks as necessary making this
                the first true dummy generator on the Internet.Grursus mal suada
                faci lisis Lorem ipsum dolarorit more ametion consectetur elit.
              </p>
              <h1 className="text-[#231f40] text-2xl font-bold">
                Learned From Doing One Of Those Social Media
              </h1>

              <div className="flex flex-col gap-4">
                <p className="flex flex-row items-center gap-4 text-base font-medium text-[#6f6b80]">
                  <IoCheckmarkDoneCircleSharp
                    size={20}
                    className="text-[#525fe1]"
                  />
                  Struggling to sell one multi-million dollar home currently on
                  the market
                </p>
                <p className="flex flex-row items-center gap-4 text-base font-medium text-[#6f6b80]">
                  <IoCheckmarkDoneCircleSharp
                    size={20}
                    className="text-[#525fe1]"
                  />
                  The point of using Lorem Ipsum is that it has a normal
                  distribution of letters.
                </p>
                <p className="flex flex-row items-center gap-4 text-base font-medium text-[#6f6b80]">
                  <IoCheckmarkDoneCircleSharp
                    size={20}
                    className="text-[#525fe1]"
                  />
                  Publishing packages and web page editors now use their default
                  model text.
                </p>
                <p className="flex flex-row items-center gap-4 text-base font-medium text-[#6f6b80]">
                  <IoCheckmarkDoneCircleSharp
                    size={20}
                    className="text-[#525fe1]"
                  />
                  Publishing packages and web page editors now use their default
                  model text.
                </p>
              </div>

              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-2">
                  <button className="px-4 py-2 bg-[#f5f5f5] rounded-sm hover:text-white hover:bg-[#525fe1]  duration-300">
                    Branding
                  </button>
                  <button className="px-4 py-2 bg-[#f5f5f5] rounded-sm hover:text-white hover:bg-[#525fe1]  duration-300">
                    Javascript
                  </button>
                  <button className="px-4 py-2 bg-[#f5f5f5] rounded-sm hover:text-white hover:bg-[#525fe1]  duration-300">
                    Science
                  </button>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <p className="text-base font-semibold text-[#231f40]">
                    Share:
                  </p>
                  <FaLinkedinIn
                    color=""
                    className="text-[#6f6b80] hover:text-[#525fe1]  duration-300"
                  />
                  <FaFacebookF
                    color=""
                    className="text-[#6f6b80] hover:text-[#525fe1]  duration-300"
                  />
                  <FaTwitter
                    color=""
                    className="text-[#6f6b80] hover:text-[#525fe1]  duration-300"
                  />
                  <FaPinterestP
                    color=""
                    className="text-[#6f6b80] hover:text-[#525fe1]  duration-300"
                  />
                </div>
              </div>
              <hr />
              <div className="flex flex-row items-center gap-10">
                <img
                  src="/images/blogCard/instructor-03.webp"
                  alt="3"
                  className=" h-[160px] w-[306px] max-w-full rounded-lg object-cover"
                />
                <div className="flex flex-col gap-4">
                  <h1 className="text-xl font-bold text-[#231f40]">
                    Janet Fleming
                  </h1>
                  <p className="text-base font-medium text-[#6f6b80]">
                    Janet Fleming is an instructor, blogger, and designer living
                    in a suburb of
                    <br /> Washington, DC. She has been assigned to aspen
                    ecosystems research and has been involved in several special
                    assignments.
                  </p>
                  <div className="flex flex-row items-center gap-4">
                    <FaLinkedinIn color="#525fe1" className="" />
                    <FaFacebookF color="#525fe1" className="" />
                    <FaTwitter color="#525fe1" className="" />
                    <FaPinterestP color="#525fe1" className="" />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center gap-6">
                <div className="brand h-[116px] w-[360px] p-[30px] flex flex-row items-center gap-4 bg-[#f5f5f5] rounded-md">
                  <MdKeyboardArrowLeft size={25} color="#231f40" />
                  <h1 className="text-lg font-bold text-[#231f40]">
                    Branding:How to brand
                    <br />
                    Yourself and Your Business
                  </h1>
                </div>
                <div className="brand h-[116px] w-[360px] p-[30px] flex flex-row-reverse items-center gap-4 bg-[#f5f5f5] rounded-md">
                  <MdKeyboardArrowRight size={25} color="#231f40" />
                  <h1 className="text-lg font-bold text-[#231f40] text-right">
                    The complete web Developer
                    <br />
                    Guideline 2023
                  </h1>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#231f40]">
                  Leave a Reply
                </h1>
                <p className="text-base font-medium text-[#6f6b80]">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <div className="">
                  <form className="flex flex-col gap-8">
                    <div className="flex flex-row items-center gap-7">
                      <input
                        type="text"
                        placeholder="Name*"
                        required
                        className="h-[60px] w-[360px] px-[30px] bg-[#f5f5f5] max-w-full rounded-md text-base  font-medium bg-[#f5f5f5] placeholder:text-[#6f6b80] outline-none focus:outline-[#525fe1] duration-300"
                      />
                      <input
                        type="text"
                        placeholder="Email*"
                        required
                        className="h-[60px] w-[360px] px-[30px] bg-[#f5f5f5] max-w-full rounded-md text-base  font-medium bg-[#f5f5f5] placeholder:text-[#6f6b80] outline-none focus:outline-[#525fe1] duration-300"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Website"
                      required
                      className="px-[30px] h-[60px] w-[750px] max-w-full rounded-md text-base  font-medium bg-[#f5f5f5] placeholder:text-[#6f6b80] outline-none focus:outline-[#525fe1] duration-300"
                    />
                    <textarea
                      type="text"
                      placeholder="Comment"
                      className="px-[30px] py-[17px] min-h-[180px] h-[180px] w-[750px] max-w-full rounded-md text-base  font-medium bg-[#f5f5f5] placeholder:text-[#6f6b80] outline-none focus:outline-[#525fe1] duration-300"
                    />
                    <div className="flex flex-row items-center gap-4">
                      <input
                        type="checkbox"
                        className="h-[20px] w-[20px] max-w-full"
                      />
                      <p className="text-base font-medium text-[#6f6b80]">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </p>
                    </div>
                  </form>
                  <div className="pt-[2rem]">
                    <button className=" font-bold bg-[#535fdb] text-[#f5eeee] px-[1.938rem] py-[0.906rem] text-lg rounded-md hover:bg-[#273849] duration-300">
                      Post A Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[2488.66px] w-[390px] px-[15px] flex flex-col gap-8">
            <h1 className="text-2xl font-bold text-[#231f40]">Search Here</h1>
            <div className="flex flex-row items-center justify-between h-[60px] w-[360px] px-[30px] bg-[#f5f5f5] max-w-full rounded-md text-base  font-medium bg-[#f5f5f5] placeholder:text-[#6f6b80] outline-none focus:outline-[#525fe1] duration-300">
              <input
                type="text"
                placeholder="Search"
                className="h-[60px] w-[380px] bg-[#f5f5f5] outline-none"
              />
              <IoSearchOutline color="#525fe1" size={30} />
            </div>
            <h1 className="text-2xl font-bold text-[#231f40]">Categories</h1>

            <div className="font-medium flex flex-col gap-4">
              <div className="flex flex-row items-center justify-between text-base">
                <p className="text-[#6f6b80]">Branding</p>
                <p className="text-[#6f6b80]">(5)</p>
              </div>
              <hr />
              <div className="flex flex-row items-center justify-between text-base">
                <p className="text-[#6f6b80]">Digital Marketing</p>
                <p className="text-[#6f6b80]">(5)</p>
              </div>
              <hr />
              <div className="flex flex-row items-center justify-between text-base">
                <p className="text-[#6f6b80]">JavaScript</p>
                <p className="text-[#6f6b80]">(3)</p>
              </div>
              <hr />
              <div className="flex flex-row items-center justify-between text-base">
                <p className="text-[#6f6b80]">Science</p>
                <p className="text-[#6f6b80]">(6)</p>
              </div>
              <hr />
              <div className="flex flex-row items-center justify-between text-base">
                <p className="text-[#6f6b80]">Social Media</p>
                <p className="text-[#6f6b80]">(5)</p>
              </div>
              <hr />
              <div className="flex flex-row items-center justify-between text-base">
                <p className="text-[#6f6b80]">Uncategorized</p>
                <p className="text-[#6f6b80]">(1)</p>
              </div>
              <hr />
              <div className="flex flex-row items-center justify-between text-base">
                <p className="text-[#6f6b80]">Web Development</p>
                <p className="text-[#6f6b80]">(7)</p>
              </div>
              <hr />
            </div>
            <h1 className="text-2xl font-bold text-[#231f40]">Latest Post</h1>
            <div className="flex flex-col gap-6">
              <div className="flex flex-row items-center gap-6">
                <img
                  src="/images/BlogDetail/course-06.webp"
                  alt="1"
                  className="h-[100px] w-[100px] max-w-[100px] min-w-[100px] object-cover rounded-md"
                />
                <div className="flex flex-col">
                  <p className="text-[#6f6b80]">17 Feb, 2023</p>
                  <h1 className="mt-1 text-lg text-[#231f40] font-bold hover:text-[#522fe1]">
                    The Complete Web
                    <br /> Developer Guideline 2023
                  </h1>
                </div>
              </div>
              <hr />

              <div className="flex flex-row items-center gap-6">
                <img
                  src="/images/BlogDetail/course-26.webp"
                  alt="1"
                  className="h-[100px] w-[100px] max-w-[100px] min-w-[100px] object-cover rounded-md"
                />
                <div className="flex flex-col">
                  <p className="text-[#6f6b80]">17 Feb, 2023</p>
                  <h1 className="mt-1 text-lg text-[#231f40] font-bold hover:text-[#522fe1]">
                    The Complete Web
                    <br /> Developer Guideline 2023
                  </h1>
                </div>
              </div>
              <hr />

              <div className="flex flex-row items-center gap-6">
                <img
                  src="/images/BlogDetail/course-35-.webp"
                  alt="1"
                  className="h-[100px] w-[100px] max-w-[100px] min-w-[100px] object-cover rounded-md"
                />
                <div className="flex flex-col">
                  <p className="text-[#6f6b80]">17 Feb, 2023</p>
                  <h1 className="mt-1 text-lg text-[#231f40] font-bold hover:text-[#522fe1]">
                    The Complete Web
                    <br /> Developer Guideline 2023
                  </h1>
                </div>
              </div>
              <hr />
            </div>

            <div>
              <img src="/images/BlogDetail/sidebar-banner.png" alt="10" />
            </div>

            <h1 className="text-2xl font-bold text-[#231f40]">Popular Tags</h1>

            <div className="flex flex-col  gap-4">
              <div className="flex flex-row items-center gap-3">
                <button className="finalbtn bg-[#f5f5f5] px-4 py-2 text-[#231f40] text-base font-medium">
                  Art
                </button>
                <button className="finalbtn bg-[#f5f5f5] px-4 py-2 text-[#231f40] text-base font-medium">
                  Consulting
                </button>
                <button className="finalbtn bg-[#f5f5f5] px-4 py-2 text-[#231f40] text-base font-medium">
                  Course
                </button>
                <button className="finalbtn bg-[#f5f5f5] px-4 py-2 text-[#231f40] text-base font-medium">
                  Design
                </button>
              </div>

              <div className="flex flex-row items-center gap-3">
                <button className="finalbtn bg-[#f5f5f5] px-4 py-2 text-[#231f40] text-base font-medium">
                  Development
                </button>
                <button className="finalbtn bg-[#f5f5f5] px-4 py-2 text-[#231f40] text-base font-medium">
                  Education
                </button>
                <button className="finalbtn bg-[#f5f5f5] px-4 py-2 text-[#231f40] text-base font-medium">
                  Finance
                </button>
              </div>

              <div className="flex flex-row items-center gap-3">
                <button className="finalbtn bg-[#f5f5f5] px-4 py-2 text-[#231f40] text-base font-medium">
                  Learning
                </button>
                <button className="finalbtn bg-[#f5f5f5] px-4 py-2 text-[#231f40] text-base font-medium">
                  Online Courses
                </button>
                <button className="finalbtn bg-[#f5f5f5] px-4 py-2 text-[#231f40] text-base font-medium">
                  Ui Design
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail1;
