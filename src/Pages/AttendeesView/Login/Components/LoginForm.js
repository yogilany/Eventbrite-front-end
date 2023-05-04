import { Form, Container, FloatingLabel, Row } from "react-bootstrap";
import TextInputStyled from "../../../../Components/TextInput/TextInput";
import ButtonOrangeStyled from "../../../../Components/Buttons/OrangeButton";
import { useForm } from "react-hook-form";
import LoginMethodsCSS from "./LoginMethods.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { isValidEmail } from "../../Signup/Components/Signup-utils";
import * as Yup from "yup";
import { useEffect } from "react";
import { Link } from "@mui/material";
import { useState } from "react";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter a valid email address")
    .matches(isValidEmail, 'Please enter a valid email address'),
  password: Yup.string().required("Password is required"),
});
/**
 *
 * @param {name: Name of this element after creation} props
 * @returns Login form containing email, password forms & log in submit button
 */
export const LoginForm = (props) => {
  const { register, handleSubmit, watch, getValues, formState: { errors } } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: yupResolver(LoginSchema)
  });
  const watchEmail = watch("email");
  const onSubmit = (data) => {
    props.submitAction(data);
  };

  useEffect(() => {
    props.setUserHandler(getValues("email"));
  }, [watchEmail])

  return (
    <form onSubmit={handleSubmit(onSubmit)}

      style={{
        minWidth: "100%",
        width: "350px"
      }}
      id='login-form'
      data-testid='login-form'
    >
      <Container
        fluid
        className="m-0"
        style={{ minWidth: "200px" }}
        data-testid={props.data_testid}
        name={props.name}
      >
        <Row className="mb-3">
          <Form.Group className="p-0">
            <FloatingLabel
              className={LoginMethodsCSS["floating-label"]}
              label="Email address">
              <TextInputStyled
                style={{
                  minWidth: "100%",
                  width: "350px"
                }}
                id='login-email-input'
                data-testid='login-email-input'
                {...register("email", { required: "Required" })}
                autoComplete="off"
                name="email"
                type="email"
                isInvalid={errors?.email}
              />
            </FloatingLabel>
            <Form.Text className="text-danger"
              style={{ visibility: (`${errors.email}` ? "visible" : "hidden") }}>
              {errors.email?.message}
            </Form.Text>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group className="p-0">
            <FloatingLabel
              className={LoginMethodsCSS["floating-label"]}
              label="Password">
              <TextInputStyled
                id='login-password-input'
                data-testid='login-password-input'
                autoComplete="off"
                name="password"
                {...register("password", { required: "Required" })}
                type="password"
                isInvalid={errors?.password || props.passwordIncorrect}
              />
            </FloatingLabel>
            <Form.Text className="text-danger"
              style={{ visibility: (`${errors.password || props.passwordIncorrect}` ? "visible" : "hidden") }}>
              {errors.password?.message}
              {props.passwordIncorrect ? "The password is not correct." : null}

            </Form.Text>
          </Form.Group>

        </Row>
        <Row className="mb-3">
          <ButtonOrangeStyled
            id='login-submit-button'
            data-testid='login-submit-button'
            as="button"
            type="submit"
            value=""
            variant="flat btn-flat"
          >Log in</ButtonOrangeStyled>
        </Row>

      </Container >
    </form>
  );
};

export default LoginForm;
