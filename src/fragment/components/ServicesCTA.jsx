import React from "react";
import Button from "./Button";

const ServicesCTA = () => {
  return (
    <div className="bg-gray-200 rounded-[45px] p-8  flex flex-col-reverse md:flex-row justify-between items-center gap-8 relative my-24">
      <div className="flex flex-col items-start gap-6 md:w-1/2">
        <h3 className="text-3xl font-medium">Let's make things happen</h3>
        <p className="text-lg">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <Button text="Get your free proposal" variant="secondary" />
      </div>
      <div className="relative md:w-1/2 flex justify-center md:justify-end">
        <img
          src="services_7.svg"
          alt="Make things happen illustration"
          className="object-contain  w-full md:w-[80%]"
        />
      </div>
    </div>
  );
};

export default ServicesCTA;
