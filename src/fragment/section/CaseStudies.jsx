import React from "react";
import Arrow from "../../assets/Arrow";

const caseStudies = [
  {
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

const CaseStudies = () => {
  return (
    <section className="flex flex-col justify-start items-start gap-10">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="bg-primary p-2 rounded-lg mx-auto md:mx-0">
          <h3>Case Studies</h3>
        </div>
        <p className="max-w-2xl text-center md:text-left">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      <div className="bg-dark rounded-[45px] p-8 md:p-14 text-white">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`flex flex-col gap-5 md:px-16 first:pl-0 last:pr-0 justify-between flex-1 ${
                index !== caseStudies.length - 1
                  ? "border-b border-white pb-8 md:border-b-0 md:pb-0 md:border-r"
                  : ""
              }`}
            >
              <p className="text-lg">{study.text}</p>
              <div className="flex items-center gap-2 cursor-pointer text-primary mt-auto">
                <span className="text-xl">Learn more</span>
                <Arrow className="text-primary transform rotate-45" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
