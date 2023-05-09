import React from "react";
import { render, shallow } from "enzyme";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Organizer from "../Organizer";

describe("Organizer", () => {
  it("should render the component correctly", () => {
    const { container } = render(<Organizer />);
    expect(container).toMatchSnapshot();
  });
});
