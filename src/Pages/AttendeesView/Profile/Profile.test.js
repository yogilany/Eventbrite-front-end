import Profile from "../Profile/Profile";
import { render, screen } from "@testing-library/react";

test("Render Order Component", () => {
  render(<Profile />);

  const ordid = screen.getByTestId("Order-Form-id");
  expect(ordid).toBeInTheDocument();
});
test("Render Like Component", () => {
  render(<Profile />);

  const likeid = screen.getByTestId("Like-Form-id");
  expect(likeid).toBeInTheDocument();
});
test("Render Follwing Component", () => {
  render(<Profile />);

  const folid = screen.getByTestId("Follow-Form-id");
  expect(folid).toBeInTheDocument();
});
test("Checking number of liked events", () => {
  render(<Profile />);

  const likenum = screen.getAllByTestId("Like-Form-id");
  expect(likenum).toHaveLength(4);
});
