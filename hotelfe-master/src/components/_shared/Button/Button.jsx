import React from "react";
import classNames from "classnames";

import Loading from "react-spinners/PulseLoader";

import styles from "./Button.scss";

const Button = ({
  onClick,
  disabled = false,
  buttonText,
  type = "button",
  loading,
}) => {
  return (
    <button
      disabled={loading}
      onClick={onClick}
      type={type}
      className={classNames({
        [styles.button]: true,
        [styles.loading]: loading,
        [styles.disabled]: disabled,
      })}
    >
      {loading ? (
        <Loading size={8} color={"#FFFFFF"} loading={loading} />
      ) : (
        buttonText
      )}
    </button>
  );
};

export default Button;
