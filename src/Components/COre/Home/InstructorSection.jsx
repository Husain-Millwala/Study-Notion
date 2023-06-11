import React from "react";

import Instructor from "../../../assets/Images/Instructor.png";
import CtaButton from "./CtaButton";
import HighlightedText from "./HighlightedText";
import { FiArrowRight } from "react-icons/fi";

function InstructorSection() {
  return (
    <>
      <div className=" mt-20">
        <div className=" flex flex-row items-center gap-20">
          <div className="w-[4%]"></div>
          <div className="w-[100%]">
            <img
              src={Instructor}
              alt="Instructor"
              className="shadow-white shadow-[-20px_-20px_0_0]"
            />
          </div>
          <div className="w-[100%] flex flex-col gap-8">
            <h2 className=" text-4xl font-semibold w-[50%]">
              Become an
              <HighlightedText text={"instructor"} />
            </h2>
            <p className=" font-medium text-richblack-300 w-[80%] text-base">
              Instructors from around the world teach millions of students on
              StudyNotion. We provide the tools and skills to teach what you
              love.
            </p>
            <CtaButton active={true} linkto={"/signUp"}>
              <div className="flex flex-row gap-2 items-center">
                Start Teaching Today
                <FiArrowRight />
              </div>
            </CtaButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default InstructorSection;
