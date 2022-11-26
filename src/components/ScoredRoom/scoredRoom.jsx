import React, { useContext, useEffect, useState } from "react";
import classes from "./scoredRoom.module.css";
import Icon from "../../commonComponents/Icon";
import { BsFillPersonFill } from "@react-icons/all-files/bs/BsFillPersonFill";
import { GiShare } from "@react-icons/all-files/gi/GiShare";
import { ImDatabase } from "@react-icons/all-files/im/ImDatabase";
import Button from "../../commonComponents/Button";
import Question from "./Question";
import Suggestion from "./Suggestion";
import { RoomContext } from "../../rootComponent/room/RoomRouter/context/roomProvider";
import { useParams } from "react-router-dom";
import answerTimeApi from "../../api/answerTimeApi";

function ScoredRoom(props) {
  const { answerTimeId } = useParams();
  const { lesson, answerTime, setFetching } = useContext(RoomContext);
  const [answerTimeState, setAnswerTimeState] = useState(answerTime);
  useEffect(() => {
    if (answerTimeId && !answerTime) {
      setFetching(true);
      answerTimeApi
        .getById(answerTimeId)
        .then((answerTime) => {
          setAnswerTimeState(answerTime.data);
          setFetching(false);
        })
        .catch((e) => {
          console.error(e);
          setFetching(false);
        });
    }
  }, [answerTimeId]);
  if (!lesson || !answerTimeState) return null;
  return <ScoredRoomBody lesson={lesson} answerTime={answerTimeState} />;
}

function ScoredRoomBody(props) {
  const { lesson, answerTime } = props;
  console.log(lesson, answerTime);
  return (
    <section className={classes.root}>
      <div className={classes.row}>
        <div className={classes.left}>
          <h2>Bản tóm tắt</h2>
          <div className={classes.summary}>
            <div className={classes.profile}>
              <div className={classes.avatar}>
                <img
                  src={
                    "https://cf.quizizz.com/join/img/avatars/tablet_lg/monster36.png"
                  }
                  alt={"avatar"}
                />
              </div>
              <div className={classes.info}>
                <h3>me</h3>
                <span>
                  <Icon icon={<BsFillPersonFill />} />
                  <span>Solo review</span>
                </span>
              </div>
              <div className={classes.share}>
                <Button>
                  <GiShare />
                </Button>
              </div>
            </div>
            <div className={classes.accuracy}>
              <h4>Chính xác</h4>
              <div className={classes.progress}>
                <progress
                  id="file"
                  value={answerTime.accuracy * 100}
                  max="100"
                ></progress>
              </div>
            </div>
            <div className={classes.score}>
              <div className={classes.scoreLeft}>
                <h4>Điểm số</h4>
                <span>{answerTime.point}</span>
              </div>
              <div className={classes.scoreRight}>
                <Button>
                  <ImDatabase />
                </Button>
              </div>
            </div>
          </div>
          <div className={classes.action}>
            <Button fullWidth>Bắt đầu lại</Button>
            <Button fullWidth>Xem lại</Button>
          </div>
          <div className={classes.statistic}>
            <h3>Thống kê hiệu suất</h3>
            <div className={classes.statisticRow}>
              <div>
                <span>{answerTime.numberOfRight}</span>
                <span>Chính xác</span>
              </div>
              <div>
                <span>{answerTime.numberOfWrong}</span>
                <span>Không chính xác</span>
              </div>
              <div>
                <span>{`${answerTime.averageDuration.toFixed(2)}s`}</span>
                <span>Thời gian / ques.</span>
              </div>
            </div>
          </div>
          <div className={classes.preview}>
            <h2>Xem lại câu hỏi</h2>
            <p>Nhấp vào các câu hỏi để xem câu trả lời</p>
            <div className={classes.questions}>
              {lesson.questions.map((question, index) => (
                <Question
                  key={question.id}
                  question={question}
                  questionAnswer={answerTime.questionAnswers[index]}
                  questionIndex={index + 1}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.rightContainer}>
            <h2>Bạn cũng có thể thích...</h2>
            <div className={classes.suggested}>
              <Suggestion />
              <Suggestion />
              <Suggestion />
              <Suggestion />
              <Suggestion />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScoredRoom;
