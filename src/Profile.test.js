import { mount } from "enzyme";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("matches sanpshot", () => {
    const wrapper = mount(<Profile userName={"goodjam"} name={"JAEMO KOO"} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders userName and name", () => {
    const wrapper = mount(<Profile userName={"goodjam"} name={"JAEMO KOO"} />);
    expect(wrapper.props().userName).toBe("goodjam");
    expect(wrapper.props().name).toBe("JAEMO KOO");

    // DOM에 우리가 원하는 텍스트가 나타나는지 확인하는 테스트 코드
    const boldElement = wrapper.find("b");
    expect(boldElement.contains("goodjam")).toBe(true);
    const spanElement = wrapper.find("span");
    expect(spanElement.text()).toBe("(JAEMO KOO)");
  });
});
