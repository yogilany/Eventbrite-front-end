import { render, fireEvent } from "@testing-library/react";
import RowInput from "../RowInput";

test("quantity input updates state correctly", () => {
  const ticket = { name: "Test Ticket", price: 10 };
  const setTickets = jest.fn();
  const { getByTestId } = render(
    <RowInput ticket={ticket} tickets={[]} setTickets={setTickets} />
  );
  const quantityInput = getByTestId("quantity-input");

  fireEvent.change(quantityInput, { target: { value: "5" } });

  expect(quantityInput.value).toBe("5");
});

test("facevalue input updates state correctly", () => {
  const ticket = { name: "Test Ticket", price: 10 };
  const setTickets = jest.fn();
  const { getByTestId } = render(
    <RowInput ticket={ticket} tickets={[]} setTickets={setTickets} />
  );
  const quantityInput = getByTestId("quantity-input");
  const facevalueInput = getByTestId("facevalue-input");

  fireEvent.change(quantityInput, { target: { value: "5" } });

  expect(facevalueInput.value).toBe("50");
});

test("adding a new ticket updates state correctly", () => {
  const ticket = { name: "Test Ticket", price: 10 };
  const setTickets = jest.fn();
  const { getByTestId } = render(
    <RowInput ticket={ticket} tickets={[]} setTickets={setTickets} />
  );
  const quantityInput = getByTestId("quantity-input");

  fireEvent.change(quantityInput, { target: { value: "5" } });

  expect(setTickets).toHaveBeenCalledWith([
    { ticket, quantity: "5", facevalue: "50" },
  ]);
});

test("updating an existing ticket updates state correctly", () => {
  const ticket = { name: "Test Ticket", price: 10 };
  const setTickets = jest.fn();
  const { getByTestId } = render(
    <RowInput
      ticket={ticket}
      tickets={[{ ticket, quantity: "2", facevalue: "20" }]}
      setTickets={setTickets}
    />
  );
  const quantityInput = getByTestId("quantity-input");

  fireEvent.change(quantityInput, { target: { value: "5" } });

  expect(setTickets).toHaveBeenCalledWith([
    { ticket, quantity: "5", facevalue: "50" },
  ]);
});

test("removing an existing ticket updates state correctly", () => {
  const ticket = { name: "Test Ticket", price: 10 };
  const setTickets = jest.fn();
  const { getByTestId } = render(
    <RowInput
      ticket={ticket}
      tickets={[{ ticket, quantity: "2", facevalue: "20" }]}
      setTickets={setTickets}
    />
  );
  const quantityInput = getByTestId("quantity-input");

  fireEvent.change(quantityInput, { target: { value: "0" } });

  expect(setTickets).toHaveBeenCalledWith([]);
});
