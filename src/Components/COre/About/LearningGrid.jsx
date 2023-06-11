import React from "react";

import HighlightedText from "../Home/HighlightedText";
import CtaButton from "../Home/CtaButton";

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 6,
    heading: "Ready to Work",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
];

function LearningGrid() {
  return (
    <>
      <div className=" grid mx-auto width-[360px] xl:w-fit mb-12 grid-cols-1 xl:grid-cols-4">
        {LearningGridArray.map((card, index) => {
          return (
            <div
              key={index}
              className={`${index === 0 && "xl:col-span-2 xl:h-[300px]"} ${
                card.order % 2 === 1
                  ? "bg-richblack-700 h-[300px]"
                  : card.order % 2 === 0
                  ? "bg-richblack-800 h-[300px]"
                  : "bg-transparent"
              }`}
            >
              {card.order < 0 ? (
                <div className=" flex flex-col pb-10 gap-3 xl:w-[90%] xl:pb-8">
                  <div className=" text-4xl font-semibold">
                    {card.heading}
                    <HighlightedText text={card.highlightText} />
                  </div>
                  <p className=" text-richblack-300 font-medium">
                    {card.description}
                  </p>
                  <div className=" w-fit mt-2">
                    <CtaButton active={true} linkto={card.BtnLink}>
                      {card.BtnText}
                    </CtaButton>
                  </div>
                </div>
              ) : (
                <div className=" p-8 flex flex-col gap-8">
                  <h2 className=" text-richblack-5 text-lg">{card.heading}</h2>
                  <p className=" text-richblack-300 font-medium">
                    {card.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default LearningGrid;
