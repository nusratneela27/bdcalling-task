import Banner from "./Banner";
import PopularCourses from "./PopularCourses";
import Training from "./Training";
import Discounted from "./Discounted";
import Achievement from "./Achievement";
import Footer from "./Footer";
import LiveMeeting from "./LiveMeeting";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Training></Training>
      <PopularCourses></PopularCourses>
      <Discounted></Discounted>
      <Achievement></Achievement>
      <LiveMeeting></LiveMeeting>
      <Footer></Footer>
    </div>
  );
};

export default Home;
