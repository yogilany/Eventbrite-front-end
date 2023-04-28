import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import {
  Form,
  InputGroup,
  Col,
  Container,
  Row,
  FloatingLabel,
  Stack
} from "react-bootstrap";
import * as TiIcons from "react-icons/ti";
import HorizontalChip from "../../Login/Components/HorizontalChip";
import SignupMethods from "./SignupMethods";
import {
  checkEmailExists,
  registerUser,
} from "../../../../features/authSlice";
import { useNavigate } from "react-router";
import SignupFormCSS from "./SignupForm.module.css";
import "../Signup.scss";
import "./SignupMethods";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import TextInputStyled from "../../../../Components/TextInput/TextInput";
import ButtonOrangeStyled from "../../../../Components/Buttons/OrangeButton";
import { yupResolver } from "@hookform/resolvers/yup";
import SignupVerifyModal from "./SignupVerifyModal";
import { unwrapResult } from "@reduxjs/toolkit";
import { motion, useAnimation } from "framer-motion";
import * as BiIcons from 'react-icons/bi'
import LinearProgressWithLabel from "../../../../Components/LinearProgressWithLabel/LinearProgressWithLabel";
import { SignupSchema, getPasswordState, isValidEmail } from "./Signup-utils";
import FormMessage from "../../../../Components/FormMessage/FormMessage";

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
  const [emailExists, setEmailExists] = useState(false);
  const [submitPosition, setSubmitPosition] = useState("");
  const [oldSubmitPosition, setOldSubmitPosition] = useState("");
  const rowRef = useRef()
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: yupResolver(SignupSchema),
  });

  const watchPassword = watch("password");
  const watchEmail = watch("email");

  const onSubmit = (values) => {
    if (!showSignUpInfo) {
      setShowSignUpInfo(true);
      return;
    }
    setPrivacyPolicyModalShow(true);
  };

  const registerUserHandler = () => {
    const data = {
      email: getValues("email"),
      password: getValues("password"),
      firstname: getValues("firstName"),
      lastname: getValues("lastName"),
    };
    dispatch(registerUser(data))
      .unwrap()
      .then(() => {
        navigate("/login");
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
  const onError = (error) => {
    console.log("ERROR:::", error);
    if (emailExists) {
      controls.start('start');
      return
    }
    if (!emailExists && getValues("email").match(isValidEmail) && !showSignUpInfo) {
      setShowSignUpInfo(true);
      clearErrors();
      setFocus("confirmEmail");
      return;
    }
  };

  useEffect(() => {
    const isValid = getValues('email').match(isValidEmail);
    if (!isValid)
      setEmailExists(false)
    if (getValues('email').length > 0 && isValid) {
      dispatch(checkEmailExists(getValues('email')))
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
          setPrivacyPolicyModalShow(false)
        }}
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
                      }
                    })
                  }}
                  animate={controls}
                  initial={{
                    x: "0px"
                  }}
                >
                  <FormMessage>
                    <BiIcons.BiInfoCircle size={24} style={{
                      transform: "rotate(180deg) scaleX(-1)", marginRight: "5px"
                    }} />
                    <p>{"There is an account associated with the email. "} <Link to="/login">Log in</Link></p>

                  </FormMessage>
                </motion.div>
              ) : null}
              <InputGroup className="p-0">
                <Form.Group style={{ width: "100%" }}>
                  <FloatingLabel label="Email address">
                    <TextInputStyled
                      disabled={showSignUpInfo}
                      type="email"
                      data-testid="email-input"
                      id="email-input"
                      {...register("email", { required: "Field required" })}
                    />
                  </FloatingLabel>
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
                    setValue('password', null)
                    setFocus('email')
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
                <FloatingLabel label="Confirm Email">
                  <TextInputStyled
                    type="email"
                    data-testid="emailconfirm-input"
                    id="emailConfirm"
                    {...register("emailConfirm", { required: "Required" })}
                    isInvalid={errors?.emailConfirm}
                  />
                </FloatingLabel>
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
                  <FloatingLabel
                    className={SignupFormCSS["floating-label"]}
                    label="First name">
                    <TextInputStyled
                      data-testid="firstname-input"
                      id="firstName-input"
                      type="text"
                      isInvalid={errors?.firstName}
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                    />
                  </FloatingLabel>
                  <Form.Text className="text-danger"
                    style={{ visibility: (`${errors.firstName}` ? "visible" : "hidden") }}>
                    {errors.firstName?.message}
                  </Form.Text>
                </Col>
                <Col>
                  <FloatingLabel
                    className={SignupFormCSS["floating-label"]}
                    label="Last name">
                    <TextInputStyled
                      data-testid="lastname-input"
                      type="text"
                      id="lastName-input"
                      name="lastName-input"
                      isInvalid={errors?.lastName}
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                    />
                  </FloatingLabel>
                  <Form.Text className="text-danger"
                    style={{ visibility: (`${errors.lastName}` ? "visible" : "hidden") }}>
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
                <FloatingLabel label="Password">
                  <TextInputStyled
                    type="password"
                    data-testid="password-input"
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
                </FloatingLabel>
              </Form.Group>
              <LinearProgressWithLabel defaultLabel="Your password must be at least 8 characters"
                defaultColor="#1a90ff" progressFunction={getPasswordState} value={watchPassword} />
            </Row>
            <Row
              ref={rowRef}
              id={rowRef}
              onMouseLeave={
                () => {
                  controls.start({ x: 0, transition: { duration: 0.3 } })
                  return;
                }
              }
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
                  <ButtonOrangeStyled
                    style={{ minWidth: "200%" }}
                    data-testid="submit-button" id="submit-button" as="button"
                    className="mt-4 mb-4" type="submit" variant="flat btn-flat">
                    {showSignUpInfo ? "Create account" : "Continue"}
                  </ButtonOrangeStyled>
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
              <ButtonOrangeStyled
                style={{ minWidth: "100%" }}
                data-testid="submit-button" id="submit-button" as="button"
                disabled={emailExists}
                className="mt-4 mb-4" type="submit" variant="flat btn-flat">
                {showSignUpInfo ? "Create account" : "Continue"}
              </ButtonOrangeStyled>
            </Row>
            <Row>
              {showSignUpInfo ? null : (
                <>
                  <HorizontalChip data-testid="HorizontalChip" id="HorizontalChip" />
                  <SignupMethods />
                </>
              )}


            </Row>
            <Row>
              <Link data-testid="login-link" id="login-link" to={"/login"} className={SignupFormCSS.a_link}>
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
