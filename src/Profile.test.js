import { mount } from "enzyme";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("matches sanpshot", () => {
    const wrapper = mount(<Profile userName={"goodjam"} name={"JAEMO KOO"} />);
    expect(wrapper).toMatchSnapshot();
  });
});
