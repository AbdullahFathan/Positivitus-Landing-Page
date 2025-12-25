import React from "react";
import ServicesCard from "../components/ServicesCard";
import ServicesCTA from "../components/ServicesCTA";

const services = [
  {
    title1: "Search engine",
    title2: "optimization",
    bgColor: "bg-light",
    titleBgColor: "bg-primary",
    textColor: "text-dark",
    arrowDark: true,
    image: "services_1.svg",
  },
  {
    title1: "Pay-per-click",
    title2: "advertising",
    bgColor: "bg-primary",
    titleBgColor: "bg-white",
    textColor: "text-dark",
    arrowDark: true,
    image: "services_2.svg",
  },
  {
    title1: "Social Media",
    title2: "Marketing",
    bgColor: "bg-dark",
    titleBgColor: "bg-white",
    textColor: "text-white",
    arrowDark: false,
    image: "services_3.svg",
  },
  {
    title1: "Email",
    title2: "Marketing",
    bgColor: "bg-light",
    titleBgColor: "bg-primary",
    textColor: "text-dark",
    arrowDark: true,
    image: "services_4.svg",
  },
  {
    title1: "Content",
    title2: "Creation",
    bgColor: "bg-primary",
    titleBgColor: "bg-white",
    textColor: "text-dark",
    arrowDark: true,
    image: "services_5.svg",
  },
  {
    title1: "Analytics and",
    title2: "Tracking",
    bgColor: "bg-dark",
    titleBgColor: "bg-primary",
    textColor: "text-white",
    arrowDark: false,
    image: "services_6.svg",
  },
];

const Services = () => {
  return (
    <section className="flex flex-col justify-start items-start">
      <div className="flex flex-col  md:flex-row gap-5">
        <div className="bg-primary p-2 rounded-lg mx-auto md:mx-0">
          <h3>Services</h3>
        </div>
        <p className="max-w-2xl">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {services.map((service, index) => (
          <ServicesCard key={index} {...service} />
        ))}
      </div>
      <ServicesCTA />
    </section>
  );
};

export default Services;
