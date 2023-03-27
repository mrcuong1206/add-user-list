import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const { onClick, type, children } = props;
  return (
    <div>
      <button
        onClick={onClick}
        className={classes.button}
        type={type || "button"}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
