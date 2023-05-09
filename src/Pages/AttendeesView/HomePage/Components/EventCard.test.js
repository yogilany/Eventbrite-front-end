import EventCard from "./EventCard";
import { render, screen } from "@testing-library/react";
import renderWithProviders from "../../../../test_utils";
test("dispaly event card", () => {
  render(<EventCard />);

  const eventCard = screen.getByTestId("event-card");
  expect(eventCard).toBeInTheDocument();
});
