import { useState } from "react";

const Debouncing = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <div>
      <h1>Using Debouncing</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={value}
          onChange={handleChange}
        />
        <button type="submit">Submit form</button>
      </form>
    </div>
  );
};

export default Debouncing;
