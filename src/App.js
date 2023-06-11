import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Common/Navbar";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App() {
  return (
    <>
      <div className="w-screen min-h-screen flex flex-col bg-richblack-900 font-inter">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
