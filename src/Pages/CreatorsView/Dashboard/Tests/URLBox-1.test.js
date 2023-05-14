import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import URLBox from "../Components/URLBox-1";

describe("URLBox", () => {
  test("renders event URL", () => {
    render(<URLBox event={{ id: "123" }} />);
    expect(
      screen.getByText("https://www.bort2an.com/event/123")
    ).toBeInTheDocument();
  });
});
