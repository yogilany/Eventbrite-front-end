import { useEffect, useRef, useState } from "react";
import {
  Container,
  Col,
  Row,
  Stack,
  Button,
  Form,
  Spinner,
} from "react-bootstrap";
import AboutFooter from "../../../Components/AboutFooter/AboutFooter";
import Footer from "../../../Components/footer/Footer";
import LoginImage from "./Components/LoginImage";
import LoginMethodsCSS from "./Components/LoginMethods.module.scss";
import { LoginTitle } from "./Components/Title";
import "./Login.scss";
import imageLogin from "../../../assets/adelLogin.png";
import { unwrapResult } from "@reduxjs/toolkit";
import FormMessage from "../../../Components/FormMessage/FormMessage";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import TextInputStyled from "../../../Components/TextInput/TextInput";
import { LoginSchema } from "./Components/LoginForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import LinearProgressWithLabel from "../../../Components/LinearProgressWithLabel/LinearProgressWithLabel";
import { getPasswordState } from "../Signup/Components/Signup-utils";
import OrangeButton from "../../../Components/Buttons/OrangeButton";
import { changePassword, selectLoading } from "../../../features/authSlice";
import * as Yup from "yup";
import { useMemo } from "react";

const ResetPassword = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(
      Yup.object().shape({
        password: Yup.string().required("Password is required"),
      })
    ),
  });

  const secondsBeforeRedirect = 5;
  const watchPassword = watch("password");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const isLoading = useSelector(selectLoading);
  const token = searchParams.get("token");

  const onSubmit = (data) => {
    const _data = {
      token: token,
      new_password: data.password,
    };
    // console.log("Data = ", _data);
    dispatch(changePassword(_data))
      .unwrap(unwrapResult)
      .then((result) => {
        setTimeout(() => {
          // console.log("Success");
          navigate("/login", { replace: true });
        }, secondsBeforeRedirect * 1000);
      })
      .catch((err) => {
        console.log(err);
        setError("password", {
          message: err,
        });
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container className={props.name} fluid style={{ height: "50px" }}>
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
                <Stack dir="vertical" gap={4} className="p-0">
                  <LoginTitle className="login-title" />
                  <h1
                    data-testid="login-header"
                    id="login-header"
                    className="mb-1"
                    style={{ minWidth: "200px" }}
                  >
                    Update your password
                  </h1>
                </Stack>
                <div>Enter your new password below</div>
              </Row>
              <Row className="mb-1 mt-4">
                {errors.password ? (
                  <FormMessage>
                    <p>{errors.password?.message}</p>
                  </FormMessage>
                ) : null}
              </Row>
              <Row className="mb-3">
                <Form.Group className="p-0">
                  <Form.Floating className={LoginMethodsCSS["form-floating"]}>
                    <TextInputStyled
                      id="login-password-input"
                      data-testid="login-password-input"
                      autoComplete="off"
                      name="password"
                      {...register("password", { required: "Required" })}
                      type="password"
                      isInvalid={errors?.password}
                    />
                    <label>Password</label>
                  </Form.Floating>
                  <Form.Text
                    className="text-danger"
                    style={{
                      visibility: `${errors.password}` ? "visible" : "hidden",
                    }}
                  >
                    {errors.password ? errors.password.message : ""}
                  </Form.Text>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <LinearProgressWithLabel
                  defaultLabel="Your password must be at least 8 characters"
                  defaultColor="#1a90ff"
                  progressFunction={getPasswordState}
                  value={watchPassword}
                />
              </Row>
              <Row className="mb-3">
                <OrangeButton
                  id="reset-password-submit-button"
                  data-testid="reset-password-submit-button"
                  as="button"
                  type="submit"
                  value=""
                  variant="flat btn-flat"
                  spinner={true}
                >
                  {"Reset Password"}
                </OrangeButton>
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
    </form>
  );
};

export default ResetPassword;
