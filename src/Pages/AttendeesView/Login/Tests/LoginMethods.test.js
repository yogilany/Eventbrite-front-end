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

  it("should call setGoogleProfile when a user logs in with Google", async () => {
    const access_token = "access_token";
    const response = { data: { name: "John Doe" } };
    axios.get.mockResolvedValueOnce(response);

    const { getByTestId } = renderWithProviders(<LoginMethods {...props} />);
    const googleButton = screen.getByTestId("login-with-google");
    fireEvent.click(googleButton);

    await waitFor(() => {
      expect(setGoogleProfile).toHaveBeenCalledWith(response.data);
    });
  });

  it("should show a sign up link", () => {
    const { getByText } = renderWithProviders(<LoginMethods {...props} />);
    const signUpLink = screen.getByText(/Sign up/i);
    expect(signUpLink).toBeInTheDocument();
  });
});
