import React from "react";
import Container from "../../components/Shared/Container/Container";
import CourseCard from "../../components/Card/CourseCard";

const PopularCourses = () => {
  return (
    <Container>
      <h1 className="text-3xl font-medium mt-36 mx-16">Most Popular Courses</h1>
      <CourseCard></CourseCard>
    </Container>
  );
};

export default PopularCourses;
