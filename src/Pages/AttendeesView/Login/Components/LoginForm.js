import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { Navigate } from "react-router";
/**
 *
 * @param {name: Name of this element after creation} props
 * @returns Login form containing email, password forms & log in submit button
 */
export const LoginForm = (props) => {
  return (
    <Container
      fluid
      className="m-0 p-0"
      style={{ minWidth: "200px" }}
      data-testid={props.data_testid}
      name={props.name}
    >
      <Form onSubmit={props.submitAction}>
        <Form.Group className="mb-3" controlId="formLoginEmail">
          <Form.Control
            ref={props.user_ref}
            autoComplete="off"
            onChange={(e) => props.set_User(e.target.value)}
            value={props.user}
            required
            type="email"
            placeholder="Email address"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLoginPassword">
          <Form.Control
            autoComplete="off"
            onChange={(e) => props.set_Pwd(e.target.value)}
            value={props.Pwd}
            required
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button
          as="input"
          type="submit"
          value="Log in"
          variant="flat btn-flat"
        />{" "}
      </Form>
    </Container>
  );
};

export default LoginForm;
