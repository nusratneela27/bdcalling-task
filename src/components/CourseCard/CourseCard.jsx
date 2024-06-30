import { Avatar, Card } from "antd";
import c1 from "../../assets/courses/c1.png";

const CourseCard = () => {
  return (
    <Card
      style={{
        width: 300,
      }}
    >
      <img src={c1} alt="" />
      <div className="flex justify-between">
        <button>Web Design</button>
        <p className="text-4xl font-medium">$150</p>
      </div>
      <p>Launch career as a web desi- gner and learning more.</p>
      <div>
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        <div>
          <p>5.3</p>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
