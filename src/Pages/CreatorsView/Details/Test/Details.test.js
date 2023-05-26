import { render, screen } from "@testing-library/react";
import Details from "../Details";
test("Details Container that holds Event Image , Summary , Desciption and Add Event Sections to be displayed", () => {
  render(<Details />);
  const Container = screen.getByTestId("Details__contianer");
  expect(Container).toBeInTheDocument();
});
