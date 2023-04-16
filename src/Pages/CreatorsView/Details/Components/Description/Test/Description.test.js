import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Description from '../Description';
test("When user click on Add Text button, Text box will be displayed", async () => {
    render(<Description />);
    await userEvent.click(screen.getByTestId("addText"));
    await screen.findByTestId("textArea");
    expect(screen.getByTestId("textArea")).toBeInTheDocument();
    expect(screen.getByTestId("textArea").value).toBe("");
})
test("When user click on Add Video button, Upload Video box will be displayed", async () => {
    render(<Description />);
    await userEvent.click(screen.getByTestId("addVideo"));
    await screen.findByTestId("textArea");
    expect(screen.getByTestId("textArea")).toBeInTheDocument();
    expect(screen.getByTestId("textArea").value).toBe("");
})
test("When user click on Add Image button, Upload Image box will be displayed", async () => {
  render(<Description />);
  await userEvent.click(screen.getByTestId("addImage"));
  await screen.findByTestId("addImageBox");
  expect(screen.getByTestId("addImageBox")).toBeInTheDocument();
});
test("Test add Buttons section to be displayed in Page", () => {
    render(<Description />);
    const btns = screen.getByTestId("addButtons");
    expect(btns).toBeInTheDocument();
})
test("Test Description Container to be displayed in Page", () => {
    render(<Description />);
    const Container = screen.getByTestId("descriptionContainer");
    expect(Container).toBeInTheDocument();
})