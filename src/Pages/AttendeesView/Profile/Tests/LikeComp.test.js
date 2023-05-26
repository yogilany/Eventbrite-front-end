import React from "react";
import { render, screen } from "@testing-library/react";
import LikeComp from "../Components/LikeComp";
import { useGetEventByIdQuery } from "src/features/api/eventApi";
import renderWithProviders from "src/test_utils";
jest.mock("src/features/api/eventApi");

describe("LikeComp", () => {
  const props = {
    id: "1",
    data_testid: "like-component",
    // Add any other props needed for this test
  };

  beforeEach(() => {
    useGetEventByIdQuery.mockReturnValue({
      data: {
        location: {
          city: "Test City",
        },
        is_free: true,
        // Add any other data needed for this test
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders component with correct data", () => {
    renderWithProviders(<LikeComp {...props} />);
    expect(screen.getByTestId("like-component")).toBeInTheDocument();
    // Add more expect statements to check that the component renders correctly
  });
});
