import React from "react";
import { shallow } from "enzyme";
import Events from "../Components/Events";
describe("Events component", () => {
  it("renders correctly with props", () => {
    const props = {
      title: "Test Event",
      date: "2022-01-01",
      loc: "Test Location",
      price: "$10",
    };
    const wrapper = shallow(<Events {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
