import React from "react";
import ImageOne from "../images/frank_ocean.jpeg";
import ImageTwo from "../images/sudoku.png";

const Examples = () => {
  return (
    <>
      <div className="menu-card">
        <img src={ImageOne} alt="" className="h-full rounded mb-20 shadow" />
        <div className="flex flex-column justify-center items-center">
          <h2 className="text-2xl mb-2">Frank Ocean</h2>
          <p className="mb-2">Channel Orange</p>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageTwo} alt="" className="h-full rounded mb-20 shadow" />
        <div className="flex flex-column justify-center items-center">
          <h2 className="text-2xl mb-2">Sudoku</h2>
          <p className="mb-2">React Native</p>
        </div>
      </div>
    </>
  );
};

export default Examples;
