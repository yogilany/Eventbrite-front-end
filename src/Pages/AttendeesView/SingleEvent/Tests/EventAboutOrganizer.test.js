import { render, screen } from "@testing-library/react";
import { useGetUserQuery } from "src/features/api/userApi";
import EventAboutOrganizer from "../Components/EventAboutOrganizer";
import renderWithProviders from "src/test_utils";

jest.mock("../../../../features/api/userApi");

describe("EventAboutOrganizer", () => {
  beforeEach(() => {
    useGetUserQuery.mockReturnValue({
      data: {
        id: 1,
        firstname: "John",
        lastname: "Doe",
        avatar_url: "https://example.com/avatar.jpg",
      },
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders the organizer's name", () => {
    renderWithProviders(<EventAboutOrganizer organizerId={1} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("renders the organizer's avatar", () => {
    renderWithProviders(<EventAboutOrganizer organizerId={1} />);
    expect(screen.getByAltText("Organizer Avatar")).toBeInTheDocument();
  });
});
