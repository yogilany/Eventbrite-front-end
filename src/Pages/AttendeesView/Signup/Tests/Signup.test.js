
import Signup from "../../Signup/Signup";
import {  screen } from "@testing-library/react";
import { renderWithProviders } from "../../../../test_utils";

test("Render header", () => {
    renderWithProviders(<Signup />);

    const signupHeader = screen.getByTestId("signup-header");
    expect(signupHeader).toBeInTheDocument();
    expect(signupHeader).toHaveTextContent('Create an account')
});

test("Render signup form (without clicking continue)", () => {
    renderWithProviders(<Signup />);

    const loginForm = screen.getAllByRole("button");
    expect(loginForm).toHaveLength(1);
});


test("Render email placeholder text", () => {
    renderWithProviders(<Signup />);

    const signupFormEmail = screen.getByPlaceholderText("Email address");
    expect(signupFormEmail).toBeInTheDocument();
});


test("Email input should be empty", () => {
    renderWithProviders(<Signup />);

    const signupFormEmail = screen.getByPlaceholderText("Email address");
    expect(signupFormEmail.value).toBe("");
});


/** 
 * TODO Use fireevent to render the rest of the form
 */
// test("Render login methods (sign in with google)", () => {
//     renderWithProviders(<Signup />);

//     const signupMethods = screen.getByTestId("signup-form");
//     expect(signupMethods).toHaveTextContent('Sign in with Google');
// });
