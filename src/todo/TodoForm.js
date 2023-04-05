import { useCallback, useState } from "react";

const TodoForm = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [value, onInsert]
  );

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="할일을 입력해주세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default TodoForm;
