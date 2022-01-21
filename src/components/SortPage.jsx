import React from "react";

const Bar = ({ color }) => {
  return (
    <div
      className="h-100 flex-1 mx-0.5 mt-3"
      style={{ backgroundColor: color }}
    ></div>
  );
};

const SortPage = ({ bars }) => {
  return (
    <div className="w-full bg-white flex-1 flex justify-center">
      {bars.map((bar, i) => (
        <Bar key={i} color={`rgb(${bar[0]},${bar[1]},${bar[2]})`} />
      ))}
    </div>
  );
};

export default SortPage;
