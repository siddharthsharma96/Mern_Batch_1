import { useRef } from "react";

const StatelessComponent = () => {
  const inputRef = useRef("");
  const inputRef1 = useRef(null);
  const handleFocus = () => {
    console.log(inputRef.current.value);
    console.log(inputRef1.current.value);
  };

  return (
    <div>
      <h1>Statless component</h1>
      <input ref={inputRef} type="text" />
      <input ref={inputRef1} type="text" />
      <button onClick={handleFocus}>Form Submit</button>
    </div>
  );
};

export default StatelessComponent;
