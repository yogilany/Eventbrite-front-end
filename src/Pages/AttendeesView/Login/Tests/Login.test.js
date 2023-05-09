import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../../test_utils";
import Login from "../Login";

test("Render header", () => {
  renderWithProviders(<Login />);

  const loginHeader = screen.getByTestId("login-header");
  expect(loginHeader).toBeInTheDocument();
});

test("Render login form", () => {
  renderWithProviders(<Login />);
  <Login />;
  const loginForm = screen.getAllByRole("button");
  expect(loginForm).toHaveLength(5);
});

test("Render email placeholder text", () => {
  renderWithProviders(<Login />);
  <Login />;
  const loginFormEmail = screen.getByLabelText("Email Address");
  expect(loginFormEmail).toBeInTheDocument();
});

test("Render password placeholder text", () => {
  renderWithProviders(<Login />);
  <Login />;

  const loginFormPassword = screen.getByLabelText("Password");
  expect(loginFormPassword).toBeInTheDocument();
});

test("Email input should be empty", () => {
  renderWithProviders(<Login />);
  <Login />;

  const loginFormEmail = screen.getByLabelText("Email Address");
  expect(loginFormEmail.value).toBe("");
});

test("Password input should be empty", () => {
  renderWithProviders(<Login />);
  <Login />;

  const loginFormPassword = screen.getByLabelText("Password");
  expect(loginFormPassword.value).toBe("");
});

test("Render login methods (email)", () => {
  renderWithProviders(<Login />);
  <Login />;

  const loginMethods = screen.getByTestId("login-methods");
  expect(loginMethods).toHaveTextContent("Email me a login link");
});

test("Render login methods (sign in with google)", () => {
  renderWithProviders(<Login />);
  <Login />;

  const loginMethods = screen.getByTestId("login-methods");
  expect(loginMethods).toHaveTextContent("Sign in with Google");
});
