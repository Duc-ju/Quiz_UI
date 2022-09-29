import React from "react";
import classes from "./waitingRoom.module.css";
import Button from "../../commonComponents/Button";
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import { BiRun } from "@react-icons/all-files/bi/BiRun";
import { FaFlagCheckered } from "@react-icons/all-files/fa/FaFlagCheckered";
import { FcVoicePresentation } from "@react-icons/all-files/fc/FcVoicePresentation";

function WaitingRoom(props) {
  return (
    <section className={classes.root}>
      <div className={classes.row}>
        <div className={classes.firstColumn}>
          <div className={classes.info}>
            <div className={classes.imgContainer}>
              <img
                alt={"thumbnail"}
                src={
                  "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/790de558-2683-4411-acbc-f50de7af837f"
                }
              />
            </div>
            <div className={classes.infoContainer}>
              <h2>Ai thông minh nhất</h2>
              <span>
                <span>19</span> slide
              </span>
            </div>
          </div>
          <div className={classes.owner}>
            <span>
              <FcVoicePresentation />
            </span>
            <span>Qua:</span>
            <span>dieuthanhtb_80954</span>
          </div>
          <div>
            <Button preIcon={<FiShare2 />} fullWidth>
              Chia sẻ
            </Button>
          </div>
        </div>
        <div className={classes.secondColumn}>
          <div className={classes.progressContainer}>
            <div className={classes.top}>
              <BiRun />
              <FaFlagCheckered />
            </div>
            <div className={classes.progress}>
              <progress id="file" value="32" max="100">
                32%
              </progress>
            </div>
            <div className={classes.bottom}>
              <span>Bắt đầu</span>
              <span>Kết thúc</span>
            </div>
            <h2>13 slide còn lại</h2>
            <Button fullWidth>Tiếp tục thử</Button>
          </div>
        </div>
        <div className={classes.thirdColumn}></div>
      </div>
    </section>
  );
}

export default WaitingRoom;
