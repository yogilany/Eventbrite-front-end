import { Box, IconButton, LinearProgress } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import {
  Form,
  InputGroup,
  Col,
  Container,
  Row,
  FloatingLabel,
  Stack,
  Modal,
} from "react-bootstrap";
import * as TiIcons from "react-icons/ti";
import zxcvbn from "zxcvbn";
import HorizontalChip from "../../Login/Components/horizontalChip";
import SignupMethods from "./signupMethods";
import {
  registerUser,
  selectCurrentUser,
} from "../../../../features/authSlice";
import { useNavigate } from "react-router";
import SignupFormCSS from "./SignupForm.module.css";
import "../Signup.scss";
import "./signupMethods";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import TextInputStyled from "../../../../Components/TextInput/TextInput";
import ButtonOrangeStyled from "../../../../Components/Buttons/OrangeButton";
import { yupResolver } from "@hookform/resolvers/yup";
import SignupVerifyModal from "./signupVerifyModal";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
  lastName: Yup.string()
    .required("Last name is required")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
  email: Yup.string().notRequired(),
  emailConfirm: Yup.string()
    .oneOf(
      [Yup.ref("email"), null],
      "Email address doesn't match. Please try again"
    )
    .required("Required"),
  password: Yup.string().required("Field is required").min(8, ""),
});
/**
 * Regex for verifying emails.
 * @date 3/29/2023 - 2:48:25 AM
 * @author h4z3m
 *
 * @type {{}}
 */
const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

/**
 * Runs a check on the password and returns its score,
 *  a hex color indicating the score,
 *  and a short description about the password strength
 * @date 3/29/2023 - 2:48:25 AM
 * @author h4z3m
 *
 * @param {*} password
 * @returns {{}}
 */

function getPasswordState(password) {
  const result = zxcvbn(password).score;
  switch (result) {
    case 0:
      return password.length < 8
        ? [0, "#e02e46", "Your password must be at least 8 characters"]
        : [1, "#e02e46", "Your password is weak"];
    case 1:
      return [1, "#e02e46", "Your password is weak"];
    case 2:
      return [2, "#f05537", "Your password is moderate"];
    case 3:
      return [3, "#16a85a", "Your password is strong"];
    case 4:
      return [4, "#16a85a", "Your password is very strong"];
    default:
      return "";
  }
}

/**
 * Create a linear progress bar with a label under it.
 * Must provide password in props
 * @date 3/29/2023 - 2:48:25 AM
 * @author h4z3m
 *
 * @param {*} props
 * @returns {JSX.Element}
 */
function LinearProgressWithLabel(props) {
  const [progressBar, setProgressBar] = useState({
    value: 0,
    colorHex: "#1a90ff",
    labelString: "Your password must be at least 8 characters",
  });
  useEffect(() => {
    if (!props?.password) return;
    const result = getPasswordState(props.password);
    setProgressBar((state) => ({
      ...state,
      ...progressBar,
      value: result[0],
      colorHex: result[1],
      labelString: result[2],
    }));
  }, [props.password]);
  return (
    <Box sx={{ alignItems: "center", padding: 0 }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          value={progressBar.value * 25}
          sx={{
            "& .MuiLinearProgress-bar1Determinate": {
              backgroundColor: progressBar.colorHex,
            },
          }}
        />
      </Box>
      <Box sx={{ minWidth: 35, fontSize: "0.8rem", pt: 2 }}>
        {progressBar.labelString}
      </Box>
    </Box>
  );
}
LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

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

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    clearErrors,
    setFocus,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: yupResolver(SignupSchema),
  });

  const watchPassword = watch("password");

  const onSubmit = (values) => {
    if (!showSignUpInfo) {
      setShowSignUpInfo(true);
      return;
    }
    setPrivacyPolicyModalShow(true);
  };

  const registerUserHandler = () => {
    const data = {
      firstname: getValues("firstName"),
      lastname: getValues("lastName"),
      email: getValues("email"),
      password: getValues("password"),
      is_verified: false,
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
  };
  const onError = (error) => {
    console.log("ERROR:::", error);
    if (getValues("email").match(isValidEmail) && !showSignUpInfo) {
      setShowSignUpInfo(true);
      clearErrors();
      setFocus("confirmEmail");
      return;
    }
  };
  useEffect(() => {
    // redirect user to login page if registration was successful
    // if (selectCurrentUser) navigate('/login')
  }, [dispatch]);
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
          //Show error message
        }}
      />
      <Form
        data-testid={props.data_testid}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <Container>
          <Col className="g-0">
            <Row className="mb-2">
              <InputGroup className="p-0">
                <Form.Group style={{ width: "100%" }}>
                  <FloatingLabel label="Email address">
                    <TextInputStyled
                      disabled={showSignUpInfo}
                      type="email"
                      data-testid="email-input"
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
                    label="First name"
                  >
                    <TextInputStyled
                      data-testid="firstname-input"
                      type="text"
                      id="firstName"
                      isInvalid={errors?.firstName}
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                    />
                  </FloatingLabel>
                  {errors.firstName && (
                    <Form.Text className="text-danger">
                      {errors.firstName.message}
                    </Form.Text>
                  )}
                </Col>
                <Col>
                  <FloatingLabel
                    className={SignupFormCSS["floating-label"]}
                    label="Last name"
                  >
                    <TextInputStyled
                      data-testid="lastname-input"
                      type="text"
                      id="lastName"
                      name="lastName"
                      isInvalid={errors?.lastName}
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                    />
                  </FloatingLabel>
                  {errors.lastName && (
                    <Form.Text className="text-danger">
                      {errors.lastName.message}
                    </Form.Text>
                  )}
                </Col>
              </Stack>
            </Row>
            <Row
              className="mb-2"
              style={{
                display: showSignUpInfo ? "block" : "none",
              }}
            >
              <Form.Group className="mb-3 p-0">
                <FloatingLabel label="Password">
                  <TextInputStyled
                    type="password"
                    data-testid="password-input"
                    id="password"
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
              <LinearProgressWithLabel value={0} password={watchPassword} />
            </Row>
            <Row>
              <ButtonOrangeStyled
                data-testid="submit-input"
                as="input"
                className="mt-4 mb-4"
                type="submit"
                value={showSignUpInfo ? "Create account" : "Continue"}
                variant="flat btn-flat"
              />
            </Row>
            <Row>
              {showSignUpInfo ? null : (
                <>
                  <HorizontalChip />
                  <SignupMethods />
                </>
              )}
            </Row>
            <Row>
              <Link to={"/login"} className={SignupFormCSS.a_link}>
                Login
              </Link>
            </Row>
          </Col>
        </Container>
      </Form>
    </>
  );
};
export default SignupForm;
