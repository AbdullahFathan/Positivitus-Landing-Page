import React from "react";
import Caraousel from "../components/Caraousel";

const Testimonial = () => {
  return (
    <section className="flex flex-col justify-start items-start gap-10">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="bg-primary p-2 rounded-lg mx-auto md:mx-0">
          <h3>Testimonial</h3>
        </div>
        <p className="max-w-2xl text-center md:text-left">
          Hear from Our Satisfied Clients: Read Our Testimonials{" "}
          <br className="hidden md:block" /> to Learn More about Our Digital
          Marketing Services
        </p>
      </div>

      <Caraousel />
    </section>
  );
};

export default Testimonial;
