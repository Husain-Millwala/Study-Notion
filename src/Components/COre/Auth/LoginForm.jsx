import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../../../Services/operrations/AuthApi";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefoult();
    dispatch(login(email, password, navigate));
  };

  return (
    <>
      <form
        onSubmit={handleOnSubmit}
        className="mt-6 flex w-full flex-col gap-y-6"
      >
        <label className=" w-full">
          <p className=" mb-1 text-base text-richblack-5">
            Email Address <sup className=" text-pink-200">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter your email address"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </label>
        <label className="relative">
          <p className=" mb-1 text-base text-richblack-5">
            Password <sup className=" text-pink-200">*</sup>
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={handleOnChange}
            placeholder="Enter Password"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className=" absolute right-4 top-10 z-10 cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
          <Link to="/forgot-password">
            <p className=" mt-4 ml-auto max-w-max text-s text-blue-100">
              Forgot Password
            </p>
          </Link>
        </label>
        <button
          type="submit"
          className=" mt-2 rounded-lg bg bg-yellow-50 py-2 px-3 font-bold text-richblack-900"
        >
          Sign In
        </button>
      </form>
    </>
  );
}

export default LoginForm;
