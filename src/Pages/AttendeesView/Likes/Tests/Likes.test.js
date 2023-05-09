import React from "react";
import { shallow } from "enzyme";
import Likes from "../Likes";

describe("Likes component", () => {
  it("should render without errors", () => {
    const wrapper = shallow(<Likes />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render a header", () => {
    const wrapper = shallow(<Likes />);
    const header = wrapper.find("Header");
    expect(header.exists()).toBe(true);
  });

  it("should render a footer", () => {
    const wrapper = shallow(<Likes />);
    const footer = wrapper.find("Footer");
    expect(footer.exists()).toBe(true);
  });

  it("should render 3 Like components", () => {
    const wrapper = shallow(<Likes />);
    const likeComponents = wrapper.find("Like");
    expect(likeComponents.length).toBe(3);
  });
});
