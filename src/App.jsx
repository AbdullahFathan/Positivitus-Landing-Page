import React from "react";
import Header from "./fragment/components/Header";
import Hero from "./fragment/section/Hero";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 overflow-hidden">
      <Header />
      <Hero />
    </div>
  );
};

export default App;
