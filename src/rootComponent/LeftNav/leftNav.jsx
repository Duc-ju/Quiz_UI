import React from "react";
import classes from "./leftNav.module.css";
import Button from "../../commonComponents/Button";
import { BiAlarmAdd } from "@react-icons/all-files/bi/BiAlarmAdd";
import { GrMapLocation } from "@react-icons/all-files/gr/GrMapLocation";
import Icon from "../../commonComponents/Icon";

function LeftNav(props) {
  return (
    <div className={classes.root}>
      <div className={classes.logoSection}>
        <img
          alt={"logo"}
          src={
            "https://cf.quizizz.com/img/quizizz_logos/purple-brandmark-600x164.png"
          }
        />
      </div>
      <div className={classes.actionSection}>
        <p>Có một tài khoản?</p>
        <Button className={classes.loginButton}>Đăng nhập</Button>
        <Button preIcon={<BiAlarmAdd />} className={classes.createButton}>
          Tạo mới
        </Button>
      </div>
      <div className={classes.menuSection}>
        <ul>
          <MenuItem active />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </ul>
      </div>
    </div>
  );
}

function MenuItem(props) {
  const { active, ...restProps } = props;
  return (
    <li
      className={(active ? classes.active : "") + " " + classes.itemRoot}
      {...restProps}
    >
      <Icon className={classes.iconContainer}>
        <GrMapLocation />
      </Icon>
      <span>Khám phá</span>
    </li>
  );
}

export default LeftNav;
