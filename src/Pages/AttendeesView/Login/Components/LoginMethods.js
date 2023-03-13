import Button from "react-bootstrap/Button";
import "../Login.css";
import { ButtonGroup, Col, Row } from "react-bootstrap";
import * as FcIcons from "react-icons/fc";
import * as TiIcons from "react-icons/ti";
import Container from "react-bootstrap/Container";

/**
 *
 * @param {name: Name of this element after creation} props
 * @returns Login button methods for signing in with email, Google, Apple, Facebook
 */
export const LoginMethods = (props) => {
  const ButtonStyle = {
    backgroundColor: "white",
    color: "#39364f",
    justifyContent: "center",
    transition: "backgroundColor 100ms ease-in",
    borderRadius: "0.2vmin",
    border: "0.01rem solid #a9a8b3",
    margin: ".5rem 0",
    fontSize: "1rem",
    ":hover": "backgroundColor: #f05537",
  };

  return (
    <Container className="m-0 p-0" style={{ minWidth: "200px" }}>
      <ButtonGroup vertical style={{ width: "100%" }}>
        <Button variant="secondary" style={ButtonStyle}>
          {" "}
          Email me a login link
        </Button>
        <Button variant="secondary" style={ButtonStyle}>
          {" "}
          <FcIcons.FcGoogle size="1.5em" />
          {" Sign in with Google"}
        </Button>
      </ButtonGroup>
      <div style={{ margin: "1.5rem 0" }}>Other login methods</div>
      <Container style={{ margin: "1rem 0" }}>
        <Row xs={1} md={4} lg={4}>
          <Col>
            <TiIcons.TiSocialFacebook
              color="#1877f2"
              size="3em"
            ></TiIcons.TiSocialFacebook>
          </Col>
          <Col>
            <TiIcons.TiVendorApple size="3em"></TiIcons.TiVendorApple>
          </Col>
        </Row>
      </Container>
      <Button type="button" variant="outline-dark" size="sm">
        {" "}
        Sign up
      </Button>
    </Container>
  );
};

export default LoginMethods;
