import React from "react";
import classes from "./joinHeader.module.css";
import Button from "../../../commonComponents/Button";
import { FcSearch } from "@react-icons/all-files/fc/FcSearch";
import { Link } from "react-router-dom";

function JoinHeader(props) {
  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <Link to={"/join"} className={classes.logo}>
          <img
            src={
              "https://cf.quizizz.com/img/quizizz_logos/purple-brandmark-600x164.png"
            }
            alt={"logo"}
          />
        </Link>
        <div className={classes.searchInput}>
          <div className={classes.leftNav}>
            <span className={classes.searchIcon}>
              <FcSearch />
            </span>
            <input type={"text"} name={"search"} placeholder={"Tìm quizz"} />
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
            {/*<Button to={"/join/login"}>Đăng nhập</Button>*/}
            {/*<Button to={"/join/register"}>Đăng ký</Button>*/}
          </li>
        </ul>
      </div>
    </section>
  );
}

export default JoinHeader;
