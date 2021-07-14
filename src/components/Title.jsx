import React from "react";

const Title = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-3/4 m-auto flex flex-col content-center justify-center">
          <h1 className="text-gray-800 text-center text-6xl p-2 my-2 chunkPrint font-bold">
            Hello, I'm Donato Alvarez.
          </h1>
          <h2 className="text-gray-800 text-center text-4xl p-2 my-2 chunk font-semibold">
            Frontend Developer.
          </h2>
        </div>
        <div className="w-10/12 mt-8 border-b-2 border-black py-1 mx-auto">
          <div className="border-b-2 border-black"></div>
        </div>
      </div>
    </>
  );
};

export default Title;
