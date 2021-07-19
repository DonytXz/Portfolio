import React from "react";
import Title from "./Title";
import Nav from "../components/Nav";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col bg-img">
        <Nav />
        <Title />
      </div>
    </>
  );
};

export default Hero;
