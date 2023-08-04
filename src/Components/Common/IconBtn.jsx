import React from "react";

function IconBtn({
  text,
  onclick,
  children,
  disabled,
  outline = false,
  type,
  customclases,
}) {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onclick}
        className={` flex items-center ${
          outline ? "border border-yellow-50 bg-transparent" : "bg-yellow-50"
        } cursor-pointer gap-x-2 rounded-md py2 px-5 font-semibold text-richblack-900 ${customclases}`}
        type={type}
      >
        {children ? (
          <>
            <span className={`${outline && "text-yellow-50"}`}>{text}</span>
          </>
        ) : (
          text
        )}
      </button>
    </>
  );
}

export default IconBtn;
