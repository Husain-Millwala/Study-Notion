import React from "react";
import ContactUsForm from "../../ContactPage/ContactUsForm";

function ContactFormSection() {
  return (
    <>
      <div className="mx-auto mt-8">
        <h2 className=" font-semibold text-center text-4xl">Get in Touch</h2>
        <p className=" text-center text-richblack-300 mt-4">
          We&apos;d love to here for you, Please fill out this form.
        </p>
        <div className=" mt-12 mx-auto">
          <ContactUsForm />
        </div>
      </div>
    </>
  );
}

export default ContactFormSection;
