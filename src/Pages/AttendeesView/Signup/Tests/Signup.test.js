
import Signup from "../../Signup/Signup";
import { render, screen } from "@testing-library/react";

test("Render header", () => {
    render(<Signup />);

    const signupHeader = screen.getByTestId("signup-header");
    expect(signupHeader).toBeInTheDocument();
    expect(signupHeader).toHaveTextContent('Create an account')
});

test("Render signup form", () => {
    render(<Signup />);

    const loginForm = screen.getAllByRole("button");
    expect(loginForm).toHaveLength(3);
});


test("Render email placeholder text", () => {
    render(<Signup />);

    const signupFormEmail = screen.getByPlaceholderText("Email address");
    expect(signupFormEmail).toBeInTheDocument();
});


test("Email input should be empty", () => {
    render(<Signup />);

    const signupFormEmail = screen.getByPlaceholderText("Email address");
    expect(signupFormEmail.value).toBe("");
});



test("Render login methods (sign in with google)", () => {
    render(<Signup />);

    const signupMethods = screen.getByTestId("signup-form");
    expect(signupMethods).toHaveTextContent('Sign in with Google');
});
