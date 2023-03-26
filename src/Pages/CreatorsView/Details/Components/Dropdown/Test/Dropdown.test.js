import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dropdown from "../Dropdown";
test("Test when click on link tag the dropdown appears", async () => {
    render(<Dropdown />);
    await userEvent.click(screen.getByTestId("dropdownLink"));
    await screen.findByTestId("dropdownLinks");
    expect(screen.getByTestId("dropdownLinks")).toBeInTheDocument();
})
