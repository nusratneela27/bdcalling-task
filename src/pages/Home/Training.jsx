import { Button } from "antd";
import React from "react";
import t1 from "../../assets/training/t1.png";
import t2 from "../../assets/training/t2.png";
import t3 from "../../assets/training/t3.png";
import t4 from "../../assets/training/t4.png";
import t5 from "../../assets/training/t5.png";
import t6 from "../../assets/training/t6.png";

const Training = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-5 mt-48 px-4 md:px-0 ">
        <Button
          type="primary"
          className="bg-white border-none text-black text-base rounded-2xl shadow-md px-5 py-3"
        >
          Training
        </Button>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold whitespace-nowrap text-center">
          <span className="text-gradient">Discover</span> the World of <br />{" "}
          Design
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center space-y-5 bg-white mt-7 mx-4 lg:mx-96 p-10 md:p-10 shadow-md">
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6">
          <img src={t1} alt="" />
          <img src={t2} alt="" />
          <img src={t3} alt="" />
          <img src={t4} alt="" />
          <img src={t5} alt="" />
          <img src={t6} alt="" />
        </div>

        <h1 className="text-xl md:text-5xl font-semibold text-gray-500 whitespace-nowrap text-center">
          Start training with the <br />{" "}
          <span className="text-gradient">professional</span> team
        </h1>
        <p>Come on, it's time to start training now!</p>
        <Button
          type="primary"
          className="bg-gray-900 text-white px-5 md:px-7 py-3 md:py-4 lg:py-6 shadow-2xl"
        >
          Start training
        </Button>
      </div>
    </div>
  );
};

export default Training;
