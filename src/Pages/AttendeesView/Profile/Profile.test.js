import Profile from "../Profile/Profile";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../../test_utils";

test("renders interests section", () => {
  renderWithProviders(<Profile />);
  const interestsSection = screen.getByText(/Interests/i);
  expect(interestsSection).toBeInTheDocument();
});

test("renders collections section", () => {
  renderWithProviders(<Profile />);
  const collectionsSection = screen.getByText(/Collections/i);
  expect(collectionsSection).toBeInTheDocument();
});
