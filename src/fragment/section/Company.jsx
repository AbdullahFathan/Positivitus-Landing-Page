import React from "react";

const Company = () => {
  const images = [
    "company_1.svg",
    "company_2.svg",
    "company_3.svg",
    "company_4.svg",
    "company_5.svg",
    "company_6.svg",
  ];
  return (
    <section>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-10  lg:gap-28 place-items-center ">
        {images.map((image, index) => (
          <img
            key={index}
            src={`/company_${index + 1}.svg`}
            alt={`company_${index + 1}`}
            className=" grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
      </div>
    </section>
  );
};

export default Company;
