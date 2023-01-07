import React from "react";
import classes from "./overview.module.css";
import Icon from "../../../commonComponents/Icon";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { GrClose } from "@react-icons/all-files/gr/GrClose";
import Button from "../../../commonComponents/Button";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";

function Overview(props) {
  const { answerTimes } = props;
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
          {new Array(answerTimes[0].questionAnswers.length)
            .fill(null)
            .map((x, index) => (
              <div key={index}>{`Q${index + 1}`}</div>
            ))}
          <div></div>
        </div>
        <div className={classes.players}>
          {answerTimes.map((answerTime, index) => (
            <div className={classes.player} key={answerTime.id}>
              <div>{index + 1}</div>
              <div>
                <span>
                  <img
                    alt={"avatar"}
                    src={
                      "https://cf.quizizz.com/join/img/avatars/tablet_sm/monster33.png"
                    }
                  />
                </span>
                <div>Đức đây!</div>
              </div>
              <div>{answerTime.point}</div>
              {answerTime.questionAnswers.map((questionAnswer) =>
                questionAnswer.rightAnswer ? (
                  <div className={classes.right} key={questionAnswer.id}>
                    <Icon>
                      <FaCheck />
                    </Icon>
                  </div>
                ) : (
                  <div className={classes.wrong} key={questionAnswer.id}>
                    <Icon>
                      <GrClose />
                    </Icon>
                  </div>
                )
              )}
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Overview;
