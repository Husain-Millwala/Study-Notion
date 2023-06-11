import React from "react";
import { NavLink, matchPath, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import ProfileDropDown from "../COre/Auth/ProfileDropDown";
import { useState, useEffect } from "react";
import { apiConnector } from "../../Services/APIConnector";
import { categories } from "../../Services/apis";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  const [subLinks, setSubLinks] = useState([]);

  const fetchSubLinks = async () => {
    try {
      const result = await apiConnector("get", categories.CATEGORIES_API);
      setSubLinks(result.data.data);
    } catch (error) {
      console.log("Could not fetch a category list");
    }
  };

  useEffect(() => {
    fetchSubLinks();
  }, []);

  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className="flec h-16 items-center justify-center border-b-[1px] border-richblack-600 ml-1">
      <div className=" flex max-w-11/12 items-center justify-around max-w-maxContent ml-32 mt-4">
        <NavLink to={"/"}>
          <img src={Logo} alt="Logo" width={160} height={40} loading="lazy" />
        </NavLink>

        <nav>
          <ul className="flex gap-x-6 text-richblack-25 ">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div className="relative flex items-center gap-2 group">
                    <p>{link.title}</p>
                    <IoIosArrowDropdownCircle />

                    <div
                      className="invisible absolute left-[50%]
                                    translate-x-[-50%] translate-y-[80%]
                                 top-[50%]
                                flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900
                                opacity-0 transition-all duration-200 group-hover:visible
                                group-hover:opacity-100 lg:w-[300px]"
                    >
                      <div
                        className="absolute left-[50%] top-0
                                translate-x-[80%]
                                translate-y-[-40%] h-6 w-6 rotate-45 rounded bg-richblack-5"
                      ></div>

                      {subLinks.length ? (
                        subLinks.map((subLink, index) => (
                          <NavLink to={`${subLink.link}`} key={index}>
                            <p>{subLink.title}</p>
                          </NavLink>
                        ))
                      ) : (
                        <di></di>
                      )}
                    </div>
                  </div>
                ) : (
                  <NavLink to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? " text-yellow-25 "
                          : " text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-4 items-center">
          {user && user?.accountType !== "Instructor" && (
            <NavLink to={"/dashboard/cart"} className=" relative">
              {totalItems > 0 && <span>{totalItems}</span>}
            </NavLink>
          )}

          {token === null && (
            <NavLink to={"/signup"}>
              <button className="border border-richblack-600 bg-richblack-800 px-3 py-2 rounded-md text-richblack-100">
                Sign Up
              </button>
            </NavLink>
          )}

          {token === null && (
            <NavLink to={"/login"}>
              <button className="border border-richblack-600 bg-richblack-800 px-3 py-2 rounded-md text-richblack-100">
                Log In
              </button>
            </NavLink>
          )}

          {token !== null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
