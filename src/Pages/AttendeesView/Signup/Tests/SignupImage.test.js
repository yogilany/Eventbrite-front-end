import Signup from "../Signup";
import { render, screen } from "@testing-library/react";

test("Render side image", () => {
    render(<Signup />);
    const singupImage = screen.getByTestId("signup-image");
    expect(singupImage).toBeInTheDocument();
});
