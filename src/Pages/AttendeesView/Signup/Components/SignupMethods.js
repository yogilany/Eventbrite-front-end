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

/**
 *
 * @param {name: Name of this element after creation} props
 * @returns Login button methods for signing in with email, Google, Apple, Facebook
 */
export const SignupMethods = (props) => {
  const signupGoogle = useGoogleLogin({
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
          .then((response) => {
            const data = {
              email: response.data.email,
              password: crypto.getRandomValues(new Uint8Array(64)).toString(),
              firstname: response.data.given_name,
              lastname: response.data.family_name ?? "",
              picture: response.data.picture,
            };
            console.log(response.data);
            console.log(data);
            props.setSocialProfile(data);
          })
          .catch((err) => console.log(err));
      }
    },
    onError: (error) => console.log("Login with Google failed:", error),
  });

  const signupFacebook = (response) => {
    if (response) {
      console.log(response?.name?.split(" "));
      const [firstname, lastname] = response?.name?.split(" ");
      const data = {
        email: response.email,
        password: crypto.getRandomValues(new Uint8Array(64)).toString(),
        firstname: firstname,
        lastname: lastname,
        picture: response.data?.picture?.data?.url,
      };
      console.log(response);
      console.log(data);
      props.setSocialProfile(data);
    }
  };

  return (
    <Container
      name={props.name}
      className="m-0 p-0"
      style={{ minWidth: "200px" }}
    >
      <WhiteButton
        onClick={() => signupGoogle()}
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
                fields="name,email,picture"
                scope={"email"}
                callback={signupFacebook}
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
        </Row>
      </Container>
    </Container>
  );
};

export default SignupMethods;
