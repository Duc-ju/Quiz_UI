import React from "react";
import classes from "./tag.module.css";
import Icon from "../Icon";

function Tag(props) {
  const { children, preIcon, endIcon, className = "", ...restProps } = props;
  return (
    <div className={classes.root + " " + className}>
      {!!preIcon && <Icon>{preIcon}</Icon>}
      {children}
      {endIcon && <Icon>{endIcon}</Icon>}
    </div>
  );
}

export default Tag;
