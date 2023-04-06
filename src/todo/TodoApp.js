import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { useCallback, useRef, useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 테스팅 라이브러리 배우기", done: true },
    { id: 2, text: "TDD 배우기", done: false },
  ]);

  const nextId = useRef(3);

  const onInsert = useCallback((text) => {
    if (text === "") {
      return;
    }
    setTodos((todos) =>
      todos.concat({ id: nextId.current, text, done: false })
    );
    nextId.current = nextId.current + 1;
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : { ...todo }
      )
    );
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <>
      <TodoForm onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
};

export default TodoApp;
