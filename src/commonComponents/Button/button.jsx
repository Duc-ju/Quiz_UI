import React from "react";
import classes from "./button.module.css";
import { Link } from "react-router-dom";

function LinkButton(props) {
  const { children, ...restProps } = props;
  return <Link {...restProps}>{children}</Link>;
}

function NormalButton(props) {
  const { children, to, ...restProps } = props;
  return <button {...restProps}>{children}</button>;
}

function Button(props) {
  const {
    type = "normal",
    preIcon,
    endIcon,
    className = "",
    children,
    to,
    ...restProps
  } = props;
  const RootTag = to ? LinkButton : NormalButton;
  return (
    <RootTag
      {...restProps}
      className={
        classes.root + " " + classes["button-" + type] + " " + className
      }
      to={to}
    >
      {!!preIcon && <span className={classes.icon}>{preIcon}</span>}
      <span className={classes.innerButton}>{children}</span>
      {!!endIcon && <span className={classes.icon}>{endIcon}</span>}
    </RootTag>
  );
}

export default Button;
