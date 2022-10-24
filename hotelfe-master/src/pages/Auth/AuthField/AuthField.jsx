import React, { useState, useEffect } from "react";

import styles from "./AuthField.scss";

const AuthField = ({
  type,
  placeholder,
  value,
  name,
  onChange,
  icon,
  errors,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isBlured, setIsBlured] = useState(false);
  console.log(errors);
  const showErrors = isFocused && isBlured && errors.length > 0;

  return (
    <div>
      <div className={styles.inputField}>
        {icon && icon}
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsBlured(true)}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      {showErrors && <span className={styles.inlineError}>{errors[0]}</span>}
    </div>
  );
};

export default AuthField;
