import Button from "react-bootstrap/Button";
import "../Login.scss";
import { ButtonGroup, Col, Row } from "react-bootstrap";
import * as FcIcons from "react-icons/fc";
import * as TiIcons from "react-icons/ti";
import Container from "react-bootstrap/Container";
import { Link } from "@mui/material";
/**
 *
 * @param {name: Name of this element after creation} props
 * @returns Login button methods for signing in with email, Google, Apple, Facebook
 */
export const LoginMethods = (props) => {

  return (
    <Container className="m-0 p-0" style={{ minWidth: "200px" }} data-testid={props.data_testid}>

      <ButtonGroup vertical style={{ width: "100%" }}>
        <Button variant="secondary" >
          {" "}
          Email me a login link
        </Button>
        <Button variant="secondary" >
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
        <Row className="pt-5 pb-0" >
          <Link href="/signup" underline="always" style={{width:"auto"}}>
            {'Sign up'}
          </Link>
        </Row>
      </Container>

    </Container>
  );
};

export default LoginMethods;
