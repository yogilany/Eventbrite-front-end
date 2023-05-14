import EventCard from "./EventCard";
import { render, screen } from "@testing-library/react";
import renderWithProviders from "../../../../test_utils";

test("dispaly event card", () => {
  const mockData = {
    eventTitle: "Example Event",
    eventDate: "2022-01-01T12:00:00Z",
    eventTime: "12:00 PM",
    eventLocation: "Example Location",
    eventPrice: 10.0,
    eventOrganizer: "Example Organizer",
    organizerFollowers: 100,
    eventCover: null,
    eventID: "123",
  };
  render(<EventCard {...mockData} />);

  const eventCard = screen.getByTestId("event-card");
  expect(eventCard).toBeInTheDocument();
});
