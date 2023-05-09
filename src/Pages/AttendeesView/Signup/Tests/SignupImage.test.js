import Signup from "../Signup";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../../test_utils";
test("Render side image", () => {
  renderWithProviders(<Signup />);
  const singupImage = screen.getByTestId("signup-image");
  expect(singupImage).toBeInTheDocument();
});
