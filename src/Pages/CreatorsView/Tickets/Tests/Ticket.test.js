import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Tickets from "../Tickets";
import renderWithProviders from "src/test_utils";

describe("Tickets component", () => {
  it("renders the component without errors", () => {
    const { getByText } = renderWithProviders(<Tickets />);
    expect(screen.getByText(/Let's create tickets/i)).toBeInTheDocument();
  });

  it("displays an error message when ticket name is not provided", () => {
    const { getByText, getByPlaceholderText } = renderWithProviders(
      <Tickets />
    );
    const addticketinput = screen.getByTestId("add-ticket-btn");
    fireEvent.click(addticketinput);
    const ticketNameInput = screen.getByTestId("name-input");
    fireEvent.change(ticketNameInput, { target: { value: "" } });
    const submitBtn = screen.getByText(/Save/i);
    fireEvent.click(submitBtn);
    expect(screen.getByText(/Name is required./i)).toBeInTheDocument();
  });

  // Add more tests as needed
});
