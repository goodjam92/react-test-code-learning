import { fireEvent, render, screen } from "@testing-library/react";
import TodoApp from "./TodoApp";

describe("<TodoApp />", () => {
  it("Todo 양식, 리스트 컴포넌트 렌더링 테스트", () => {
    render(<TodoApp />);
    screen.getByText("등록");
    screen.getByTestId("TodoList");
  });

  it("두 개의 할일 항목 렌더링 테스트", () => {
    render(<TodoApp />);
    screen.getByText("리액트 테스팅 라이브러리 배우기");
    screen.getByText("TDD 배우기");
  });

  it("새 할일 리스트 생성 테스트", () => {
    render(<TodoApp />);
    fireEvent.change(screen.getByPlaceholderText("할일을 입력해주세요"), {
      target: {
        value: "새 항목 추가하기",
      },
    });

    fireEvent.click(screen.getByText("등록"));
    screen.getByText("새 항목 추가하기");
  });

  it("todo test toggle 테스트", () => {
    render(<TodoApp />);
    const todoText = screen.getByText("리액트 테스팅 라이브러리 배우기");
    expect(todoText).toHaveStyle("text-decoration : line-through;");
    fireEvent.click(todoText);
    expect(todoText).not.toHaveStyle("text-decoration : line-through;");
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle("text-decoration : line-through;");
  });

  it("todo 삭제 버튼 기능 테스트", () => {
    render(<TodoApp />);
    const todoText = screen.getByText("리액트 테스팅 라이브러리 배우기");
    // eslint-disable-next-line testing-library/no-node-access
    const removeButton = todoText.nextSibling;
    fireEvent.click(removeButton);
    expect(todoText).not.toBeInTheDocument();
  });
});
