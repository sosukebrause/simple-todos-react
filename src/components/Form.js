import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Text.."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="input-group-append">
        <button type="submit" className="btn btn-outline-secondary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
