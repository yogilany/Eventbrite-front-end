import { render, screen } from "@testing-library/react";
import Summary from '../Summary'
test("Test Summary Section to be displayed on Page", () => {
    render(<Summary />);
    const Container =  screen.getByTestId("summaryContainer");
    expect(Container).toBeInTheDocument();
})
test("Test Text box to be empty once rendering page and to be in Page", () => {
    render(<Summary />);
    const textBox = screen.getByPlaceholderText("Write a short event summary to get attended excited.");
    expect(textBox.value).toBe("");
    expect(textBox).toBeInTheDocument();
})