import { Container, Row, Col, Stack } from "react-bootstrap/";
import test_image from "../../../assets/side_image.jpg";
import LoginImage from "../Login/Components/LoginImage";
import SignupForm from "./Components/SignupForm";
import LoginTitle from "../Login/Components/Title";
import SignupMethods from "./Components/SignupMethods";
import Footer from "../../../components/footer/Footer";
import FooterLink from "../../../components/footerLink/FooterLink";
import { Chip } from "@mui/material";
import { HorizontalChip } from "../Login/Components/HorizontalChip";

export const Signup = (props) => {

  const dividerStyle = {
    outerHeight: "30rem",
    display: "inline-block",
  };
  const ImageStyle = {
    backgroundImage: `url(${test_image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0",
    width: "100%",
    height: "100%",
  };
  const HeaderStyle = {
    color: "#1e0a3c",
    fontSize: "3.5rem",
    fontWeight: "700",
    width: "50%",
    minWidth: "300px",
  };
  return (
    <Container fluid style={{ height: "50px" }}>
      <Row>
        <LoginTitle></LoginTitle>
        <Col md={6} style={{ padding: "100px 200px 200px 200px" }}>
          <h1 id="signup-signup-h1" className="mb-4" style={HeaderStyle}>
            Create an account
          </h1>
          <SignupForm name="signup-form-div" />
          <HorizontalChip />
          <SignupMethods name="signup-methods-div" />
        </Col>
        <Col md={6}>
          <LoginImage
            img_url={test_image}
            img_caption="Ragel gamed"
            img_credit="Msh ana"
            img_location="New York, NY"
          />
        </Col>
      </Row>
      <Row>
        <FooterLink></FooterLink>
        <Footer />
      </Row>
    </Container>
  );
};

export default Signup;
