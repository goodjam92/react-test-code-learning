import { shallow } from "enzyme";
import Counter from "./Counter";

describe("<Counter />", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper).toMatchSnapshot();
  });

  it("has initial number", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.state().number).toBe(0);
  });

  it("increases", () => {
    const wrapper = shallow(<Counter />);
    wrapper.instance().handleIncrease();
    expect(wrapper.state().number).toBe(1);
  });

  it("decreases", () => {
    const wrapper = shallow(<Counter />);
    wrapper.instance().handleDecrease();
    expect(wrapper.state().number).toBe(-1);
  });
});
