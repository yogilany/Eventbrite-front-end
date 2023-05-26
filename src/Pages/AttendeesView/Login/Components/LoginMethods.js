import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import * as FcIcons from "react-icons/fc";
import * as TiIcons from "react-icons/ti";
import { Link } from "react-router-dom";
import { WhiteButton } from "../../../../Components/Buttons/WhiteButton";
import "../Login.scss";
import LoginMethodsCSS from "./LoginMethods.module.scss";

 /**
 * @description Login button methods for signing in with email, Google, Apple, Facebook
 * @date 5/8/2023 - 11:41:40 AM
 * @author h4z3m
 * @returns {*}
 */
export const LoginMethods = (props) => {
  const loginGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => {
      if (codeResponse) {
        axios
          .get(
            `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${codeResponse.access_token}`,
            {
              headers: {
                Authorization: `Bearer ${codeResponse.access_token}`,
                Accept: "application/json",
              },
            }
          )
          .then((res) => {
            // console.log(res.data);
            props.setSocialProfile(res.data);
          })
          .catch((err) => console.log(err));
      }
    },
    onError: (error) => {
      props.setSocialProfile(null);
      console.log("Login Failed with Google ", error);
    },
  });

  const loginFacebook = (response) => {
    // console.log(response);
    if (response) {
      // console.log(response?.name?.split(" "));
      // const [firstname, lastname] = response?.name?.split(" ");
      const data = {
        email: response.email,
      };
      // console.log(response);
      // console.log(data);
      props.setSocialProfile(data);
    } else {
      props.setSocialProfile(null);
      console.log("Login Failed with Facebook");
    }
  };
  return (
    <Container
      className="m-0 "
      style={{ minWidth: "200px" }}
      data-testid={props.data_testid}
      name={props.name}
    >
      <Row>
        <WhiteButton as="button" variant="secondary">
          {" "}
          Email me a login link
        </WhiteButton>
      </Row>
      <Row>
        <WhiteButton
          id="login-with-google"
          data-testid="login-with-google"
          as="button"
          role="button"
          type="button"
          variant="secondary"
          onClick={() => loginGoogle()}
        >
          <FcIcons.FcGoogle size="1.75em" className="mr-2" />
          {" Sign in with Google"}
        </WhiteButton>
      </Row>
      <Row>
        <div style={{ margin: "1.5rem 0" }}>Other login methods</div>
      </Row>
      <Container style={{ margin: "1rem 0" }}>
        <Row xs={1} md={4} lg={4}>
          <Col>
            <div id="login-facbook" className="circular-icon">
              <FacebookLogin
                appId={`${process.env.REACT_APP_FACEBOOK_APP_ID}`}
                fields="name,email,picture"
                scope={"email"}
                callback={loginFacebook}
                render={(renderProps) => (
                  <TiIcons.TiSocialFacebook
                    onClick={renderProps.onClick}
                    data-testid="SignupMethods-FacebookButton"
                    id="SignupMethods-FacebookButton"
                    role="button"
                    color="white"
                    size="32px"
                  />
                )}
              />
            </div>
          </Col>
          <Col>
            <div
              id="login-apple"
              className="circular-icon"
              style={{ backgroundColor: "#4b4d63" }}
            >
              <TiIcons.TiVendorApple role="button" color="white" size="30px" />
            </div>
          </Col>
        </Row>
        <Row className="pt-5 pb-0">
          <Link to={"/signup"} className={LoginMethodsCSS.a_link}>
            Sign up
          </Link>
        </Row>
      </Container>
    </Container>
  );
};

export default LoginMethods;
