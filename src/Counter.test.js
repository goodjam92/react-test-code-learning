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

  it("calls handleIncrease", () => {
    // 클릭 이벤트를 시뮬레이트하고, state 확인하는 테스트
    const wrapper = shallow(<Counter />);
    const plusButton = wrapper.findWhere(
      (node) => node.type() === "button" && node.text() === "+1"
    );
    plusButton.simulate("click");
    expect(wrapper.state().number).toBe(1);
  });

  it("calls handleDecrease", () => {
    // 클릭 이벤트를 시뮬레이트하고, h2 태그의 텍스트 확인 (state 확인과 동일)
    const wrapper = shallow(<Counter />);
    
    // 버튼 태그이면서 텍스트가 -1인 노드를 반환
    const minusButton = wrapper.findWhere(
      (node) => node.type() === "button" && node.text() === "-1"
    );
    minusButton.simulate("click");
    const number = wrapper.find("h2");
    expect(number.text()).toBe("-1");
  });
});
