import React from "react";
import CourseCard from "../../components/Card/CourseCard";
import DiscountedCard from "../../components/Card/DiscountedCard";
import ImageSrc from "../../assets/courses/c5.png";
import FindCourse from "./FindCourse";

const Discover = () => {
  return (
    <div className="space-y-5 mt-10 px-4 md:px-0">
      <div className="relative w-full h-[544px] max-w-[1240px] mx-auto shadow-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            className="w-full h-full object-cover"
            src={ImageSrc}
            alt="Course Discover"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl lg:text-5xl font-semibold  text-white text-center">
          Discover the course you are looking for
        </h1>
      </div>
      <FindCourse></FindCourse>
      <CourseCard />
      <DiscountedCard />
      <CourseCard />
    </div>
  );
};

export default Discover;
