import { Button } from "antd";
import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center  space-y-5  shadow1 min-h-screen">
      <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold whitespace-nowrap">
        Unlock Your Potential with
      </h1>
      <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold text-gradient whitespace-nowrap">
        Sinar Education
      </h1>
      <p className="w-full md:w-3/4 lg:w-2/6 text-center">
        Education isn't just about acquiring knowledge; it's the key that opens
        doors to new worlds, empowers individuals, and shapes a brighter future.
      </p>
      <Button
        type="primary"
        className="bg-gray-900 text-white px-5 md:px-7 py-3 md:py-4 lg:py-6 shadow-2xl"
      >
        Start training
      </Button>
    </div>
  );
};

export default Banner;
