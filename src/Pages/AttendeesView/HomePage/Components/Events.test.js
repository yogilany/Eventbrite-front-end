import { render, screen } from "@testing-library/react";
import Events from "./Events";

test("dispaly 8  event cards images", () => {
  render(<Events />);

  const eventCard = screen.getAllByTestId("event-card-image");
  expect(eventCard).toHaveLength(8);
});
