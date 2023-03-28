
import Login from "../Login";
import { render, screen } from "@testing-library/react";

test("Render header", () => {
    render(<Login />);

    const loginHeader = screen.getByTestId("login-header");
    expect(loginHeader).toBeInTheDocument();
});

test("Render login form", () => {
    render(<Login />);

    const loginForm = screen.getAllByRole("button");
    expect(loginForm).toHaveLength(3);
});


test("Render email placeholder text", () => {
    render(<Login />);

    const loginFormEmail = screen.getByPlaceholderText("Email address");
    expect(loginFormEmail).toBeInTheDocument();
});

test("Render password placeholder text", () => {
    render(<Login />);

    const loginFormPassword = screen.getByPlaceholderText("Password");
    expect(loginFormPassword).toBeInTheDocument();
});


test("Email input should be empty", () => {
    render(<Login />);

    const loginFormEmail = screen.getByPlaceholderText("Email address");
    expect(loginFormEmail.value).toBe("");
});


test("Password input should be empty", () => {
    render(<Login />);

    const loginFormPassword = screen.getByPlaceholderText("Password");
    expect(loginFormPassword.value).toBe("");
});


test("Render login methods (email)", () => {
    render(<Login />);

    const loginMethods = screen.getByTestId("login-methods");
    expect(loginMethods).toHaveTextContent('Email me a login link');
});

test("Render login methods (sign in with google)", () => {
    render(<Login />);

    const loginMethods = screen.getByTestId("login-methods");
    expect(loginMethods).toHaveTextContent('Sign in with Google');
});
