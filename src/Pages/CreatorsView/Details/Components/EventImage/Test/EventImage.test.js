import { render, screen } from "@testing-library/react";
import EventImageBox from "../EventImageBox";
test("Test Event Image container to be displayed on Details page", () => {
  render(<EventImageBox />);
  const Container = screen.getByTestId("eventImage");
  expect(Container).toBeInTheDocument();
});

test("Test Photo requirements section to be displayed on Details page", () => {
  render(<EventImageBox />);
  const photoRequirements = screen.getByTestId("photo__requirements");
  expect(photoRequirements).toBeInTheDocument();
});
