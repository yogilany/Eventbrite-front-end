import React from "react";
import { shallow } from "enzyme";
import axios from "axios";
import UploadButton from "../UploadButton";

jest.mock("axios");

describe("UploadButton", () => {
  it("should render correctly", () => {
    const component = shallow(<UploadButton />);
    expect(component).toMatchSnapshot();
  });
});
