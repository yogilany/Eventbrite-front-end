import { screen } from "@testing-library/react";
import Events from "./Events";
import { renderWithProviders } from "../../../../test_utils";

test("display 8  event cards images", () => {
  const mockEvents = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    basic_info: { title: `Event ${i + 1}` },
    date_and_time: { start_date_time: new Date() },
    location: { city: "San Francisco" },
    price: 0,
    basic_info: { organizer: "Organizer" },
    organizerFollowers: 0,
    image_link: "",
  }));
  renderWithProviders(<Events events={mockEvents} />);
  const eventCard = screen.getAllByTestId("event-card-image");
  expect(eventCard).toHaveLength(8);
});
