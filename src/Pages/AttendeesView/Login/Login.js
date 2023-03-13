import Button from "react-bootstrap/Button";
import LoginForm from "./Components/LoginForm";
import "./Login.css";
import { ButtonGroup, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as icons from "react-icons/fc";
import LoginMethods from "./Components/LoginMethods";
import test_image from "../../../assets/side_image.jpg";
import { Header } from "../../../components/header/Header";
import { LoginTitle as LoginTitle } from "./Components/Title";
import * as CgIcons from "react-icons/cg";
import LoginImage from "./Components/LoginImage";
import Footer from "../../../components/footer/Footer";
import { HorizontalChip } from "./Components/HorizontalChip";

/**
 *
 * @param {name: Name of this element after creation} props
 * @returns Login page
 */
export const Login = (props) => {
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

  return (
    <Container fluid style={{ height: "50px" }}>
      <Row>
        <Col md={6} style={{ padding: "100px 200px 200px 200px" }}>
          <h1
            id="login-login-h1"
            className="mb-4"
            style={{ minWidth: "200px" }}
          >
            Log in
          </h1>
          <LoginForm name="login-form-div" />
          <HorizontalChip />
          <LoginMethods name="login-methods-div" />
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
        <Footer />
      </Row>
    </Container>
  );
};

export default Login;
