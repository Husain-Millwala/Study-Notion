import React from "react";

import logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";

const timeLine = [
  {
    logo: logo1,
    heading: "Leadership",
    desciption: "Fully committed to the success of a company",
  },
  {
    logo: logo2,
    heading: "Leadership",
    desciption: "Fully committed to the success of a company",
  },
  {
    logo: logo3,
    heading: "Leadership",
    desciption: "Fully committed to the success of a company",
  },
  {
    logo: logo4,
    heading: "Leadership",
    desciption: "Fully committed to the success of a company",
  },
];

function TimeLineLocation() {
  return (
    <>
      <div className="flex flex-row items-center gap-16">
        <div className="flex flex-col gap-8 w-[40%]">
          {timeLine.map((element, index) => {
            return [
              <div className="flex flex-row gap-8" key={index}>
                <div className="w-[50px] h-[50px] bg-white flex items-center rounded-full justify-center">
                  <img src={element.logo} alt="logo" />
                </div>
                <div>
                  <h2 className=" font-semibold text-[20px]">
                    {element.heading}
                  </h2>
                  <p className="text-base">{element.desciption}</p>
                </div>
              </div>,
            ];
          })}
        </div>
        <div className=" relative h-fit w-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
          <img
            src={timelineImage}
            alt="timeLlineImage"
            className=" object-cover shadow-white shadow-[20px_20px_0px_0px]"
          />

          <div className=" absolute flex flex-row bg-caribbeangreen-700 text-white translate-y-[-50%] translate-x-[-50%] left-[50%] p-6">
            <div className="flex flex-row item-center gap-5 border-r border-caribbeangreen-300 px-8">
              <h2 className=" text-3xl font-bold">10</h2>
              <p className="texts text-caribbeangreen-300">YEARS EXPERIENCES</p>
            </div>
            <div className="flex item-center gap-5 px-8">
              <h2 className=" text-3xl font-bold">10</h2>
              <p className="texts text-caribbeangreen-300">YEARS EXPERIENCES</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimeLineLocation;
