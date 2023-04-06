import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "./TodoItem";

afterEach(() => {
  cleanup();
});

describe("<TodoItem />", () => {
  /* 1 */
  const sampleTodo = {
    id: 1,
    text: "TDD 배우기",
    done: false,
  };

  const setup = (props = {}) => {
    const initialProps = { todo: sampleTodo };
    const utils = render(<TodoItem {...initialProps} {...props} />);
    const todo = props.todo || initialProps.todo;
    const span = screen.getByText(todo.text);
    const button = screen.getByText("삭제");
    return {
      ...utils,
      span,
      button,
    };
  };

  it("할일 텍스트와 버튼이 있는지 테스트", () => {
    const { span, button } = setup();
    expect(span).toBeTruthy();
    expect(button).toBeTruthy();
  });

  /* 2 */
  it("done = true면 텍스트에 줄 긋기", () => {
    const { span } = setup({ todo: { ...sampleTodo, done: true } });
    expect(span).toHaveStyle("text-decoration: line-through;");
  });

  it("done = false인 경우 텍스트에 줄 없음", () => {
    const { span } = setup({ todo: { ...sampleTodo } });
    expect(span).not.toHaveStyle("text-decoration: line-through;");
  });

  /* 3 */
  it("할 일 텍스트 클릭 이벤트 테스트", () => {
    const onToggle = jest.fn();
    const { span } = setup({ onToggle });
    fireEvent.click(span);
    expect(onToggle).toBeCalledWith(sampleTodo.id);
  });

  it("리스트 삭제 버튼 이벤트", () => {
    const onRemove = jest.fn();
    const { button } = setup({ onRemove });
    fireEvent.click(button);
    expect(onRemove).toBeCalledWith(sampleTodo.id);
  });
});
