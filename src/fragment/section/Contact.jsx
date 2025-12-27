import React from "react";
import ContactUsForm from "../components/ContactUsForm";

const Contact = () => {
  return (
    <section className="flex flex-col justify-start items-start mt-24">
      <div className="flex flex-col  md:flex-row gap-5">
        <div className="bg-primary p-2 rounded-lg mx-auto md:mx-0">
          <h3>Contact Us</h3>
        </div>
        <p className="max-w-2xl">
          Connect with Us: Let's Discuss Your <br className="hidden md:block" />{" "}
          Digital Marketing Needs
        </p>
      </div>

      <div className="bg-gray-100 rounded-[45px] py-10 px-6 md:px-0 w-full flex flex-col md:flex-row gap-8 overflow-hidden relative">
        <ContactUsForm />
        <div className="hidden md:flex w-full md:w-1/2 items-center justify-center relative">
          <img
            src="bg_contact_us.svg"
            alt="Make things happen illustration"
            className="object-contain absolute -right-[40%] h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
