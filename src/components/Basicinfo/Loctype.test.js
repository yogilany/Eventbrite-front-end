import React from "react";
import ReactDOM from "react-dom";
import Loctype from "./Loctype.js";
import { isTSAnyKeyword } from "@babel/types";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Loctype />, div);
    ReactDOM.unmountComponentAtNode(div);
}
);

it("renders props correctly", () => {
    const { getByTestId } = render(<Loctype onchoose={onchoose} />);
    expect(getByTestId("loctypetest")).toBeTruthy();
});