import { Button } from "antd";
import { NavLink } from "react-router-dom";

const NavButtons = () => {
  return (
    <div className="flex items-center md:space-x-4">
      <Button type="text" className="text-base font-semibold hidden lg:block">
        <NavLink to={"/login"}>Login</NavLink>
      </Button>
      <Button
        type="primary"
        className="bg-white border-none text-black text-base font-semibold hidden lg:block"
      >
        Sign Up
      </Button>
    </div>
  );
};

export default NavButtons;
