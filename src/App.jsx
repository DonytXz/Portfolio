import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";

const App = () => {
  return (
    <>
      <div className="w-11/12 h-full mx-auto p-2 border-4 border-black my-3">
        <div className="w-full h-full border-2 border-black p-6 ">
          <Hero />
          <About />
          <Skills />
        </div>
      </div>
    </>
  );
};

export default App;
