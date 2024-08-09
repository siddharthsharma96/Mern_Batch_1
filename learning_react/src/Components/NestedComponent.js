import { NestedComponentOne } from "./NestedComponentOne";

const NestedComponent = ({ data, updateValue }) => {
  console.log("reRender again nested", data, updateValue);

  return (
    <div>
      <h1>Nested Component one</h1>
      <NestedComponentOne value={data} updateValue={updateValue} />
    </div>
  );
};

export default NestedComponent;
