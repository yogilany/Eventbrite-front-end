import { Link } from "react-router-dom";
import { shallow } from "enzyme";
import SignupVerifyModal from "../Components/SignupVerifyModal";
import "../../../../setupTests";
import { screen } from "@testing-library/react";

describe("Sign up Modal Component", () => {
  let wrapper;
  const close_fn = jest.fn();

  beforeEach(() => {
    const myProps = {
      show: true,
      onHide: () => {},
      onAccept: () => {},
      onCancel: () => {
        close_fn();
      },
    };

    wrapper = shallow(<SignupVerifyModal {...myProps}></SignupVerifyModal>);
  });

  afterEach(() => {});
  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("has accept button", () => {
    expect(wrapper.find("#SignupVerifyModal-AcceptButton").exists()).toBe(true);
  });

  it("has cancel button", () => {
    expect(wrapper.find("#SignupVerifyModal-CancelButton").exists()).toBe(true);
  });

  it("has 4 route links", () => {
    expect(wrapper.find(Link).length).toBe(4);
  });

  it("closes the modal when close button is clicked", () => {
    const closeButton = wrapper.find("#SignupVerifyModal-CancelButton");
    closeButton.simulate("click");
    expect(close_fn).toHaveBeenCalled();
  });
});
