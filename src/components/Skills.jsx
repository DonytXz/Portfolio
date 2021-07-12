import React from "react";

const Skills = () => {
  return (
    <>
      <div className="w-1/2 h-1/2 m-auto">
        <h1 className="text-center mx-auto text-4xl p-2">Skills</h1>
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          <div>
            <h2 className="text-center text-2xl p-2">HTML</h2>
            <p>Description...</p>
          </div>
          <div>
            <h2 className="text-center text-2xl p-2">CSS</h2>
            <p>Description...</p>
          </div>
          <div>
            <h2 className="text-center text-2xl p-2">Java Script</h2>
            <p>Description...</p>
          </div>
          <div>
            <h2 className="text-center text-2xl p-2">React</h2>
            <p>Description...</p>
          </div>
          <div>
            <h2 className="text-center text-2xl p-2">Angular</h2>
            <p>Description...</p>
          </div>
          <div>
            <h2 className="text-center text-2xl p-2">Node.js</h2>
            <p>Description...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
