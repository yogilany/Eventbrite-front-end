import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AddAttendees from "../AddAttendees";
import renderWithProviders from "src/test_utils";

describe("AddAttendees component", () => {
  const event = {
    id: "645e704a622b2757c4183df2",
  };
  it("should render the component", () => {
    const { getByText } = renderWithProviders(<AddAttendees event={event} />);
    expect(screen.getByText("Add Attendees")).toBeInTheDocument();
  });

  it("should update order type when select is changed", () => {
    const { getByLabelText } = renderWithProviders(
      <AddAttendees event={event} />
    );
    const select = screen.getByLabelText("Order Type:");
    fireEvent.change(select, { target: { value: "cash" } });
    expect(select.value).toBe("cash");
  });
});
