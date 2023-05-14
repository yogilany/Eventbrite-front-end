import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  it("renders the sidebar", () => {
    render(<Sidebar />);
    const sidebarElement = screen.getByTestId("sidebar");
    expect(sidebarElement).toBeInTheDocument();
  });

  it("renders the links in the sidebar", () => {
    render(<Sidebar />);
    const linksElement = screen.getByTestId("sidebar-links");
    expect(linksElement.children.length).toBeGreaterThan(0);
  });

  it("renders the event options in the sidebar", () => {
    render(<Sidebar />);
    const eventOptionsElement = screen.getByTestId("sidebar-event-options");
    expect(eventOptionsElement.children.length).toBeGreaterThan(0);
  });

  it("renders the footer in the sidebar", () => {
    render(<Sidebar />);
    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeInTheDocument();
  });
});
