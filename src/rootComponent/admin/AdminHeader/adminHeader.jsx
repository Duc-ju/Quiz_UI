import React from "react";
import classes from "./adminHeader.module.css";
import Button from "../../../commonComponents/Button";
import { FcSearch } from "@react-icons/all-files/fc/FcSearch";

function AdminHeader(props) {
  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <div className={classes.searchInput}>
          <div className={classes.leftNav}>
            <span className={classes.searchIcon}>
              <FcSearch />
            </span>
            <input type={"text"} name={"search"} placeholder={"Tìm kiếm"} />
          </div>
          <div className={classes.selectContainer}>
            <select>
              <option>Thư viện</option>
              <option>Báo cáo</option>
            </select>
          </div>
        </div>
        <ul className={classes.rightNav}>
          <li>
            <Button to={"/"}>Nhập mã</Button>
            <Button to={"/blog"}>Đăng nhập</Button>
            <Button to={"/blog"}>Đăng ký</Button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AdminHeader;
