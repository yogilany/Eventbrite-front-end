import Publish from "../Publishpage/Publish";
import { render, screen } from "@testing-library/react";

test("Render Header Component", () => {
    render(<Publish />);

    const hderid = screen.getByTestId("HDID");
    expect(hderid).toBeInTheDocument();
});
test("Render Radio box", () => {
    render(<Publish />);

    const radid = screen.getByTestId("RADID");
    expect(radid).toBeInTheDocument();
});
test("Render container of event", () => {
    render(<Publish />);

    const cd = screen.getByTestId("CDID");
    expect(cd).toBeInTheDocument();
});
test("Render container of Tipsbox", () => {
    render(<Publish />);

    const tp = screen.getByTestId("TBID");
    expect(tp).toBeInTheDocument();
});
test("Render container of DateTime", () => {
    render(<Publish />);

    const dt = screen.getByTestId("DTID");
    expect(dt).toBeInTheDocument();
});


