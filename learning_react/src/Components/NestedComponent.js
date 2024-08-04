import { NestedComponentOne } from "./NestedComponentOne";

const NestedComponent = (props) => {
  console.log("reRender again nested");

  return (
    <div>
      <h1>Nested Component one</h1>
      <NestedComponentOne value={props.data} updateValue={props.updateValue} />
    </div>
  );
};

export default NestedComponent;
