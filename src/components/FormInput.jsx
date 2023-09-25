import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label htmlFor={id}>{label}</label>
      <input
        {...inputProps}
        id={id}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={handleFocus}
        className={errorMessage ? "error" : ""}
      />
      {focused && errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default FormInput;
