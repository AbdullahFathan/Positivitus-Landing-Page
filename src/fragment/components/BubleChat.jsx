import React from "react";

const BubleChat = ({ item, index }) => {
  return (
    <div key={index} className="w-full h-full flex flex-col">
      <div className="border border-primary rounded-[45px] p-8 md:p-12 relative mb-6 flex-1 flex items-center">
        <p className="text-base md:text-lg">"{item.quote}"</p>

        <div
          className="absolute -bottom-px left-10 w-0 h-0 
                    border-l-20 border-l-transparent
                    border-r-20 border-r-transparent
                    border-t-20 border-t-primary"
          style={{ transform: "translateY(100%)" }}
        >
          <div
            className="absolute -top-[21px] -left-[18px] w-0 h-0 
                        border-l-18 border-l-transparent
                        border-r-18 border-r-transparent
                        border-t-18 border-t-dark"
          ></div>
        </div>
      </div>
      <div className="ml-12 mt-2">
        <h4 className="text-primary text-xl font-medium">{item.name}</h4>
        <p className="text-white text-sm">{item.role}</p>
      </div>
    </div>
  );
};

export default BubleChat;
