import { Input } from "antd";
import HeadName from "../../components/Shared/HeadName/HeadName";
import Container from "../../components/Shared/Container/Container";

const { Search } = Input;

const Footer = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 px-4 md:px-0">
        <div className="space-y-3">
          <HeadName />
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Sagittis facilisi nunc vitae
            morbi odio.
          </p>
        </div>
        <div className="space-y-3">
          <h1 className="font-bold text-lg md:text-xl">About</h1>
          <p className="text-sm md:text-base">FAQ</p>
          <p className="text-sm md:text-base">Company</p>
          <p className="text-sm md:text-base">Quality</p>
        </div>
        <div className="space-y-3">
          <h1 className="font-bold text-lg md:text-xl">Contact</h1>
          <p className="text-sm md:text-base">Enroll</p>
          <p className="text-sm md:text-base">Phone No</p>
          <p className="text-sm md:text-base">Website</p>
        </div>
        <div className="space-y-3">
          <p className="text-sm md:text-base">Subscribe For Updates</p>
          <Search
            placeholder="Enter your search text"
            allowClear
            enterButton="Search"
            size="large"
            className="mb-4 md:mb-0"
          />
          <p className="text-sm md:text-base mb-8 md:mb-0">
            By subscribing, you will be able to hear the latest news and
            technology updates.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
