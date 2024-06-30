import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="bg-slate-50">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
