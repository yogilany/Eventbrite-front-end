import { Container, Row, Col, Stack } from "react-bootstrap/";
import test_image from "../../../assets/side_image.jpg";
import LoginImage from "../Login/Components/LoginImage";
import SignupForm from "./Components/SignupForm";
import LoginTitle from "../Login/Components/Title";
import Footer from "../../../components/footer/Footer";
import AboutFooter from "../../../components/AboutFooter/AboutFooter";
import './Signup.scss'


export const Signup = (props) => {
  return (
    <Container fluid style={{ height: "50px" }}>
      <Row>
        <Col md={6} style={{ padding: "100px 200px 200px 200px" }}>
          <div style={{ maxWidth: "85%" }}>
            <Stack dir="vertical" gap={4}>
              <LoginTitle />
              <h1 data-testid="signup-header" id="signup-signup-h1" className="mb-4" >
                Create an account
              </h1>
            </Stack>
            <SignupForm data_testid="signup-form" name="signup-form-div" />
          </div>
        </Col>
        <Col md={6} className="g-0">
          <LoginImage data_testid="signup-image"
            img_url={test_image}
            img_caption="Winston Baker"
            img_credit="Confluence Summit"
            img_location="San Francisco, CA"
          />
        </Col>
      </Row>
      <Row>
        <AboutFooter />
      </Row>
      <Row>
        <Footer data_testid="login-footer" />
      </Row>
    </Container>
  );
};

export default Signup;
