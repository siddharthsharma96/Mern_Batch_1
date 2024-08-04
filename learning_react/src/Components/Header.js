import NestedComponent from "./NestedComponent";
import { useState } from "react";
const Header = () => {
  console.log("reRender again Header");
  const [value, setValue] = useState(0);
  const updateValue = (val) => {
    setValue(val);
  };
  return (
    <div>
      <p>Using Header as component</p>
      <NestedComponent data={value} updateValue={updateValue} />
    </div>
  );
};

export default Header;
