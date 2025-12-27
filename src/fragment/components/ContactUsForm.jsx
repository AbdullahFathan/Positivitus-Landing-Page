import React from "react";

const ContactUsForm = () => {
  return (
    <form className="w-full md:w-1/2 flex flex-col gap-6 p-4 md:p-10">
      <div className="flex gap-8 mb-4">
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="radio"
            name="inquiryType"
            value="sayHi"
            defaultChecked
            className="appearance-none w-6 h-6 border border-black rounded-full checked:bg-primary checked:border-none focus:outline-none relative transition-all duration-200 cursor-pointer 
            after:content-[''] after:w-3 after:h-3 after:bg-black after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 checked:after:opacity-100"
          />
          <span className="text-base md:text-lg">Say Hi</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="radio"
            name="inquiryType"
            value="getQuote"
            className="appearance-none w-6 h-6 border border-black rounded-full checked:bg-primary checked:border-none focus:outline-none relative transition-all duration-200 cursor-pointer 
            after:content-[''] after:w-3 after:h-3 after:bg-black after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 checked:after:opacity-100"
          />
          <span className="text-base md:text-lg">Get a Quote</span>
        </label>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-base md:text-lg">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          className="w-full px-6 py-4 rounded-[14px] border border-black bg-white focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-gray-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-base md:text-lg">
          Email*
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="w-full px-6 py-4 rounded-[14px] border border-black bg-white focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-gray-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-base md:text-lg">
          Message*
        </label>
        <textarea
          id="message"
          rows="5"
          placeholder="Message"
          className="w-full px-6 py-4 rounded-[14px] border border-black bg-white focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-gray-500 resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-4 mt-4 bg-dark text-white rounded-[14px] hover:bg-neutral-800 transition-colors text-lg"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactUsForm;
