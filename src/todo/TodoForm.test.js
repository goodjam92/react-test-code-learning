import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import TodoForm from "./TodoForm";

afterEach(() => {
  cleanup();
});

describe("<TodoForm />", () => {
  const setup = (props = {}) => {
    const utils = render(<TodoForm {...props} />);
    const input = screen.getByPlaceholderText("할일을 입력해주세요");
    const button = screen.getByText("등록");
    return {
      ...utils,
      input,
      button,
    };
  };

  /* 1 */
  it("has input and a button", () => {
    const { input, button } = setup();
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  /* 2 */
  it("changes input", () => {
    const { input } = setup();

    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });
    expect(input).toHaveAttribute("value", "TDD 배우기");
  });

  /* 3 */
  it("calls onInsert and clears input", () => {
    const onInsert = jest.fn();
    const { input, button } = setup({ onInsert });

    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });

    fireEvent.click(button);
    expect(onInsert).toBeCalledWith("TDD 배우기");
    expect(input).toHaveAttribute("value", "");
  });
});
