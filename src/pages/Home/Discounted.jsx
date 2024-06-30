import React from "react";
import Container from "../../components/Shared/Container/Container";
import DiscountedCard from "../../components/Card/DiscountedCard";

const PopularCourses = () => {
  return (
    <Container>
      <h1 className="text-3xl font-medium mt-20 mx-16">Discounted trainings</h1>
      <DiscountedCard></DiscountedCard>
    </Container>
  );
};

export default PopularCourses;
