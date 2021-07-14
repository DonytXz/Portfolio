import React from "react";
import HairStyle from "../assets/images/icons/hairstyle.svg";

const Nav = () => {
  return (
    <>
      <div className="w-10/12 h-32 m-auto py-1 border-t-2 border-b-2 border-black">
        <div className="w-full h-full border-t-2 border-b-2 border-black flex flex-row content-center justify-center m-auto">
          <div className="mx-2 w-1/5 h-full flex m-auto">
            <p className="m-auto chunk text-2xl font-medium">Home</p>
          </div>
          <div className="mx-2 w-1/5 h-full flex m-auto">
            <p className="m-auto chunk text-2xl font-medium">About</p>
          </div>
          <div className="mx-2 w-1/5 h-full flex m-auto">
            <img
              className="w-16  mx-auto"
              src={HairStyle}
              alt=""
              srcSet=""
            />
          </div>
          <div className="mx-2 w-1/5 h-full flex m-auto">
            <p className="m-auto chunk text-2xl font-medium">Work</p>
          </div>
          <div className="mx-2 w-1/5 h-full flex m-auto">
            <p className="m-auto chunk text-2xl font-medium">Contact</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
