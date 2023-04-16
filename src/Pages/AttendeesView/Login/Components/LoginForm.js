import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row } from "react-bootstrap";
import { Navigate } from "react-router";
import TextInputStyled from "../../../../components/TextInput/TextInput";
import ButtonOrangeStyled from "../../../../components/Buttons/OrangeButton";
/**
 *
 * @param {name: Name of this element after creation} props
 * @returns Login form containing email, password forms & log in submit button
 */
export const LoginForm = (props) => {
  return (
    <Form onSubmit={props.submitAction}>
      <Container
        fluid
        className="m-0"
        style={{ minWidth: "200px" }}
        data-testid={props.data_testid}
        name={props.name}
      >
        <Row className="mb-3">
          <TextInputStyled
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
            as="input"
            type="submit"
            value="Log in"
            variant="flat btn-flat"
          />{" "}
        </Row>
      </Container >
    </Form>
  );
};

export default LoginForm;
