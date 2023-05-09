import React from "react";
import { render, screen } from "@testing-library/react";
import Map from "./Map";

describe("SimpleMap", () => {
  it("renders the map container", () => {
    const { getByTestId } = render(<Map />);
    const map = screen.getByTestId("google-maps");
    expect(map).toBeInTheDocument();
  });
});
