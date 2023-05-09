import { render, screen } from "@testing-library/react";
import Details from "../Details";
test("Details Container that holds Event Image , Summary , Desciption and Add Event Sections to be displayed", () => {
  render(<Details />);
  const Container = screen.getByTestId("Details__contianer");
  expect(Container).toBeInTheDocument();
});
test("Submit Section to be displayed in Detials Page", () => {
  render(<Details />);
  const submitSec = screen.getByTestId("submit__section");
  expect(submitSec).not.toBeInTheDocument();
});
