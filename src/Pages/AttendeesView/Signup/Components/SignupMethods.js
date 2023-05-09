import { ButtonGroup, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import * as FcIcons from "react-icons/fc";
import * as TiIcons from "react-icons/ti";
import "../Signup.scss";
import WhiteButton from "../../../../Components/Buttons/WhiteButton";
import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
const responseFacebook = (response) => {
  console.log(response);
};
/**
 *
 * @param {name: Name of this element after creation} props
 * @returns Login button methods for signing in with email, Google, Apple, Facebook
 */
export const SignupMethods = (props) => {
  const [GoogleUser, setGoogleUser] = useState(null);

  useEffect(() => {
    if (GoogleUser) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${GoogleUser.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${GoogleUser.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          props.setGoogleProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [GoogleUser]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setGoogleUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
  return (
    <Container
      name={props.name}
      className="m-0 p-0"
      style={{ minWidth: "200px" }}
    >
      <WhiteButton
        onClick={() => login()}
        style={{ margin: "0", width: "100%" }}
        variant="secondary"
      >
        {" "}
        <FcIcons.FcGoogle size="1.5em" />
        {" Sign in with Google"}
      </WhiteButton>
      <div style={{ margin: "1.5rem 0" }}>Other sign up methods</div>
      <Container style={{ margin: "1rem 0" }}>
        <Row xs={1} md={4} lg={4}>
          <Col>
            <div id="circular-icon">
              <FacebookLogin
                appId={`${process.env.REACT_APP_FACEBOOK_APP_ID}`}
                autoLoad
                fields="name,email,picture"
                scope={"email"}
                callback={responseFacebook}
                render={(renderProps) => (
                  <TiIcons.TiSocialFacebook
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
        </Row>
      </Container>
    </Container>
  );
};

export default SignupMethods;
