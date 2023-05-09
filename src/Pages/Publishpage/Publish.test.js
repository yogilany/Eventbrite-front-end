import Publish from "../Publishpage/Publish";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test_utils";
test("renderWithProviders Header Component", () => {
  renderWithProviders(<Publish />);

  const hderid = screen.getByTestId("HDID");
  expect(hderid).toBeInTheDocument();
});
test("renderWithProviders Radio box", () => {
  renderWithProviders(<Publish />);

  const radid = screen.getByTestId("RADID");
  expect(radid).toBeInTheDocument();
});
test("renderWithProviders container of event", () => {
  renderWithProviders(<Publish />);

  const cd = screen.getByTestId("CDID");
  expect(cd).toBeInTheDocument();
});
test("renderWithProviders container of Tipsbox", () => {
  renderWithProviders(<Publish />);

  const tp = screen.getByTestId("TBID");
  expect(tp).toBeInTheDocument();
});
test("renderWithProviders container of DateTime", () => {
  renderWithProviders(<Publish />);

  const dt = screen.getByTestId("DTID");
  expect(dt).toBeInTheDocument();
});
