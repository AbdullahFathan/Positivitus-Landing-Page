import React from "react";

const DropdownItem = ({ number, title, description, isOpen, onClick }) => {
  return (
    <div
      className={`border border-dark rounded-[45px] p-8 md:px-14 md:py-10 shadow-[0_5px_0_0_#191a23] transition-all duration-300 cursor-pointer ${
        isOpen ? "bg-primary" : "bg-gray-100"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="text-2xl font-medium">0{number}</span>
          <h3 className="text-2xl  font-medium">{title}</h3>
        </div>

        <div className="bg-white rounded-full w-10 h-10  flex items-center justify-center border border-dark shrink-0">
          {isOpen ? (
            <svg
              width="24"
              height="6"
              viewBox="0 0 18 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 md:w-6"
            >
              <path d="M0 5.5V0.5H18V5.5H0Z" fill="black" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 md:w-6"
            >
              <path
                d="M10.875 13.125H0.5V10.875H10.875V0.5H13.125V10.875H23.5V13.125H13.125V23.5H10.875V13.125Z"
                fill="black"
              />
            </svg>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="mt-8 border-t border-black pt-8">
          <p className="text-lg">{description}</p>
        </div>
      )}
    </div>
  );
};

export default DropdownItem;
