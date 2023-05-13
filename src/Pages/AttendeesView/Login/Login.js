import { useEffect, useRef, useState } from "react";
import { Container, Col, Row, Stack, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import imageLogin from "../../../assets/adelLogin.png";
import AboutFooter from "../../../Components/AboutFooter/AboutFooter";
import Footer from "../../../Components/footer/Footer";
import {
  authGoogleUser,
  authUser,
  checkEmailExists,
  forgotPassword,
  registerGoogleUser,
  selectLoggedIn,
} from "../../../features/authSlice";
import { HorizontalChip } from "./Components/HorizontalChip";
import LoginForm from "./Components/LoginForm";
import LoginImage from "./Components/LoginImage";
import LoginMethods from "./Components/LoginMethods";
import { LoginTitle } from "./Components/Title";
import "./Login.scss";
import { unwrapResult } from "@reduxjs/toolkit";
import FormMessage from "../../../Components/FormMessage/FormMessage";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import LoginForgotPasswordModal from "./Components/LoginForgotPasswordModal";
import VerificationEmailModal from "src/Components/VerificationEmailModal.js/VerificationEmailModal";
/**
 *
 * @param {name: Name of this element after creation} props
 * @returns Login page
 */
const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

/**
 * This is the login page for attendees where they can log in using
 * their email & passwords.
 * This page is redirected to by signup after a successful sign up
 * @date 3/29/2023 - 2:46:54 AM
 * @author h4z3m
 *
 * @param {*} props
 * @returns {JSX.Element}
 */
export const Login = (props) => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [users, setUsers] = useState([]);
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [emailExist, setEmailExist] = useState(true);
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);
  const [forgotPasswordModalShow, setForgotPasswordModalShow] = useState(false);
  const [verificationEmailModalShow, setVerificationEmailModalShow] =
    useState(false);
  const [SocialProfile, setSocialProfile] = useState(null);
  const isLoggedIn = useSelector(selectLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const controls = useAnimation();

  const forgotPasswordHandler = () => {
    try {
      dispatch(forgotPassword(emailInput))
        .unwrap(unwrapResult)
        .then((result) => {
          console.log("success", result);
        })
        .catch((err) => {
          console.log("error", err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    try {
      const data = {
        username: e.email,
        password: e.password,
      };

      // Save email for forget password modal
      setEmailInput(e.email);

      console.log(data);

      dispatch(authUser(data))
        .unwrap(unwrapResult)
        .then((result) => {
          setSuccess(true);
        })
        .catch((err) => {
          setSuccess(false);
          setPasswordIncorrect(emailExist === true);
          setErrMsg(err);
          setTimeout(() => {
            controls.start("start");
          }, 500);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const handleSocialSubmit = (e) => {
    if (SocialProfile) {
      dispatch(checkEmailExists(SocialProfile.email))
        .unwrap()
        .then((result) => {
          dispatch(
            authGoogleUser({
              email: SocialProfile.email,
            })
          )
            .unwrap()
            .then((result) => {
              setSuccess(true);
            })
            .catch((err) => {
              setSuccess(false);
              setPasswordIncorrect(emailExist === true);
              setErrMsg(err);
              setTimeout(() => {
                controls.start("start");
              }, 500);
            });
        })
        .catch((err) => {
          //Email does not exist, create account for user
          dispatch(
            registerGoogleUser({
              email: SocialProfile.email,
              password: crypto.getRandomValues(new Uint8Array(64)).toString(),
              firstname: SocialProfile.given_name,
              lastname: SocialProfile.family_name ?? "",
              picture: SocialProfile.picture,
            })
          )
            .unwrap()
            .then(() => {
              setVerificationEmailModalShow(true);
            })
            .catch((err) => {
              setSuccess(false);
              setPasswordIncorrect(emailExist === true);
              setErrMsg(err);
              setTimeout(() => {
                controls.start("start");
              }, 500);
              return;
            });
        });
    }
  };

  useEffect(() => {
    if (success) {
      navigate("/", { replace: true });
    }
  }, [success]);

  useEffect(() => {
    const isValid = user.match(isValidEmail);

    if (!isValid) setEmailExist(false);

    if (user.length > 6 && isValidEmail) {
      dispatch(checkEmailExists(user))
        .unwrap(unwrapResult)
        .then((result) => {
          setEmailExist(true);
          setPasswordIncorrect(false);
          setTimeout(() => {
            controls.start("start");
          }, 500);
        })
        .catch(() => {
          //Server error
          setSuccess(false);
          setEmailExist(false);
          setPasswordIncorrect(false);
        });
    }
  }, [user]);

  useEffect(() => {
    handleSocialSubmit();
    return () => {};
  }, [SocialProfile]);

  if (isLoggedIn) return <Navigate to="/" />;

  return (
    <Container className={props.name} fluid style={{ height: "50px" }}>
      <LoginForgotPasswordModal
        show={forgotPasswordModalShow}
        onHide={() => setForgotPasswordModalShow(false)}
        email={emailInput}
      />
      <VerificationEmailModal
        show={verificationEmailModalShow}
        onHide={() => setVerificationEmailModalShow(false)}
        email={SocialProfile?.email}
      />
      <Row>
        <Col
          className="contact-content"
          md={12}
          lg={6}
          sm={12}
          style={{
            display: "block",
            justifyContent: "center",
            alignContent: "center",
          }}
          id="login-column-left"
          data-testid="login-column-left"
        >
          <Col>
            <Row>
              <Stack dir="vertical" gap={4} className="">
                <LoginTitle className="login-title" />
                <h1
                  data-testid="login-header"
                  id="login-header"
                  className="mb-5"
                  style={{ minWidth: "200px" }}
                >
                  Log in
                </h1>
              </Stack>
            </Row>
            <Row>
              {!emailExist && user.length > 10 && !passwordIncorrect ? (
                <motion.div
                  variants={{
                    start: () => ({
                      x: [-30, 30, -30, 30, 0],
                      transition: {
                        duration: 0.5,
                      },
                    }),
                  }}
                  animate={controls}
                  initial={{
                    x: "0px",
                  }}
                >
                  <FormMessage>
                    <p>
                      There is no account associated with the email.{" "}
                      <Link to="/signup">Create account.</Link>{" "}
                    </p>
                  </FormMessage>
                </motion.div>
              ) : null}
            </Row>
            <Row>
              {passwordIncorrect && emailExist ? (
                <motion.div
                  variants={{
                    start: () => ({
                      x: [-30, 30, -30, 30, 0],
                      transition: {
                        duration: 0.5,
                      },
                    }),
                  }}
                  animate={controls}
                  initial={{
                    x: "0px",
                  }}
                >
                  <FormMessage>
                    <div></div>
                    <p>{"Password is incorrect."}</p>
                  </FormMessage>
                </motion.div>
              ) : null}
            </Row>
            <Row className="g-0">
              <LoginForm
                style={{
                  minWidth: "100%",
                  width: "350px",
                }}
                setUserHandler={setUser}
                submitAction={handleSubmit}
                data_testid="login-form"
                name="login-form-div"
                passwordIncorrect={passwordIncorrect}
              />
            </Row>
            {passwordIncorrect ? (
              <Row className="g-0">
                <Button
                  style={{ textDecoration: "none" }}
                  onClick={() => {
                    setForgotPasswordModalShow(true);
                    forgotPasswordHandler();
                    return;
                  }}
                  className={`d-flex w-auto p-0 `}
                  variant="link"
                  data-testid="login-forgot-password"
                >
                  Forgot your password?
                </Button>
              </Row>
            ) : null}
            <Row className="g-0">
              <HorizontalChip
                id="login-horizontalchip"
                data_testid="horizontal-chip"
              />
            </Row>
            <Row className="g-0">
              <LoginMethods
                data_testid="login-methods"
                name="login-methods-div"
                setSocialProfile={setSocialProfile}
              />
            </Row>
          </Col>
        </Col>
        <Col md={0} lg={6} sm={0} className="g-0 d-none d-lg-block">
          <LoginImage
            id="login-image"
            data_testid="login-image"
            img_url={imageLogin}
            img_caption="Winston Baker"
            img_credit="Confluence Summit"
            img_location="San Francisco, CA"
          />
        </Col>
      </Row>
      <Row className="d-none d-lg-block d-md-block">
        <AboutFooter id="login-aboutfooter" />
      </Row>
      <Row>
        <Footer id="login-footer" data_testid="login-footer" />
      </Row>
    </Container>
  );
};

export default Login;
