import React, { useState } from "react";

import styles from "./Input.scss";

const Input = ({ placeholder, value, onChange, errors }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isBlured, setIsBlured] = useState(false);
  const showErrors = isFocused && isBlured && errors.length > 0;

  return (
    <div className={styles.inputContainer}>
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsBlured(true);
        }}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type="text"
      />
      {showErrors && <span className={styles.errorMessage}>{errors[0]}</span>}
    </div>
  );
};

export default Input;
