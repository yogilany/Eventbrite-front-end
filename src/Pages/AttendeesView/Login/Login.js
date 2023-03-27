import Button from "react-bootstrap/Button";
import LoginForm from "./Components/LoginForm";
import "./Login.scss";
import { ButtonGroup, Image, Stack } from "react-bootstrap";
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
import Head from "../Organizer/Components/Head";
import FooterLink from "../../../components/footerLink/FooterLink";

/**
 *
 * @param {name: Name of this element after creation} props
 * @returns Login page
 */
export const Login = (props) => {


  return (
    <Container className="vh-100 d-flex flex-column" fluid style={{ height: "50px" }}>

      <Row>
        <Col md={6} style={{ padding: "100px 200px 200px 200px" }}>
          <div style={{ maxWidth: "85%" }}>

            <Stack dir="vertical" gap={4}>
              <LoginTitle />
              <h1
                data-testid="login-header"
                id="login-login-h1"
                className="mb-5"
                style={{ minWidth: "200px" }}
              >
                Log in
              </h1>
            </Stack>
            <LoginForm data_testid="login-form" name="login-form-div" />
            <HorizontalChip data_testid="horizontal-chip" />
            <LoginMethods data_testid="login-methods" name="login-methods-div" />
          </div>
        </Col>
        <Col md={6}>
          <LoginImage data_testid="login-image" 
            img_url={test_image}
            img_caption="Winston Baker"
            img_credit="Confluence Summit"
            img_location="San Francisco, CA"
          />
        </Col>
      </Row>

      <Row>
        <Footer data_testid="login-footer" />
      </Row>
    </Container >
  );
};

export default Login;
