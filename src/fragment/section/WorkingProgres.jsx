import React, { useState } from "react";
import DropdownItem from "../components/DropdownItem";

const process = [
  {
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Research and Strategy Development",
    description:
      "We conduct thorough research to identify opportunities and develop a comprehensive strategy tailored to your specific goals and target audience.",
  },
  {
    title: "Implementation",
    description:
      "Our team executes the strategy with precision, utilizing the latest tools and techniques to ensure optimal performance and results.",
  },
  {
    title: "Monitoring and Optimization",
    description:
      "We continuously monitor campaigns and optimize them based on data-driven insights to ensure sustained growth and maximum ROI.",
  },
  {
    title: "Continual Improvement",
    description:
      "We continuously monitor campaigns and optimize them based on data-driven insights to ensure sustained growth and maximum ROI.",
  },
  {
    title: "Monitoring and Optimization",
    description:
      "We continuously monitor campaigns and optimize them based on data-driven insights to ensure sustained growth and maximum ROI.",
  },
];

const WorkingProgres = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="flex flex-col justify-start items-start gap-10">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="bg-primary p-2 rounded-lg mx-auto md:mx-0">
          <h3>Our Working Process</h3>
        </div>
        <p className="max-w-2xl text-center md:text-left">
          Step-by-Step Guide to Achieving <br className="hidden md:block" />
          Your Business Goals
        </p>
      </div>
      <div className="flex flex-col gap-5 w-full">
        {process.map((item, index) => (
          <DropdownItem
            key={index}
            number={index + 1}
            title={item.title}
            description={item.description}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkingProgres;
