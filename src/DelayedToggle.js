import { useCallback, useState } from "react";

const DelayedToggle = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = useCallback(() => {
    setTimeout(() => {
      setToggle((toggle) => !toggle);
    }, 500);
  }, []);

  return (
    <div data-testid="toggle">
      <button onClick={onToggle}>토글</button>
      <div>
        상태: <span>{toggle ? "ON" : "OFF"}</span>
      </div>
      {toggle && <div>메오우!!</div>}
    </div>
  );
};

export default DelayedToggle;
