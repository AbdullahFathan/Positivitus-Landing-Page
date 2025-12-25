import React from "react";
import Arrow from "../../assets/Arrow";

const ServicesCard = ({
  title1,
  title2,
  bgColor,
  titleBgColor,
  textColor,
  arrowDark,
  image,
}) => {
  return (
    <div
      className={`${bgColor} p-8 rounded-[45px] border border-dark shadow-[0_5px_0_0_#191a23] flex justify-between items-center gap-4 h-full`}
    >
      <div className="flex flex-col justify-between h-full gap-8 md:gap-24">
        <div className="flex flex-col items-start">
          <span
            className={`${titleBgColor} px-2 rounded-lg text-2xl font-medium lg:text-3xl`}
          >
            {title1}
          </span>
          <span
            className={`${titleBgColor} px-2 rounded-lg text-2xl mt-1 font-medium lg:text-3xl`}
          >
            {title2}
          </span>
        </div>

        <div className="flex items-center gap-4 cursor-pointer">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              arrowDark ? "bg-dark " : "bg-white"
            }`}
          >
            <Arrow className={arrowDark ? "text-primary" : "text-dark"} />
          </div>
          <span className={`text-xl hidden md:block ${textColor}`}>
            Learn more
          </span>
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center">
        <img
          src={image}
          alt={title1}
          className="w-full h-auto object-contain max-h-40"
        />
      </div>
    </div>
  );
};

export default ServicesCard;
