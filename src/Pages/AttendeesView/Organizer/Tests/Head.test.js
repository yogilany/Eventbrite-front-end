import React from "react";
import { shallow } from "enzyme";
import Head from "../Components/Head";

describe("Head", () => {
  const props = {
    photo: "https://example.com/photo.jpg",
    name: "Test Name",
    followers: 100,
    totalevents: 50,
    info: "Test info",
  };

  it("renders without crashing", () => {
    shallow(<Head {...props} />);
  });

  it("renders the correct name", () => {
    const wrapper = shallow(<Head {...props} />);
    expect(wrapper.find(".Orgname p").text()).toEqual(props.name);
  });

  it("renders the correct number of followers", () => {
    const wrapper = shallow(<Head {...props} />);
    expect(wrapper.find(".followers strong").text()).toEqual(
      props.followers.toString()
    );
  });

  it("renders the correct total events", () => {
    const wrapper = shallow(<Head {...props} />);
    expect(wrapper.find(".totalevents strong").text()).toEqual(
      props.totalevents.toString()
    );
  });

  it("renders the correct info", () => {
    const wrapper = shallow(<Head {...props} />);
    expect(wrapper.find(".orginfo p").text()).toEqual(props.info);
  });
});
