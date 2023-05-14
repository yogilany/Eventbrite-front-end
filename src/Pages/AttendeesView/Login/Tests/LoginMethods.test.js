import { fireEvent, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import { LoginMethods } from "../Components/LoginMethods";
import renderWithProviders from "src/test_utils";
jest.mock("axios");

describe("LoginMethods component", () => {
  const setGoogleProfile = jest.fn();
  const data_testid = "login-methods";
  const name = "login-methods";
  const props = {
    setGoogleProfile: setGoogleProfile,
    data_testid: data_testid,
    name: name,
  };

  it("should render the component", () => {
    const { getByTestId } = renderWithProviders(<LoginMethods {...props} />);
    const loginMethodsElement = screen.getByTestId(data_testid);
    expect(loginMethodsElement).toBeInTheDocument();
  });

  it("should show a sign up link", () => {
    const { getByText } = renderWithProviders(<LoginMethods {...props} />);
    const signUpLink = screen.getByText(/Sign up/i);
    expect(signUpLink).toBeInTheDocument();
  });
});
