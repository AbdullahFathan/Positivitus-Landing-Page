import React from "react";
import Header from "./fragment/components/Header";
import Hero from "./fragment/section/Hero";
import Company from "./fragment/section/Company";
import Services from "./fragment/section/Services";
import CaseStudies from "./fragment/section/CaseStudies";
import WorkingProgres from "./fragment/section/WorkingProgres";
import Teams from "./fragment/section/Teams";
import Testimonial from "./fragment/section/Testimonial";
import Contact from "./fragment/section/Contact";
import Footer from "./fragment/section/Footer";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 ">
      <Header />
      <Hero />
      <Company />
      <Services />
      <CaseStudies />
      <WorkingProgres />
      <Teams />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
