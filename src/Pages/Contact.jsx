import React from "react";

import ContactDetails from "../Components/ContactPage/ContactDetails";
import ContactForm from "../Components/ContactPage/ContactForm";
import Footer from "../Components/Common/Footer";

function Contact() {
  return (
    <>
      <div className=" mx-auto mt-12 flex flex-col w-11/12 max-w-maxContent justify-between gap-10 text-white lg:flex-row">
        <div className=" lg:w-[40%]">
          <ContactDetails />
        </div>
        <div className=" lg:w-[60%]">
          <ContactForm />
        </div>
      </div>
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
