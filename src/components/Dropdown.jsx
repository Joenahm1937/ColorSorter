import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-row-4 text-center items-center bg-yellow-500"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link className="p-4" to="/">
        Home
      </Link>
      <Link className="p-4" to="/bubble">
        Bubble
      </Link>
      <Link className="p-4" to="/merge">
        Merge
      </Link>
      <Link className="p-4" to="/quick">
        Quick
      </Link>
    </div>
  );
};

export default Dropdown;
