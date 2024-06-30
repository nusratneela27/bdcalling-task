import { Button } from "antd";
import React from "react";

const FindCourse = () => {
  return (
    <div className="flex justify-center pb-40">
      <div className="absolute z-10 top-[600px]">
        <div className="bg-white shadow-lg rounded-lg w-11/12  p-8">
          <div>Course</div>
          <div>Education</div>
          <div> Education time </div>
          <Button
            type="primary"
            className="bg-gray-900 text-white px-5 md:px-7 py-3 md:py-4 lg:py-6 shadow-2xl"
          >
            Start training
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FindCourse;
