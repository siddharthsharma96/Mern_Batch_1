import { useEffect, useState } from "react";
import { ConditionOne } from "./ConditionOne";
import ConditionTwo from "./ConditionTwo";

const Counter = () => {
  const [value, setValue] = useState(0);
  const [a, setA] = useState(0);
  const handleDecrement = () => {
    // console.log("Decrement button clicked");
    // value = value - 1;
    // console.log(value);
    setValue(value - 1);
  };

  const handleIncrement = () => {
    // console.log("Increment button clicked");
    // value = value + 1;
    // console.log(value);
    setValue(value + 1);
  };

  // Two arguments one is callback function and another is array of dependency
  // Case 1 : Empty array of dependency : When my component mounts for the first time callback function will
  // run only at that time
  useEffect(() => {
    console.log("Useefect is running");
  }, []);

  // case 2 : whenever my dependency is changing my callback function will run
  useEffect(() => {
    console.log("Useefect  is running when value is changing");
  }, [value]);
  useEffect(() => {
    console.log("Useefect  is running when a is changing");
  }, [a]);

  // case 3: When we have no array of dependecy at that that it will run everytime whenever any value in component is changing
  useEffect(() => {
    console.log("Useefect will run everytime");
  });
  return (
    <div>
      <p>{value}</p>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>decrement</button>
      </div>
      {/* Conditional Rendering */}
      {value >= 0 ? <ConditionOne /> : <ConditionTwo />}

      <p>With another value</p>
      <p>{a}</p>
      <div>
        <button
          onClick={() => {
            setA(a + 1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setA(a - 1);
          }}
        >
          decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
