import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AddAttendees from "../AddAttendees";

describe("AddAttendees component", () => {
  it("should render the component", () => {
    const { getByText } = render(<AddAttendees />);
    expect(screen.getByText("Add Attendees")).toBeInTheDocument();
  });

  it("should update order type when select is changed", () => {
    const { getByLabelText } = render(<AddAttendees />);
    const select = screen.getByLabelText("Order Type:");
    fireEvent.change(select, { target: { value: "cash" } });
    expect(select.value).toBe("cash");
  });
});
