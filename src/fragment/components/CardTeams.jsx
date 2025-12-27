import React from "react";

const CardTeams = ({ name, role, description, image }) => {
  return (
    <div className="border border-dark shadow-[0px_5px_0px_#000000] rounded-3xl p-8 bg-white h-full flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-1 relative">
          <div className="flex items-end gap-3 z-10 w-full">
            <img src={image} alt={name} className="w-24 h-24 object-cover" />

            <div className="relative self-center">
              <h4 className="text-xl font-medium">{name}</h4>
              <p className="text-sm">{role}</p>
            </div>
          </div>

          <a
            href="#"
            className="bg-black text-primary p-2 rounded-full flex items-center justify-center w-10 h-10 absolute top-0 right-0"
          >
            <img src="icon_linkend.svg" alt="icon_linkend" />
          </a>
        </div>
      </div>

      <hr className="border-t border-black my-4" />

      <p className="text-base text-dark">{description}</p>
    </div>
  );
};

export default CardTeams;
