import { Col, Container, Row, Stack } from "react-bootstrap/";
import test_image from "../../../assets/side_image.jpg";
import AboutFooter from "../../../Components/AboutFooter/AboutFooter";
import Footer from "../../../Components/footer/Footer";
import LoginImage from "../Login/Components/LoginImage";
import LoginTitle from "../Login/Components/Title";
import SignupForm from "./Components/SignupForm";
import './Signup.scss';

/**
 * This is the sign up page where an attendee user can create a new account.
 * After successful sign up, the user shall be re-directed to the login page to
 * login with their new credentials.
 * @date 3/29/2023 - 2:46:54 AM
 * @author h4z3m
 *
 * @param {*} props
 * @returns {JSX.Element}
 */
export const Signup = (props) => {
  return (
    <Container fluid style={{ height: "50px" }}>
      <Row>
        <Col className="contact-content g-0"
          md={12} lg={6} sm={12} style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center", padding: "25px 13% 250px 13%",
          }}>
          <Col className="g-0">
            <Row className="mb-4 g-0">
              <LoginTitle />
            </Row>
            <Row>
              <h1 data-testid="signup-header" id="signup-signup-h1" className="mb-4" >
                Create an account
              </h1>
            </Row>
            <Row className="g-0">
              <SignupForm data_testid="signup-form" name="signup-form-div" />
            </Row>
          </Col>
        </Col>
        <Col md={0} lg={6} sm={0} className="g-0 d-none d-lg-block" >
          <LoginImage data_testid="signup-image"
            img_url={test_image}
            img_caption="Winston Baker"
            img_credit="Confluence Summit"
            img_location="San Francisco, CA"
          />
        </Col>
      </Row>
      <Row className="d-none d-lg-block d-md-block">
        <AboutFooter />
      </Row>
      <Row>
        <Footer data_testid="login-footer" />
      </Row>
    </Container>
  );
};

export default Signup;
