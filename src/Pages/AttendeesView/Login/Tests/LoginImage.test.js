import Login from "../Login";
import { render, screen } from "@testing-library/react";

test("Render side image", () => {
    render(<Login />);
    const loginImage = screen.getByTestId("login-image");
    expect(loginImage).toBeInTheDocument();
});
