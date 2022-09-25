import React from "react";
import classes from "./icon.module.css";

function Icon(props) {
  const { children, className = "", ...restProps } = props;
  return (
    <span className={classes.root + " " + className} {...restProps}>
      {children}
    </span>
  );
}

export default Icon;
