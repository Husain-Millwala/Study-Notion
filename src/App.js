import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Home from "./Pages/Home";
import Navbar from "./Components/Common/Navbar";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import OpenRoute from "./Components/COre/Auth/OpenRoute";
import Signup from "./Pages/Signup";
import VerifyEmail from "./Pages/VerifyEmail";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import ForgotPassword from "./Pages/ForgotPassword";
import UpdatePassword from "./Pages/UpdatePassword";
import { ACCOUNT_TYPE } from "./utils/constant";
import PrivateRoute from "./Components/COre/Auth/PrivateRoute";
import Dashboard from "./Pages/Dashboard";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.profile);

  return (
    <>
      <div className="w-screen min-h-screen flex flex-col bg-richblack-900 font-inter">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/signup"
            element={
              <OpenRoute>
                <Signup />
              </OpenRoute>
            }
          />
          <Route
            path="verify-email"
            element={
              <OpenRoute>
                <VerifyEmail />
              </OpenRoute>
            }
          />
          <Route
            path="/login"
            element={
              <OpenRoute>
                <Login />
              </OpenRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <OpenRoute>
                <ForgotPassword />
              </OpenRoute>
            }
          />
          <Route
            path="update-password/:id"
            element={
              <OpenRoute>
                <UpdatePassword />
              </OpenRoute>
            }
          />

          <Route
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            {/* <Route path="dashboard/my-profile" element={<MyProfile />} />
            <Route path="dashboard/Settings" element={<Settings />} /> */}

            {user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <>
                {/* <Route path="dashboard/cart" element={<Cart />} />
                <Route
                  path="dashboard/enrolled-courses"
                  element={<EnrolledCourses />}
                /> */}
              </>
            )}

            {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR &&
              {
                /* <>
                <Route path="dashboard/add-course" element={<AddCourse />} />
              </> */
              }}
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
