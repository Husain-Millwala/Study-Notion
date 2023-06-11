import React from "react";
import ContactUsForm from "./ContactUsForm";

function ContactForm() {
  return (
    <>
      <div className="border border-richblack-600 text-richblack-600 rounded-xl flex gap-3 flex-col p-8 lg:p-16">
        <h1 className=" text-4xl leading-10 text-richblack-5 font-semibold">
          Got a Idea? We&apos;ve got the skills. Let&apos;s team up
        </h1>
        <p className=" text-base font-normal">
          Tell us more about yourself and what you&apos;re got in mind.
        </p>
        <div className="mt-10">
          <ContactUsForm />
        </div>
      </div>
    </>
  );
}

export default ContactForm;
