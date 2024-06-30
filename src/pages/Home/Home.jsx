import Banner from "./Banner";
import PopularCourses from "./PopularCourses";
import Training from "./Training";
import Discounted from "./Discounted";
import Achievement from "./Achievement";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Training></Training>
      <PopularCourses></PopularCourses>
      <Discounted></Discounted>
      <Achievement></Achievement>
    </div>
  );
};

export default Home;
