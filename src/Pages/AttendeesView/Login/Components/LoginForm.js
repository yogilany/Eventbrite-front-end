import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row } from "react-bootstrap";
import { Navigate } from "react-router";
import TextInputStyled from "../../../../Components/TextInput/TextInput";
import ButtonOrangeStyled from "../../../../Components/Buttons/OrangeButton";
/**
 *
 * @param {name: Name of this element after creation} props
 * @returns Login form containing email, password forms & log in submit button
 */
export const LoginForm = (props) => {
  return (
    <Form onSubmit={props.submitAction}
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
          <TextInputStyled
            style={{
              minWidth: "100%",
              width: "350px"
            }}
            id='login-email-input'
            data-testid='login-email-input'
            ref={props.user_ref}
            autoComplete="off"
            onChange={(e) => props.set_User(e.target.value)}
            value={props.user}
            required
            type="email"
            placeholder="Email address"
          />
        </Row>
        <Row className="mb-3">
          <TextInputStyled
            id='login-password-input'
            data-testid='login-password-input'
            autoComplete="off"
            onChange={(e) => props.set_Pwd(e.target.value)}
            value={props.Pwd}
            required
            type="password"
            placeholder="Password"
          />
        </Row>
        <Row className="mb-3">
          <ButtonOrangeStyled
            id='login-submit-button'
            data-testid='login-submit-button'
            as="button"
            type="submit"
            value=""
            variant="flat btn-flat"
            disabled={!props.email_exists}
          >Log in</ButtonOrangeStyled>
        </Row>
      </Container >
    </Form>
  );
};

export default LoginForm;
