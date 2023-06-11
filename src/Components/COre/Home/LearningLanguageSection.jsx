import React from "react";
import HighlightedText from "./HighlightedText";
import KnowYourProgress from "../../../assets/Images/Know_your_progress.svg";
import PlanYourLesson from "../../../assets/Images/Plan_your_lessons.svg";
import CompareWithOther from "../../../assets/Images//Compare_with_others.svg";
import CtaButton from "./CtaButton";

function LearningLanguageSection() {
  return (
    <>
      <div className=" mt-[120px]">
        <div className=" flex flex-col gap- items-center">
          <h2 className=" text-4xl font-semibold text-center">
            Your swiss knife for
            <HighlightedText text={"learning any language"} />
          </h2>
          <p className="text-center w-[80%] font-semibold text-base mx-auto text-richblack-600 mt-8">
            Using spin making learning multiple languages easy. with 20+
            languages realistic voice-over, progress tracking, custom schedule
            and more.
          </p>

          <div className="flex flex-row items-center justify-center mt-5">
            <img
              src={KnowYourProgress}
              alt="Know Your Progress"
              className=" object-contain -mr-36"
            />
            <img
              src={CompareWithOther}
              alt="Know Your Progress"
              className=" object-contain "
            />
            <img
              src={PlanYourLesson}
              alt="Know Your Progress"
              className=" object-contain -ml-36"
            />
          </div>

          <div className="w-fit mb-40">
            <CtaButton active={true} linkto={"/signUp"}>
              <p>Leran More</p>
            </CtaButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default LearningLanguageSection;
