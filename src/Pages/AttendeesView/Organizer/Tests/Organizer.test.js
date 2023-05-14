import React from "react";
import { render, shallow } from "enzyme";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Organizer from "../Organizer";
import renderWithProviders from "src/test_utils";

describe("Organizer", () => {
  it("should render the component correctly", () => {
    const { container } = renderWithProviders(<Organizer />);
    expect(container).toMatchSnapshot();
  });
});
