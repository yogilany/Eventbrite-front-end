import { Link } from "react-router-dom";
import { ButtonGroup, Col, Row, Button, Container } from "react-bootstrap";
import * as FcIcons from "react-icons/fc";
import * as TiIcons from "react-icons/ti";
import "../Login.scss";
import LoginMethodsCSS from './LoginMethods.module.css'
import ButtonWhiteStyled from "../../../../components/Buttons/WhiteButton";
/**
 *
 * @param {name: Name of this element after creation} props
 * @returns Login button methods for signing in with email, Google, Apple, Facebook
 */
export const LoginMethods = (props) => {

  return (
    <Container className="m-0 " style={{ minWidth: "200px" }}
      data-testid={props.data_testid}
      name={props.name}>
      <Row>

        <ButtonWhiteStyled variant="secondary" >
          {" "}
          Email me a login link
        </ButtonWhiteStyled>
      </Row>
      <Row>

        <ButtonWhiteStyled variant="secondary" >
          {" "}
          <FcIcons.FcGoogle size="1.5em" />
          {" Sign in with Google"}
        </ButtonWhiteStyled>
      </Row>
      <Row>

        <div style={{ margin: "1.5rem 0" }}>Other login methods</div>
      </Row>
      <Container style={{ margin: "1rem 0" }}>
        <Row xs={1} md={4} lg={4}>
          <Col>
            <div id="circular-icon">
              <TiIcons.TiSocialFacebook color="white" size="30px" />
            </div>
          </Col>
          <Col>
            <div id="circular-icon" style={{ backgroundColor: "#4b4d63" }}>
              <TiIcons.TiVendorApple color="white" size="30px" />
            </div>
          </Col>
        </Row>
        <Row className="pt-5 pb-0" >

          <Link to={"/signup"} className={LoginMethodsCSS.a_link} >Sign up</Link>
        </Row>
      </Container>
    </Container>
  );
};

export default LoginMethods;
