import React from "react";
import { Link } from "react-router-dom";

function CtaButton({ children, active, linkto }) {
  return (
    <>
      <Link to={linkto}>
        <button
          className={` text-lg flex items-center text-center text-[12px] px-6 py-3 rounded-md font-bold hover:scale-95 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:shadow-none border-b-[1px] border-b-richblack-700 transition-all duration-200
          ${
            active ? " bg-yellow-50 text-black" : " bg-richblack-800 text-white"
          }`}
        >
          {children}
        </button>
      </Link>
    </>
  );
}

export default CtaButton;
