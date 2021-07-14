import React from "react";
import Title from "./Title";
import Nav from "./Nav";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col content-center justify-center">
        <Nav />
        <Title />
      </div>
    </>
  );
};

export default Hero;
