import React from "react";
// import HairStyle from "../assets/images/icons/hairstyle.svg";

const Nav = () => {
  return (
    <>
      <div className="w-1/2 flex flex-col lg:flex-row mx-auto  bg-gray-200">
        <div className="p-4 w-1/4 text-center">Home</div>
        <div className="p-4 w-1/4 text-center">About</div>
        <div className="p-4 w-1/4 text-center">Proyects</div>
        <div className="p-4 w-1/4 text-center">Contact</div>
      </div>
    </>
  );
};

export default Nav;
