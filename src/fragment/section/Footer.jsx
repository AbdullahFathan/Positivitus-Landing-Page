import React from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const navItems = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

  return (
    <footer className="mt-20">
      <div className="bg-dark w-full text-white rounded-t-[45px] px-8 py-12 md:px-14 md:py-14">
        {/* Top Row: Logo, Nav, Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 mb-10 md:mb-16">
          <div className="flex items-center gap-2">
            <img
              src="icon_white.svg"
              alt="Positivus Logo"
              className="w-8 h-8"
            />
            <span className="text-2xl font-bold">Positivus</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-white hover:underline hover:text-primary transition-colors underline-offset-4"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white text-dark rounded-full hover:bg-primary transition-colors"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white text-dark rounded-full hover:bg-primary transition-colors"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white text-dark rounded-full hover:bg-primary transition-colors"
            >
              <FaTwitter size={16} />
            </a>
          </div>
        </div>

        {/* Middle Row: Contact & Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 border-b border-gray-600 pb-10">
          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="bg-primary text-dark px-2 rounded-md font-medium text-lg inline-block mb-6">
              Contact us:
            </h4>
            <div className="space-y-4 text-base md:text-lg font-light">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>
                Address: 1234 Main St <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="bg-[#292A32] rounded-[14px] p-8 w-full md:w-1/2 flex flex-col md:flex-row gap-4 items-center">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border border-white rounded-[14px] px-6 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-primary"
            />
            <button className="w-full md:w-auto bg-primary text-dark font-medium rounded-[14px] px-8 py-4 whitespace-nowrap hover:bg-lime-400 transition-colors">
              Subscribe to news
            </button>
          </div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 mt-8 text-sm md:text-base text-gray-300">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <a href="#" className="underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
