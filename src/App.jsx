import React from "react";
import Header from "./fragment/components/Header";
import Hero from "./fragment/section/Hero";
import Company from "./fragment/section/Company";
import Services from "./fragment/section/Services";
import CaseStudies from "./fragment/section/CaseStudies";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 overflow-hidden">
      <Header />
      <Hero />
      <Company />
      <Services />
      <CaseStudies />
    </div>
  );
};

export default App;
