import { Button } from "antd";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";

const FindCourse = () => {
  return (
    <div className="flex justify-center pb-40 min-h-52">
      <div className="absolute z-10 top-[580px]">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="border md:border-none px-6 py-2 flex justify-between items-center gap-3">
              <MdOutlineLibraryBooks />
              Course
              <MdOutlineKeyboardArrowDown />
            </div>
            <div className="border md:border-none px-6 py-2 flex justify-between items-center gap-3">
              <MdOutlineLibraryBooks />
              Education
              <MdOutlineKeyboardArrowDown />
            </div>
            <div className="border md:border-none px-6 py-2 flex justify-between items-center gap-3">
              <MdOutlineLibraryBooks />
              Education time
              <MdOutlineKeyboardArrowDown />
            </div>
            <Button
              type="primary"
              className="bg-gray-900 text-white px-5 md:px-7 py-3 md:py-4 lg:py-6 shadow-2xl"
            >
              Start training
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindCourse;
