import { shallow } from "enzyme";
import Loctype from "../Components/Loctype-1";
describe("Loctype", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Loctype />);
    expect(wrapper).toMatchSnapshot();
  });
});
