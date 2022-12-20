import React from "react";
import classes from "./overview.module.css";
import Icon from "../../../commonComponents/Icon";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { GrClose } from "@react-icons/all-files/gr/GrClose";
import Button from "../../../commonComponents/Button";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";

function Overview(props) {
  return (
    <div className={classes.playerContainer}>
      <div className={classes.playerHeader}>
        <div>
          <Button preIcon={<AiOutlineMail />}>
            Gửi mail cho tất cả phụ huynh
          </Button>
        </div>
        <div className={classes.showTime}>
          <span>Hiển thị thời gian trả lời</span>
          <input type={"checkbox"} />
        </div>
      </div>
      <div className={classes.tablePlayer}>
        <div className={classes.tableTitle}>
          <div></div>
          <div>Tên người tham gia</div>
          <div>Điểm số</div>
          <div>Q1</div>
          <div>Q2</div>
          <div>Q3</div>
          <div>Q4</div>
          <div></div>
        </div>
        <div className={classes.players}>
          {new Array(6).fill(null).map((x, index) => (
            <div className={classes.player} key={index}>
              <div>1</div>
              <div>
                <span>
                  <img
                    alt={"avatar"}
                    src={
                      "https://cf.quizizz.com/join/img/avatars/tablet_sm/monster33.png"
                    }
                  />
                </span>
                <spiv>Đức đây!</spiv>
              </div>
              <div>1800</div>
              <div className={classes.right}>
                <Icon>
                  <FaCheck />
                </Icon>
              </div>
              <div className={classes.wrong}>
                <Icon>
                  <GrClose />
                </Icon>
              </div>
              <div className={classes.wrong}>
                <Icon>
                  <GrClose />
                </Icon>
              </div>
              <div className={classes.wrong}>
                <Icon>
                  <GrClose />
                </Icon>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Overview;
