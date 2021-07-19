import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../components/About";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Hero />
      <About />
      <Skills />
    </div>
  );
};

export default Home;
