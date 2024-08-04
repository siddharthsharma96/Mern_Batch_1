export const NestedComponentOne = ({ value, updateValue }) => {
  const handleDecrement = () => {
    let a = value - 1;
    updateValue(a);
  };

  const handleIncrement = () => {
    let a = value + 1;
    updateValue(a);
  };
  console.log("reRender again NestedcomponentOne");

  return (
    <div>
      <p>{value}</p>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>decrement</button>
      </div>
    </div>
  );
};
