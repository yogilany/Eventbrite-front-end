import Login from "../Login";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../../test_utils";
test("Render side image", () => {
    renderWithProviders(<Login />);
    const loginImage = screen.getByTestId("login-image");
    expect(loginImage).toBeInTheDocument();
});
