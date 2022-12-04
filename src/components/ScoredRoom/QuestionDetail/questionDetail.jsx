import React from "react";
import classes from "./questionDetail.module.css";
import mergeClassNames from "merge-class-names";
import { GrClose } from "@react-icons/all-files/gr/GrClose";
import Icon from "../../../commonComponents/Icon";
import { FcAlarmClock } from "@react-icons/all-files/fc/FcAlarmClock";
import { ImDatabase } from "@react-icons/all-files/im/ImDatabase";
import { FaDotCircle } from "@react-icons/all-files/fa/FaDotCircle";
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";

function QuestionDetail(props) {
  const {
    className,
    question,
    questionAnswer = { rightAnswer: false, questionAnswerParts: [] },
    questionIndex,
  } = props;
  const mergedClass = mergeClassNames(classes.root, className);
  return (
    <div className={mergedClass}>
      <div className={classes.header}>
        <h2>{`Question ${questionIndex}`}</h2>
        <div className={classes.check}>
          {questionAnswer && questionAnswer.rightAnswer ? (
            <Icon icon={<FaCheck />} className={classes.right} />
          ) : (
            <Icon icon={<GrClose />} className={classes.wrong} />
          )}
        </div>
        <div className={classes.result}>
          <div className={classes.time}>
            <Icon icon={<FcAlarmClock />} />
            <span>
              {questionAnswer.duration ? `${questionAnswer.duration}s` : "~"}
            </span>
          </div>
          <div className={classes.point}>
            <ImDatabase />
            <span>{`${
              questionAnswer.point ? questionAnswer.point : 0
            } pts`}</span>
          </div>
        </div>
      </div>
      <div className={classes.body}>
        <div
          className={mergeClassNames(
            classes.titleContainer,
            questionAnswer.questionAnswerParts.length > 0
              ? classes.hasAnswer
              : ""
          )}
        >
          {questionAnswer.questionAnswerParts.length === 0 && (
            <span
              className={mergeClassNames(
                classes.yourAnswer,
                classes.wrongColor
              )}
            >
              Bạn chưa có câu trả lời cho câu hỏi này
            </span>
          )}
          <h3>{question.title}</h3>
        </div>
        <span />
        <ul className={classes.answers}>
          {question.answers.map((answer) => {
            const isUserAnswer =
              questionAnswer.questionAnswerParts.filter(
                (uAnswer) => uAnswer.answerId === answer.id
              ).length > 0;
            return (
              <li key={answer.id}>
                {isUserAnswer && (
                  <span
                    className={mergeClassNames(
                      classes.yourAnswer,
                      answer.answerKey ? classes.rightColor : classes.wrongColor
                    )}
                  >
                    Câu trả lời của bạn
                  </span>
                )}
                {answer.answerKey ? (
                  <Icon icon={<FaCheckCircle />} className={classes.checked} />
                ) : (
                  <Icon icon={<FaDotCircle />} />
                )}
                <span>{answer.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default QuestionDetail;
