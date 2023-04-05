/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render } from "@testing-library/react";
import Counter from "./Counter";

describe("<Counter />", () => {
  it("matches snapshot", () => {
    const utils = render(<Counter />);
    expect(utils.container).toMatchSnapshot();
  });

  it("has a number and two buttons", () => {
    const { getByText } = render(<Counter />);

    expect(getByText("0")).toBeTruthy();
    expect(getByText("+1")).toBeTruthy();
    expect(getByText("-1")).toBeTruthy();
  });

  it("increases", () => {
    const utils = render(<Counter />);
    const number = utils.getByText("0");
    const plusButton = utils.getByText("+1");
    // 클릭 이벤트 두 번 발생시키기
    fireEvent.click(plusButton); // fireEvent() 이벤트 발생시키는 함수
    fireEvent.click(plusButton);

    /* change event
    fireEvent.change(myInfut, { target : { value : 'hellow world! '} });
    */

    expect(number).toHaveTextContent("2"); // jest-dom 확장 matcher 사용
    expect(number.textContent).toBe("2"); // textContent를 직접 비교
  });

  it("decreases", () => {
    const utils = render(<Counter />);
    const number = utils.getByText("0");
    const minusButton = utils.getByText("-1");
    // 클릭 이벤트 두 번 발생시키기
    fireEvent.click(minusButton);
    fireEvent.click(minusButton);
    expect(number).toHaveTextContent("-2");
  });
});
