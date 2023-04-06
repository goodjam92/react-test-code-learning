import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

afterEach(() => {
  cleanup();
});

describe("<TodoList />", () => {
  const sampleTodos = [
    {
      id: 1,
      text: "리액트 테스팅 라이브러리 배우기",
      done: true,
    },
    {
      id: 2,
      text: "TDD 배우기",
      done: false,
    },
  ];
  it("todo리스트 렌더링 테스트", () => {
    render(<TodoList todos={sampleTodos} />);
    screen.getByText(sampleTodos[0].text);
    screen.getByText(sampleTodos[1].text);
  });

  it("onToggle, onRemove 호출 테스트", () => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();
    render(
      <TodoList onToggle={onToggle} onRemove={onRemove} todos={sampleTodos} />
    );

    fireEvent.click(screen.getByText(sampleTodos[0].text));
    expect(onToggle).toBeCalledWith(sampleTodos[0].id);

    fireEvent.click(screen.getAllByText("삭제")[0]);
    expect(onRemove).toBeCalledWith(sampleTodos[0].id);
  });
});
