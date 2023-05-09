import Profile from "../Profile/Profile";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../../test_utils";
test("Render Order Component", () => {
  renderWithProviders(<Profile />);

  const ordid = screen.getByTestId("Order-Form-id");
  expect(ordid).toBeInTheDocument();
});
test("Render Like Component", () => {
  renderWithProviders(<Profile />);

  const likeid = screen.getByTestId("Like-Form-id");
  expect(likeid).toBeInTheDocument();
});
test("Render Follwing Component", () => {
  renderWithProviders(<Profile />);

  const folid = screen.getByTestId("Follow-Form-id");
  expect(folid).toBeInTheDocument();
});
test("Checking number of liked events", () => {
  renderWithProviders(<Profile />);

  const likenum = screen.getAllByTestId("Like-Form-id");
  expect(likenum).toHaveLength(4);
});
