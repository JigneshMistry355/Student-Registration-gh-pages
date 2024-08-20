import React from "react";
import "./TextInput.css";

const TextInput = ({ type, name, placeholder, onChange, required }) => {
  return (
    <div className="">
      <input
        className="input-container"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextInput;
