import Radpub from "../Publishpage/Radpub";
import { render, screen } from "@testing-library/react";

test("Check public by default is chosen", () => {
    render(<Radpub />);

    const hderid = screen.getByTestId("radiopub");
    expect(hderid).toBeChecked();
});
test("Check private not chosen by default", () => {
    render(<Radpub />);

    const hderid = screen.getByTestId("radiopri");
    expect(hderid).not.toBeChecked();
});
