import React from "react";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="flex-col md:flex-row">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl lg:text-6xl font-medium leading-tight mb-6">
          Navigating the digital landscape for success
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>

        <Button variant="secondary">Book a consultation</Button>
      </div>

      <div className="w-full md:w-lg flex justify-center md:justify-end relative">
        <img
          src="hero_bg.svg"
          alt="Illustration"
          className="w-full h-auto object-contain max-w-[400px] md:max-w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
