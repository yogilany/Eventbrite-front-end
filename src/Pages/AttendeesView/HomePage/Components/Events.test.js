import { screen } from "@testing-library/react";
import Events from "./Events";
import { renderWithProviders } from "../../../../test_utils";

test("display 8  event cards images", () => {
  renderWithProviders(<Events />);
  const eventCard = screen.getAllByTestId("event-card-image");
  expect(eventCard).toHaveLength(8);
});
