import React from "react";
import ReactDOM from "react-dom";
import Singleevent from "./Singleevent.js";
import { isTSAnyKeyword } from "@babel/types";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Singleevent />, div);
    ReactDOM.unmountComponentAtNode(div);
}
);
