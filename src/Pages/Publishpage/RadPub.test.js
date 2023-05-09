import Radpub from "../Publishpage/Radpub";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "src/test_utils";
test("Check public by default is chosen", () => {
  renderWithProviders(<Radpub />);
  const hderid = screen.getByTestId("radiopub");
  expect(hderid).toBeChecked();
});
test("Check private not chosen by default", () => {
  renderWithProviders(<Radpub />);
  const hderid = screen.getByTestId("radiopri");
  expect(hderid).not.toBeChecked();
});
