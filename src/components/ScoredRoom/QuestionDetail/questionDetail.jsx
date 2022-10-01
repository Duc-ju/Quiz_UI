import React from "react";
import classes from "./questionDetail.module.css";
import mergeClassNames from "merge-class-names";
import { GrClose } from "@react-icons/all-files/gr/GrClose";
import Icon from "../../../commonComponents/Icon";
import { FcAlarmClock } from "@react-icons/all-files/fc/FcAlarmClock";
import { ImDatabase } from "@react-icons/all-files/im/ImDatabase";
import { FaDotCircle } from "@react-icons/all-files/fa/FaDotCircle";
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";

function QuestionDetail(props) {
  const { className } = props;
  const mergedClass = mergeClassNames(classes.root, className);
  return (
    <div className={mergedClass}>
      <div className={classes.header}>
        <h2>Question 2</h2>
        <div className={classes.check}>
          <Icon icon={<GrClose />} />
        </div>
        <div className={classes.result}>
          <div className={classes.time}>
            <Icon icon={<FcAlarmClock />} />
            <span>17.4s</span>
          </div>
          <div className={classes.point}>
            <ImDatabase />
            <span>0 pts</span>
          </div>
        </div>
      </div>
      <div className={classes.body}>
        <h3>Từ trái nghĩa với mưa là:</h3>
        <span />
        <ul className={classes.answers}>
          <li>
            <Icon icon={<FaDotCircle />} />
            <span>gió</span>
          </li>
          <li>
            <Icon icon={<FaDotCircle />} />
            <span>bão</span>
          </li>
          <li>
            <span className={classes.yourAnswer}>Câu trả lời của bạn</span>
            <Icon icon={<FaDotCircle />} />
            <span>khô</span>
          </li>
          <li>
            <Icon icon={<FaCheckCircle />} className={classes.checked} />
            <span>nắng</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default QuestionDetail;
