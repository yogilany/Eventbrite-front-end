import { render, screen } from "@testing-library/react";
import { EventAbout } from "../Components/EventAbout";

describe("EventAbout", () => {
  it("should display the event duration and mobile eTicket", () => {
    const startDate = "2022-01-01T00:00:00Z";
    const endDate = "2022-01-03T12:00:00Z";
    const description = "Lorem ipsum dolor sit amet.";

    const { getByText } = render(
      <EventAbout
        startDate={startDate}
        endDate={endDate}
        description={description}
      />
    );

    expect(screen.getByText("2 days 12 hours")).toBeInTheDocument();
    expect(screen.getByText("Mobile eTicket")).toBeInTheDocument();
  });
});
