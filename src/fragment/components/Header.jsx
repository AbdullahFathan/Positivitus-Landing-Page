import React, { useState } from "react";
import Button from "./Button";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["About Us", "Services", "Use Cases", "Pricing", "Blog"];

  return (
    <nav className="w-full  py-5">
      <header className="flex justify-between items-center w-full">
        <div className="flex gap-2 items-center z-50">
          <img src="icon_web.svg" alt="icon" className="w-8 h-8" />
          <h2 className="font-bold text-2xl lg:text-3xl">Positivus</h2>
        </div>

        <div className="hidden lg:flex gap-10 items-center">
          <ul className="flex gap-7 text-lg font-medium">
            {navItems.map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:underline decoration-primary decoration-2 underline-offset-4 transition-all"
              >
                {item}
              </li>
            ))}
          </ul>
          <Button variant="outline">Request a quote</Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 focus:outline-none z-50"
        >
          {isOpen ? (
            /* Icon Close */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* Icon Hamburger */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>

        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-start pt-24 gap-8 lg:hidden z-40">
            <ul className="flex flex-col gap-6 text-center text-xl font-medium">
              {navItems.map((item) => (
                <li key={item} onClick={() => setIsOpen(false)}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </nav>
  );
};

export default Header;
