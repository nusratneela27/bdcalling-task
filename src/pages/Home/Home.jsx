import Banner from "./Banner";
import PopularCourses from "./PopularCourses";
import Training from "./Training";
import Discounted from "./Discounted";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Training></Training>
      <PopularCourses></PopularCourses>
      <Discounted></Discounted>
    </div>
  );
};

export default Home;
