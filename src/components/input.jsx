import React from "react";

const Input = ({ id, lable, error, value, onChange, onBlur, type }) => (
  <div>
    <p style={{ margin: 0 }}>{lable}</p>
    <input
      id={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
    />
    <p style={{ color: "red" }}>{error}</p>
  </div>
);

export default Input;
