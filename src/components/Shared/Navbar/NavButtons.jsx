import { Button } from "antd";

const NavButtons = () => {
  return (
    <div className="flex items-center md:space-x-4">
      <Button type="text" className="text-base font-semibold hidden md:block">
        Login
      </Button>
      <Button
        type="primary"
        className="bg-white border-none text-black text-base font-semibold hidden md:block"
      >
        Sign Up
      </Button>
    </div>
  );
};

export default NavButtons;
