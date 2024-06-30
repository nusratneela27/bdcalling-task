import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="bg-gradient-to-b from-customColor1  to-customColor2 min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
