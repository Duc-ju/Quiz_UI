import React, { useState } from "react";
import classes from "./joinHeader.module.css";
import Button from "../../../commonComponents/Button";
import { FcSearch } from "@react-icons/all-files/fc/FcSearch";
import { Link } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

function JoinHeader(props) {
  const { keycloak, initialized } = useKeycloak();
  const [keyword, setKeyword] = useState("");
  const handleLogin = () => {
    keycloak.login();
  };
  const handleLogout = () => {
    window.localStorage.removeItem("access");
    keycloak.logout();
  };
  const handleRegister = () => {
    keycloak.register();
  };
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
            <input
              type={"text"}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder={"Tìm quizz"}
            />
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
            <Button>Tham gia</Button>
            {!keycloak.authenticated && (
              <>
                <Button onClick={handleLogin}>Đăng nhập</Button>
                <Button onClick={handleRegister}>Đăng ký</Button>
              </>
            )}
            {keycloak.authenticated && (
              <Button onClick={handleLogout}>Đăng xuất</Button>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
}

export default JoinHeader;
