import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import * as FcIcons from "react-icons/fc";
import * as TiIcons from "react-icons/ti";
import "../Login.scss";
import LoginMethodsCSS from "./LoginMethods.module.scss";
import { WhiteButton } from "../../../../Components/Buttons/WhiteButton";
import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

/**
 * @description Login button methods for signing in with email, Google, Apple, Facebook
 * @date 5/8/2023 - 11:41:40 AM
 * @author h4z3m
 *
 * @param  {name: Name of this element after creation} props
 * @returns {*}
 */
export const LoginMethods = (props) => {
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
    onError: (error) => {
      setGoogleUser(null);
      console.log("Login Failed:", error);
    },
  });

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
          onClick={() => login()}
          
        >
          <FcIcons.FcGoogle size="1.75em" className="mr-2"/>
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
              <TiIcons.TiSocialFacebook
                role="button"
                color="white"
                size="30px"
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
