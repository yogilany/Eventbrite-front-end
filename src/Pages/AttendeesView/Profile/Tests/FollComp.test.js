import { render, screen } from "@testing-library/react";
import FollComp from "../Components/FollComp";
import renderWithProviders from "src/test_utils";

describe("FollComp", () => {
  it("renders the component with props", () => {
    const props = {
      firstname: "John",
      lastname: "Doe",
      avatar_url: "https://example.com/profile.jpg",
      className: "following-container",
      data_testid: "following-container",
      id: 123,
    };
    renderWithProviders(<FollComp {...props} />);
    const nameElement = screen.getByText(
      `${props.firstname} ${props.lastname}`
    );
    expect(nameElement).toBeInTheDocument();
  });
});
