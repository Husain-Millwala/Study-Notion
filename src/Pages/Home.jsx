import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import HighlightedText from "../Components/COre/Home/HighlightedText";
import CtaButton from "../Components/COre/Home/CtaButton";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../Components/COre/Home/CodeBlocks";
import TimeLineLocation from "../Components/COre/Home/TimeLineLocation";
import LearningLanguageSection from "../Components/COre/Home/LearningLanguageSection";
import InstructorSection from "../Components/COre/Home/InstructorSection";
import Footer from "../Components/Common/Footer";
import ExploreMore from "../Components/COre/Home/ExploreMore";
import ContactFormSection from "../Components/COre/About/ContactFormSection";

function Home() {
  return (
    <>
      {/* Section1 */}
      <section className="relatie flex flex-col text-white mx-auto items-center justify-between w-11/12 max-w-maxContent">
        <Link to={"/signUp"}>
          <button className=" group mx-auto rounded-full font-bold text-richblack-200 bg-richblack-800 transition-all duration-200 hover:scale-95 items-start mt-16 p-1 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] hover:drop-shadow-none">
            <div className="transition-all duration-200 group-hover:bg-richblack-900 flex flex-row items-center rounded-full px-4 py-[4px] gap-5">
              <p className=" font-inter">Become An Instructor</p>
              <FiArrowRight />
            </div>
          </button>
        </Link>

        <h1 className=" items-center font-semibold text-[48px] mt-8">
          Empower Your Future with
          <HighlightedText text={"Coding Skills"} />
        </h1>

        <p className=" font-bold text-richblack-300 text-center text-xl mt-4 w-[80%]">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </p>

        <div className=" flex flex-row mt-8 gap-8 ">
          <CtaButton active={true} linkto={"/signUp"}>
            Learn More
          </CtaButton>
          <CtaButton active={false} linkto={"/login"}>
            Book a Demo
          </CtaButton>
        </div>

        <div className="mx-8 my-16 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            autoPlay
            loop
            muted
            className="shadow-[20px_20px_rgba(255,255,255)]"
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <h2 className=" text-[32px] font-semibold">
                Unlock your <HighlightedText text={"coding potential"} /> with
                our online courses.
              </h2>
            }
            subheading={
              <p className=" text-base text-richblack-300 font-bold w-[90%] mt-3 ">
                Our courses are designed and taught by industry experts who have
                years of experience in coding and are passionate about sharing
                their knowledge with you.
              </p>
            }
            ctaBtn1={{
              text: `Try it Yourself`,
              linkto: "/signUp",
              active: true,
            }}
            ctaBtn2={{
              text: `Learn More`,
              linkto: "/about",
              active: false,
            }}
            // section2

            codeBlock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
            codeColor={"text-yellow-25"}
          />
        </div>

        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <h2 className=" text-[32px] font-semibold">
                Unlock your <HighlightedText text={"coding potential"} /> with
                our online courses.
              </h2>
            }
            subheading={
              <p className=" text-base text-richblack-300 font-bold w-[90%] mt-3 ">
                Our courses are designed and taught by industry experts who have
                years of experience in coding and are passionate about sharing
                their knowledge with you.
              </p>
            }
            ctaBtn1={{
              text: `Try it Yourself`,
              linkto: "/signUp",
              active: true,
            }}
            ctaBtn2={{
              text: `Learn More`,
              linkto: "/about",
              active: false,
            }}
            // section2

            codeBlock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
            codeColor={"text-yellow-25"}
          />
        </div>

        <ExploreMore />
      </section>
      {/* Section2 */}

      <div className=" bg-pure-greys-5 text-richblack-700 mt-8">
        <div className="homepage-bg h-[320px]">
          <div className="w-11/12 max-w-maxContent flex items-center flex-col justify-between gap-8 mx-auto">
            <di className="lg:h-[150px]"></di>
            <div className="flex flex-row gap-8 text-white">
              <CtaButton active={true} linkto={"/signUp"}>
                <p className=" flex item-center gap-3 text-center text-xl justify-center">
                  Explore Catalog
                  <FiArrowRight />
                </p>
              </CtaButton>

              <CtaButton active={false} linkto={"/signUp"}>
                <p className=" text-xl">Learn More</p>
              </CtaButton>
            </div>
          </div>
        </div>

        <div className="w-11/12 max-w-maxContent flex items-center flex-col justify-between gap-8 mx-auto">
          <div className="flex flex-row gap-32 mb-10 mt-[100px]">
            <h2 className=" text-[32px] font-semibold w-[40%] ml-16">
              Get the skills you need for a
              <HighlightedText text={"job that is in demand."} />
            </h2>
            <div className="flec flex-col gap-8 w-[40%] items-start ">
              <p className=" text-[16px] font-medium mb-8">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </p>
              <CtaButton active={true} linkto={"/signUp"}>
                <p>Learn More</p>
              </CtaButton>
            </div>
          </div>

          <TimeLineLocation />

          <LearningLanguageSection />
        </div>
      </div>

      {/* Section3 */}

      <section className="w-11/12 max-w-maxContent flex items-center flex-col justify-between gap-8 mx-aut bg-richblack-900 text-white ">
        <InstructorSection />
      </section>

      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <ContactFormSection />
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <h2 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h2>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
