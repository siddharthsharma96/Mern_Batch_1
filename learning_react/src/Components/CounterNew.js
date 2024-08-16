import { useEffect, useRef, useState } from "react";

const CounterNew = () => {
  const [value, setValue] = useState(0);
  const setter = useRef("");
  const handleDecrement = () => {
    setValue(value - 1);
    setter.current.style.color = "red";
  };
  useEffect(() => {
    if (value < 0) {
      console.log("value");
      const timer = setTimeout(() => {
        setValue(0);
      }, 2000);
      return () => {
        console.log("clearing old timers");
        clearTimeout(timer);
      };
    }
  }, [value]);

  return (
    <div>
      <h1>Counter</h1>
      <p ref={setter}>{value}</p>
      <div>
        <button
          onClick={() => {
            setValue(value + 1);
            setter.current.style.color = "green";
          }}
        >
          Increment
        </button>
        <button onClick={handleDecrement}>decrement</button>
      </div>
    </div>
  );
};

export default CounterNew;
