import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Common/Navbar";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import OpenRoute from "./Components/COre/Auth/OpenRoute";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import ForgotPassword from "./Pages/ForgotPassword";

function App() {
  return (
    <>
      <div className="w-screen min-h-screen flex flex-col bg-richblack-900 font-inter">
        {/* <Navbar /> */}
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
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
