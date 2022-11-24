import React, { useContext, useEffect, useState } from "react";
import classes from "./playingRoom.module.css";
import { RoomContext } from "../../rootComponent/room/RoomRouter/context/roomProvider";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { PENDING_TIME } from "../../constant/gameConstant";
import answerTimeApi from "../../api/answerTimeApi";

function PlayingRoom(props) {
  const { children } = props;
  const { lesson } = useContext(RoomContext);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!lesson) {
      navigate(`/join/game/${params.lessonId}/pre-game`);
      toast.error("Bạn cần tham gia bài kiểm tra từ đầu!");
    }
  }, [params.lessonId, navigate, lesson]);
  if (!lesson) return null;
  return <PlayingRoomContent />;
}

function PlayingRoomContent(props) {
  const [answered, setAnswered] = useState(false);
  const {
    lesson,
    getCurrentQuestion,
    count,
    setCount,
    resultTime,
    setResultTime,
    handleNextQuestion,
    handleAddAnswer,
    currentQuestionIdx,
    answerList,
  } = useContext(RoomContext);
  const navigate = useNavigate();
  const currentQuestion = getCurrentQuestion();

  useEffect(() => {
    if (currentQuestion) {
      setCount(currentQuestion.duration);
    }
  }, [currentQuestion.id, setCount]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((old) => {
        if (old === 1) {
          setAnswered(true);
          handleAddAnswer({
            right: false,
          });
          setResultTime(PENDING_TIME);
          clearInterval(intervalId);
          return 0;
        }
        if (old === 0) return old;
        return old - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentQuestion, answered, handleAddAnswer, setCount, setResultTime]);

  const handleSelectAnswer = (answer) => {
    setAnswered(true);
    handleAddAnswer({
      questionId: currentQuestion.id,
      questionAnswerParts: [
        {
          answerId: answer.id,
          rightAnswer: answer.answerKey,
        },
      ],
      duration: count,
    });
    setCount(0);
    setResultTime(PENDING_TIME);
  };
  useEffect(() => {
    let timeoutId = -1;
    if (resultTime === 1) {
      timeoutId = setTimeout(() => {
        if (!currentQuestion.isLast) {
          handleNextQuestion();
        } else {
          handleNextQuestion();
          const dataObject = {
            lessonId: lesson.id,
            userId: null,
            socketId: null,
            nickName: null,
            room: null,
            questionAnswers: answerList,
          };
          answerTimeApi
            .add(dataObject)
            .then((response) => {
              console.log(response);
            })
            .catch((e) => console.log(e));
          navigate(`/join/game/${lesson.id}/scored-game`);
        }
      }, 1000);
    } else if (resultTime > 1) {
      timeoutId = setTimeout(() => {
        setResultTime(resultTime - 1);
      }, 1000);
    }
    return () => clearTimeout(timeoutId);
  }, [
    resultTime,
    currentQuestion,
    handleNextQuestion,
    lesson.id,
    navigate,
    setResultTime,
  ]);

  if (!lesson) return null;
  return (
    <section className={classes.root}>
      <div className={classes.question}>
        <h2>
          {`Câu ${currentQuestionIdx + 1}. `}
          {currentQuestion.title}
        </h2>
      </div>
      <div className={classes.answers}>
        {currentQuestion.answers.map((answer, index) => (
          <Answer
            key={answer.id}
            answer={`${String.fromCharCode("A".charCodeAt(0) + index)}. ${
              answer.title
            }`}
            onClick={() => handleSelectAnswer(answer)}
          />
        ))}
      </div>
    </section>
  );
}

function Answer(props) {
  const { answer, ...resProps } = props;
  return (
    <div className={classes.answer} {...resProps}>
      <span>{answer}</span>
    </div>
  );
}

export default PlayingRoom;
