import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useSelector } from "react-redux";

import frameImg from "../../../assets/Images/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth);

  return (
    <>
      <div className=" grid min-h-[calc(100vh-4rem)] place-items-center: mt-8">
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
            <div className=" mx-auto w-11/12 md:mx-0 max-w-[450px]">
              <h1 className=" font-semibold text-richblack-5 text-[2rem] leading-[2.5rem]">
                {title}
              </h1>
              <p className=" mt-4 text-[1.2rem] leading-[1.8.75rem]">
                <span className=" text-richblack-100">{description1}</span>
                <span className="font-edu-sa font-bold italic text-blue-100">
                  {description2}
                </span>
              </p>
              {formType === "signup" ? <SignupForm /> : <LoginForm />}
            </div>
            <div className=" mx-auto relative md:mx-0 max-w-[450px] w-11/12">
              <img
                src={frameImg}
                alt="Patter"
                height={504}
                width={558}
                loading="lazy"
              />
              <img
                src={image}
                alt="Student"
                height={504}
                width={558}
                loading="lazy"
                className="absolute -top-4 right-4 z-10"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Template;
