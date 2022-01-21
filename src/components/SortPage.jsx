import React from "react";

const Bar = ({ color }) => {
  return (
    <div
      className="h-100 flex-1 mx-1 mt-3"
      style={{ backgroundColor: color }}
    ></div>
  );
};

const SortPage = () => {
  return (
    <div className="w-full bg-red-300 flex-1 flex justify-center">
      <Bar color={"rgb(0,0,0)"} />
      <Bar color={"rgb(0,2,30)"} />
      <Bar color={"rgb(0,255,0)"} />
    </div>
  );
};

export default SortPage;
