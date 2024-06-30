import React from "react";
import ImageSrc from "../assets/sugar-cube 3.png";

const Count = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center px-4 md:px-0">
      <div className="text-center mb-4 md:mb-0">
        <p className="text-5xl font-bold text-gradient">3,000+</p>
        <p className="text-2xl text-slate-600">Learners</p>
      </div>
      <div className="text-center hidden lg:block">
        <img src={ImageSrc} alt="Image 2" className="w-20 mx-auto mb-2" />
      </div>
      <div className="text-center">
        <p className="text-5xl font-bold text-gradient">100+</p>
        <p className="text-2xl text-slate-600">Courses</p>
      </div>
      <div className="text-center hidden lg:block">
        <img src={ImageSrc} alt="Image 4" className="w-20 mx-auto mb-2" />
      </div>
      <div className="text-center">
        <p className="text-5xl font-bold text-gradient">25+</p>
        <p className="text-2xl text-slate-600">Years of Service</p>
      </div>
      <div className="text-center hidden lg:block">
        <img src={ImageSrc} alt="Image 6" className="w-20 mx-auto mb-2" />
      </div>
      <div className="text-center">
        <p className="text-5xl font-bold text-gradient">150+</p>
        <p className="text-2xl text-slate-600">Countries Connected</p>
      </div>
    </div>
  );
};

export default Count;
