import React, { useContext } from "react";
import classes from "./questionList.module.css";
import { GrRadialSelected } from "@react-icons/all-files/gr/GrRadialSelected";
import Button from "../../../commonComponents/Button";
import { FaDotCircle } from "@react-icons/all-files/fa/FaDotCircle";
import Icon from "../../../commonComponents/Icon";
import { ModalContext } from "../../../rootComponent/common/ModalContainer/ModalContext/modalContext";
import QuestionDetail from "../QuestionDetail";

function QuestionList(props) {
  const { openModal } = useContext(ModalContext);
  const handleViewDetail = () => {
    openModal(<QuestionDetail />);
  };
  return (
    <div className={classes.root}>
      <div className={classes.rootHeader}>
        <span>Sắp xếp theo độ chính xác</span>
        <input type={"checkbox"} />
      </div>
      <div className={classes.shortcut}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <div className={classes.questions}>
        {new Array(4).fill(null).map((x, index) => (
          <div
            className={classes.question}
            key={index}
            onClick={handleViewDetail}
          >
            <div className={classes.header}>
              <div>
                <Button
                  preIcon={<GrRadialSelected />}
                  className={classes.multiChoice}
                >
                  Nhiều lựa chọn
                </Button>
              </div>
              <div>
                <div>
                  <span>Thời gian trả lời TB</span>
                  <span>12 secs</span>
                </div>
                <div>
                  <span>1 chính xác, 1 không chính xác</span>
                </div>
              </div>
            </div>
            <div className={classes.questionContent}>
              <h3>1. Con vịt có mấy chân</h3>
              <div className={classes.answerList}>
                {new Array(4).fill(null).map((x, index) => (
                  <div className={classes.answer} key={index}>
                    <Icon icon={<FaDotCircle />} />
                    <span>2</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionList;
