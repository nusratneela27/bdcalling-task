import React from "react";
import Count from "../../components/Copunt";

const Achievement = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-white py-16 px-10 my-24 space-y-5 text-center ">
      <h1 className="text-4xl font-bold">Everything is Achievement</h1>
      <p className=" md:w-2/6">
        Lorem ipsum dolor sit amet consectetur. Nulla vel nec morbi donec
        senectus pulvinar quis. Id dolor orci justo sit a auctor morbi dolor
        suscipit.
      </p>
      <Count></Count>
    </div>
  );
};

export default Achievement;
