import React from "react";

const state = [
  { count: "5K", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];

function State() {
  return (
    <>
      <div className=" bg-richblack-700">
        <div className=" flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto">
          <div className=" text-center grid grid-cols-2 md:grid-cols-4">
            {state.map((data, index) => {
              return (
                <div className=" flex flex-col py-10 " key={index}>
                  <h2 className="font-bold text-richblack-5 text-[32px]">
                    {data.count}
                  </h2>
                  <p className=" font-semibold text-[16px] text-richblack-500">
                    {data.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default State;
