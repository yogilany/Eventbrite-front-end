import { getByTestId, render, screen } from "@testing-library/react";
import AddEvents from "../AddEvents";
test("Test Add Events Section to be displayed in Details Page", () => {
    render(<AddEvents />);
    const Contianer = screen.getByTestId("addEvents");
    expect(Contianer).toBeInTheDocument();
})
test("Test Agenda and FAQ Section to be displayed in Add Event Section", () => {
    render(<AddEvents />);
    const section = screen.getByTestId("addSection");
    expect(section).toBeInTheDocument();
})
