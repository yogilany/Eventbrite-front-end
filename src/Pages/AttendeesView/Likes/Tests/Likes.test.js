import React from "react";
import { shallow } from "enzyme";
import Likes from "../Likes";
import renderWithProviders from "src/test_utils";
describe("Likes component", () => {
  it("should render without errors", () => {
    const wrapper = shallow(
      <renderWithProviders>
        <Likes />
      </renderWithProviders>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
