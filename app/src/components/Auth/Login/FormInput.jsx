import React, { useState } from "react";
import classes from "./style.module.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, onError, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className={classes.formInput}>
      <label className={classes.label}>{label}</label>
      <input
        className={classes.input}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        onError={onError}
      />
      <span className={classes.span}>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
