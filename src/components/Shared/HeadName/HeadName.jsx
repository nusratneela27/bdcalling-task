import React from "react";
import { NavLink } from "react-router-dom";

const HeadName = () => {
  return (
    <NavLink to={"/"}>
      <div className="flex-shrink-0">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">
            <span className="text-black">S</span>
            <span className="text-cyan-500">E</span>
          </span>
          <span className="text-lg font-semibold">
            <span className="text-black">Sinar </span>
            <span className="text-cyan-500">Education</span>
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default HeadName;
