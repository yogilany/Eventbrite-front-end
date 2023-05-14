import React from "react";
import { shallow } from "enzyme";
import { EventLocation } from "../Components/EventLocation";

describe("EventLocation", () => {
  it("renders correctly", () => {
    const location = { city: "San Francisco" };
    const date_and_time = {
      start_date_time: "2022-01-01T00:00:00Z",
      end_date_time: "2022-01-01T01:00:00Z",
    };
    const wrapper = shallow(
      <EventLocation location={location} date_and_time={date_and_time} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
