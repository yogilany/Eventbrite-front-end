import { yupResolver } from "@hookform/resolvers/yup";
import { IconButton } from "@mui/material";
import { unwrapResult } from "@reduxjs/toolkit";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
  Col,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
  Row,
  Stack,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as BiIcons from "react-icons/bi";
import * as TiIcons from "react-icons/ti";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import OrangeButton from "../../../../Components/Buttons/OrangeButton";
import FormMessage from "../../../../Components/FormMessage/FormMessage";
import LinearProgressWithLabel from "../../../../Components/LinearProgressWithLabel/LinearProgressWithLabel";
import TextInputStyled from "../../../../Components/TextInput/TextInput";
import {
  authGoogleUser,
  checkEmailExists,
  registerGoogleUser,
  registerUser,
} from "../../../../features/authSlice";
import HorizontalChip from "../../Login/Components/HorizontalChip";
import "../Signup.scss";
import { SignupSchema, getPasswordState, isValidEmail } from "./Signup-utils";
import SignupFormCSS from "./SignupForm.module.scss";
import "./SignupMethods";
import SignupMethods from "./SignupMethods";
import SignupVerifyModal from "./SignupVerifyModal";
import VerificationEmailModal from "src/Components/VerificationEmailModal.js/VerificationEmailModal";
/**
 * The signup form which contains the information needed to create a new account.
 * This form validates all inputs before submission.
 * @date 3/29/2023 - 2:48:25 AM
 * @author h4z3m
 *
 * @param {*} props
 * @returns {*}
 */

export const SignupForm = (props) => {
  const [showSignUpInfo, setShowSignUpInfo] = useState(false);
  const [successful, setSuccess] = useState(false);
  const [privacyPolicyModalShow, setPrivacyPolicyModalShow] = useState(false);
  const [emailExists, setEmailExists] = useState(true);
  // const [submitPosition, setSubmitPosition] = useState("");
  // const [oldSubmitPosition, setOldSubmitPosition] = useState("");
  const [SocialProfile, setSocialProfile] = useState(null);
  const [verificationEmailModalShow, setVerificationEmailModalShow] =
    useState(false);

  const rowRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const controls = useAnimation();

  const controls = useAnimation();

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    clearErrors,
    setFocus,
    setError,
    reset,
    setValue,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(SignupSchema),
  });

  const watchPassword = watch("password");
  const watchEmail = watch("email");
  const watchEmail = watch("email");

  const onSubmit = (values) => {
    if (!showSignUpInfo) {
      setShowSignUpInfo(true);
      return;
    }
    setPrivacyPolicyModalShow(true);
  };

  const registerUserHandler = () => {
    if (SocialProfile) {
      // console.log("Social profile", SocialProfile);
      dispatch(checkEmailExists(SocialProfile.email))
        .unwrap(unwrapResult)
        .then(() => {
          //Email exists, auth user
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
              setTimeout(() => {
                controls.start("start");
              }, 500);
              return;
            });
        })
        .catch((err) => {
          //Email does not exist, create account for user
          dispatch(registerGoogleUser(SocialProfile))
            .unwrap()
            .then(() => {
              setVerificationEmailModalShow(true);
            })
            .catch((err) => {
              setSuccess(false);
              setTimeout(() => {
                controls.start("start");
              }, 500);
              return;
            });
        });
    } else {
      const data = {
        email: getValues("email"),
        password: getValues("password"),
        firstname: getValues("firstName"),
        lastname: getValues("lastName"),
      };

      dispatch(registerUser(data))
        .unwrap()
        .then(() => {
          setVerificationEmailModalShow(true);
          setSuccess(true);
          // window.location.reload();
        })
        .catch(() => {
          console.log("Error");
          setSuccess(false);
          setError("email");
          setFocus("email");
        });
    }
  };
  const onError = (error) => {
    console.log("ERROR:::", error);
    if (emailExists) {
      controls.start("start");
      return;
    }
    if (
      !emailExists &&
      getValues("email").match(isValidEmail) &&
      !showSignUpInfo
    ) {
      setShowSignUpInfo(true);
      clearErrors();
      setFocus("confirmEmail");
      return;
    }
  };

  useEffect(() => {
    const isValid = getValues("email").match(isValidEmail);
    if (!isValid) setEmailExists(false);
    if (getValues("email").length > 0 && isValid) {
      dispatch(checkEmailExists(getValues("email")))
        .unwrap(unwrapResult)
        .then((result) => {
          setEmailExists(result);
        })
        .catch(() => {
          //Server error
          setEmailExists(false);
        });
    }
  }, [watchEmail, dispatch, getValues]);

  useEffect(() => {
    if (SocialProfile) registerUserHandler();
  }, [SocialProfile]);

  return (
    <>
      <SignupVerifyModal
        show={privacyPolicyModalShow}
        onHide={() => setPrivacyPolicyModalShow(false)}
        onAccept={() => {
          //Register user
          registerUserHandler();
        }}
        onCancel={() => {
          setPrivacyPolicyModalShow(false);
        }}
      />
      <VerificationEmailModal
        show={verificationEmailModalShow}
        onHide={() => {
          setVerificationEmailModalShow(false);
          navigate("/login");
        }}
        email={SocialProfile?.email}
      />
      <Form
        data-testid={props.data_testid}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <Container>
          <Col className="g-0">
            <Row className="mb-2">
              {emailExists ? (
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
                    <BiIcons.BiInfoCircle
                      size={24}
                      style={{
                        transform: "rotate(180deg) scaleX(-1)",
                        marginRight: "5px",
                      }}
                    />
                    <p>
                      <strong>
                        {"There is an account associated with the email. "}{" "}
                      </strong>
                      <Link to="/login">Log in</Link>
                    </p>
                  </FormMessage>
                </motion.div>
              ) : null}
              <InputGroup className="p-0">
                <Form.Group className="p-0" style={{ width: "100%" }}>
                  <Form.Floating className={SignupFormCSS["form-floating"]}>
                    <TextInputStyled
                      isInvalid={errors.email}
                      disabled={showSignUpInfo}
                      type="email"
                      data-testid="email-input"
                      id="email-input"
                      id="email-input"
                      {...register("email", { required: "Field required" })}
                    />
                    <label htmlFor="email-input">Email Address</label>
                  </Form.Floating>
                  {errors.email && (
                    <Form.Text className="text-danger">
                      {errors.email.message}
                    </Form.Text>
                  )}
                </Form.Group>
                <IconButton
                  style={{
                    display: showSignUpInfo ? "inherit" : "none",
                    position: "absolute",
                    right: "1rem",
                    top: "0.3rem",
                    backgroundColor: "transparent",
                  }}
                  data-testid="changeemail-input"
                  onClick={() => {
                    setShowSignUpInfo(false);
                    reset();
                    setValue("password", null);
                    setFocus("email");
                  }}
                  type="reset"
                >
                  <TiIcons.TiPencil />
                </IconButton>
              </InputGroup>
            </Row>

            <Row
              className="mb-2"
              style={{
                display: showSignUpInfo ? "block" : "none",
              }}
            >
              <Form.Group className="p-0">
                <Form.Floating className={SignupFormCSS["form-floating"]}>
                  <TextInputStyled
                    type="email"
                    placeholder="name@example.com"
                    data-testid="emailconfirm-input"
                    id="emailConfirm"
                    {...register("emailConfirm", { required: "Required" })}
                    isInvalid={errors?.emailConfirm}
                  />
                  <label htmlFor="emailconfirm-input">Confirm Email</label>
                </Form.Floating>
                {errors.emailConfirm && (
                  <Form.Text className="text-danger">
                    {errors.emailConfirm.message}
                  </Form.Text>
                )}
              </Form.Group>
            </Row>

            <Row
              className="mb-2"
              style={{
                display: showSignUpInfo ? "block" : "none",
              }}
            >
              <Stack direction="horizontal" gap={3} className="p-0">
                <Col>
                  <Form.Floating className={SignupFormCSS["form-floating"]}>
                    <TextInputStyled
                      type="text"
                      placeholder="John"
                      data-testid="firstname-input"
                      id="firstName-input"
                      isInvalid={errors?.firstName}
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                    />
                    <label htmlFor="firstname-input">First name</label>
                  </Form.Floating>
                  <Form.Text
                    className="text-danger"
                    style={{
                      visibility: `${errors.firstName}` ? "visible" : "hidden",
                    }}
                  >
                    {errors.firstName?.message}
                  </Form.Text>
                </Col>
                <Col>
                  <Form.Floating className={SignupFormCSS["form-floating"]}>
                    <TextInputStyled
                      data-testid="lastname-input"
                      type="text"
                      placeholder="Doe"
                      id="lastName-input"
                      name="lastName-input"
                      isInvalid={errors?.lastName}
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                    />
                    <label htmlFor="lastName-input">Last name</label>
                  </Form.Floating>
                  <Form.Text
                    className="text-danger"
                    style={{
                      visibility: `${errors.lastName}` ? "visible" : "hidden",
                    }}
                  >
                    {errors.lastName?.message}
                  </Form.Text>
                </Col>
              </Stack>
            </Row>
            <Row
              className="mb-2"
              style={{
                display: showSignUpInfo ? "block" : "none"
              }}>
              <Form.Group className="mb-3 p-0">
                <Form.Floating className={SignupFormCSS["form-floating"]}>
                  <TextInputStyled
                    type="password"
                    placeholder="Password"
                    data-testid="password-input"
                    id="password-input"
                    id="password-input"
                    name="password"
                    isInvalid={errors?.password}
                    {...register("password", { required: "Field required" })}
                  />
                  {errors.password && (
                    <Form.Text className="text-danger">
                      {errors.password.message}
                    </Form.Text>
                  )}
                  <label htmlFor="password-input">Password</label>
                </Form.Floating>
              </Form.Group>
              <LinearProgressWithLabel
                defaultLabel="Your password must be at least 8 characters"
                defaultColor="#1a90ff"
                progressFunction={getPasswordState}
                value={watchPassword}
              />
            </Row>
            <Row
              ref={rowRef}
              id={rowRef}
              onMouseLeave={() => {
                controls.start({ x: 0, transition: { duration: 0.3 } });
                return;
              }}
            >
              {/* <motion.div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gridTemplateRows: "1fr",
                  gridColumnGap: "0",
                  gridRowGap: "0"
                }}
                // animate={emailExists ?  () => { }:controls}

                initial={{ x: 0 }}
              >
                <div
                  onMouseEnter={() => {

                    console.log("going right")
                    setSubmitPosition("go-right")
                    controls.start({
                      x: [0, 200],
                      transition: {
                        duration: 0.3,
                      }
                    })
                  }}
                  onMouseOut={() => {
                    setSubmitPosition("go-right")
                  }}
                >
                  <OrangeButton
                    style={{ minWidth: "200%" }}
                    data-testid="submit-button" id="submit-button" as="button"
                    className="mt-4 mb-4" type="submit" variant="flat btn-flat">
                    {showSignUpInfo ? "Create account" : "Continue"}
                  </OrangeButton>
                </div>
                <div
                  onMouseEnter={() => {

                    console.log("going left")
                    setSubmitPosition("go-left")
                    controls.start({
                      x: [0, -200],
                      transition: {
                        duration: 0.3,
                      }
                    })
                  }}
                  onMouseOut={() => {
                    setSubmitPosition("go-left")
                  }}

                >
                </div>
              </motion.div> */}
              <OrangeButton
                disabled={emailExists || errors.email}
                data-testid="submit-button"
                id="submit-button"
                as="button"
                className="mt-4 mb-4"
                type="submit"
                variant="flat btn-flat"
                spinner
              >
                {showSignUpInfo ? "Create account" : "Continue"}
              </OrangeButton>
            </Row>
            <Row>
              {showSignUpInfo ? null : (
                <>
                  <HorizontalChip
                    data-testid="HorizontalChip"
                    id="HorizontalChip"
                  />
                  <SignupMethods setSocialProfile={setSocialProfile} />
                </>
              )}
            </Row>
            <Row>
              <Link
                data-testid="login-link"
                id="login-link"
                to={"/login"}
                className={SignupFormCSS.a_link}
              >
                Login
              </Link>
            </Row>
          </Col>
        </Container >
      </Form >
    </>
  );
};
export default SignupForm;
