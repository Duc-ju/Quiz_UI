import React from "react";
import classes from "./rankStatistic.module.css";
import Icon from "../Icon";
import { GrGroup } from "@react-icons/all-files/gr/GrGroup";
import { AiFillFire } from "@react-icons/all-files/ai/AiFillFire";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import mergeClassNames from "merge-class-names";

function RankStatistic(props) {
  const { rankStatistic, openStatistic } = props;
  const rootClasses = mergeClassNames(
    classes.root,
    openStatistic ? classes.open : ""
  );
  return (
    <div className={rootClasses}>
      <div className={classes.bottomContainer}>
        <div className={classes.tabList}>
          <div>Bảng xếp hạng</div>
        </div>
        <div className={classes.playerContainer}>
          <div className={classes.playerCount}>
            <Icon>
              <GrGroup />
            </Icon>
            <span>1 người chơi</span>
          </div>
          <div className={classes.tablePlayer}>
            <div className={classes.tableTitle}>
              <div>Thứ hạng</div>
              <div>Tên</div>
              <div></div>
              <div>Điểm số</div>
              <div></div>
            </div>
            <div className={classes.players}>
              <div className={classes.player}>
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
                <div>
                  <div className={classes.progress}>
                    <div>
                      <Icon>
                        <AiFillFire />
                      </Icon>
                      <span>0</span>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div>600</div>
                <div>
                  <Icon>
                    <FaTimes />
                  </Icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RankStatistic;
