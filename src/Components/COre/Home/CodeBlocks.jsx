import React from "react";
import { FiArrowRight } from "react-icons/fi";
import CtaButton from "./CtaButton";
import { TypeAnimation } from "react-type-animation";

function CodeBlocks({
  position,
  heading,
  subheading,
  ctaBtn1,
  ctaBtn2,
  codeBlock,
  backgroundGradient,
  codeColor,
}) {
  return (
    <>
      <div className={`flex ${position} my-20 justify-between gap-10`}>
        <div className="flex flex-col gap-8 w-[50%]">
          {heading}
          <div>{subheading}</div>
          <div className="flex flex-row gap-8 mt-8">
            <CtaButton active={ctaBtn1.active} linkto={ctaBtn1.linkto}>
              <div className="flex gap-2 items-center">
                {ctaBtn1.text}
                <FiArrowRight />
              </div>
            </CtaButton>
            <CtaButton active={ctaBtn2.active} linkto={ctaBtn2.linkto}>
              {ctaBtn2.text}
            </CtaButton>
          </div>
        </div>

        {/* section2 */}

        <div className="h-fit  flex flex-row text-10[px] w-[100%] py-4 lg:w-[500px]">
          <div className=" text-center flex flex-col font-inter font-bold w-[10%] text-richblack-400">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
          </div>

          <div
            className={` w-[90%] flex flex-col font-bold font-mono gap-2 pr-2 ${codeColor}`}
          >
            <TypeAnimation
              sequence={[codeBlock, 2000, ""]}
              repeat={Infinity}
              cursor={true}
              style={{
                whiteSpace: "pre-line",
                display: "block",
              }}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CodeBlocks;
