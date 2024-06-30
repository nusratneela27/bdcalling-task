import { Avatar, Button, Card } from "antd";
import React from "react";
import { GoPeople } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import c1 from "../../assets/courses/c1.png";
import c2 from "../../assets/courses/c2.png";
import c3 from "../../assets/courses/c3.png";
import c4 from "../../assets/courses/c4.png";

const courses = [
  {
    image: c1,
    title: "Web Design",
    price: 150,
    description: "Launch career as a web designer and learning more.",
    avatar: c1,
    people: 5.3,
    views: 3.2,
    likes: 128,
  },
  {
    image: c2,
    title: "Graphic Design",
    price: 200,
    description: "Learn graphic design principles and tools.",
    avatar: c2,
    people: 4.8,
    views: 2.9,
    likes: 100,
  },
  {
    image: c3,
    title: "UI/UX Design",
    price: 180,
    description: "Master UI/UX design to create stunning interfaces.",
    avatar: c3,
    people: 6.0,
    views: 4.5,
    likes: 150,
  },
  {
    image: c4,
    title: "Front-End Dev",
    price: 250,
    description: "Become a proficient front-end developer.",
    avatar: c4,
    people: 5.6,
    views: 3.8,
    likes: 130,
  },
];

const CourseCard = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {courses.map((course, index) => (
        <Card
          key={index}
          style={{
            width: 400,
          }}
        >
          <div className="space-y-4">
            <div className="relative">
              <img
                src={course.image}
                alt=""
                className="rounded-lg w-[400px] h-[200px] object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg"></div>
            </div>
            <div className="flex justify-between">
              <p className="bg-gray-100 border border-gray-300 text-black text-base font-semibold rounded-xl shadow-lg px-3 py-2">
                {course.title}
              </p>
              <p className="text-2xl font-bold">${course.price}</p>
            </div>
            <p>{course.description}</p>
            <div className="flex justify-between items-center">
              <Avatar src={course.avatar} />
              <div className="flex items-center gap-2">
                <GoPeople />
                <p>{course.people}</p>
              </div>
              <div className="flex items-center gap-2">
                <IoEyeOutline />
                <p>{course.views}</p>
              </div>
              <div className="flex items-center gap-2">
                <BiLike />
                <p>{course.likes}</p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CourseCard;
