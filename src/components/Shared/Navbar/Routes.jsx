import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Button } from "antd";

const Routes = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
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

      {/* Mobile Menu Icon */}
      <div className="relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:hidden border-[1px] border-gray-800 rounded-full cursor-pointer hover:shadow-lg transition bg-slate-200"
        >
          <AiOutlineMenu />
        </div>
        {isOpen && (
          <div className="absolute z-10 rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
            <div className="flex flex-col cursor-pointer space-y-2 m-2">
              {[
                "/",
                "/courses",
                "/discover",
                "/live-session",
                "/my-control",
              ].map((path, index) => {
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
                        ? "text-gray-800 font-bold"
                        : "text-gray-800 hover:text-gray-600"
                    }
                  >
                    {names[index]}
                  </NavLink>
                );
              })}
              <Button type="text" className="text-base font-semibold ">
                Login
              </Button>
              <Button
                type="primary"
                className="bg-white border-none text-black text-base font-semibold "
              >
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Routes;
