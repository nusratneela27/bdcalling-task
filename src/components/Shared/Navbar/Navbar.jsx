import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import { AiOutlineMenu } from "react-icons/ai";
import Container from "../Container/Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <div className="flex items-center justify-between h-16">
        {/* Head Name */}
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

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:hidden border-[1px] border-gray-800 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-lg transition bg-slate-200"
        >
          <AiOutlineMenu />
        </div>

        {/* Routes Items */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {["/", "/courses", "/discover", "/live-session", "/my-control"].map(
            (path, index) => {
              const names = [
                "Home",
                "Courses",
                "Discover",
                "Live Session",
                "My Control",
              ];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "relative text-gray-800 font-bold after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-0 after:w-2 after:h-2 after:bg-gray-800 after:rounded-full after:-mb-3"
                      : "text-gray-800 hover:text-gray-600"
                  }
                >
                  {names[index]}
                </NavLink>
              );
            }
          )}
        </div>

        {/* Login and Sign Up Buttons */}
        <div className="flex items-center md:space-x-4">
          <Button
            type="text"
            className="text-base font-semibold hidden md:block"
          >
            Login
          </Button>
          <Button
            type="primary"
            className="bg-white border-none text-black text-base font-semibold hidden md:block"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
