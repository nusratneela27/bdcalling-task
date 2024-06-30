import Container from "../Container/Container";
import HeadName from "../HeadName/HeadName";
import Routes from "./Routes";
import NavButtons from "./NavButtons";

const Navbar = () => {
  return (
    <Container>
      <div className="flex items-center justify-between  h-16">
        <HeadName></HeadName>
        {/* <div> */}
        <Routes></Routes>
        <NavButtons></NavButtons>
        {/* </div> */}
      </div>
    </Container>
  );
};

export default Navbar;
