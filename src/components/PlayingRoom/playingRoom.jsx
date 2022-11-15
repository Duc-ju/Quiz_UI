import React, { useContext, useEffect, useState } from "react";
import classes from "./playingRoom.module.css";
import { RoomContext } from "../../rootComponent/room/RoomRouter/context/roomProvider";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function PlayingRoom(props) {
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
  } = useContext(RoomContext);
  const params = useParams();
  const navigate = useNavigate();
  const currentQuestion = getCurrentQuestion();

  useEffect(() => {
    if (currentQuestion) {
      setCount(currentQuestion.duration);
    }
  }, [currentQuestion]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((old) => {
        if (old === 1 || old === 0) {
          setAnswered(true);
          handleAddAnswer({
            right: false,
          });
          setResultTime(15);
          clearInterval(intervalId);
          return 0;
        }
        return old - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentQuestion, answered]);
  useEffect(() => {
    if (!lesson) {
      console.log(params.lessonId);
      navigate(`/join/game/${params.lessonId}/pre-game`);
      toast.error("Bạn cần tham gia bài kiểm tra từ đầu!");
    }
  }, [currentQuestion]);
  const handleSelectAnswer = (answer) => {
    console.log(answer);
    setAnswered(true);
    handleAddAnswer({
      lesson: {
        id: lesson.id,
      },
      question: {
        id: currentQuestion.id,
      },
      id: answer.id,
      right: answer.answerKey,
    });
    setCount(0);
    setResultTime(15);
  };
  useEffect(() => {
    let timeoutId = -1;
    if (resultTime === 1) {
      timeoutId = setTimeout(() => {
        if (!currentQuestion.isLast) {
          handleNextQuestion();
        } else {
          handleNextQuestion();
          navigate(`/join/game/${lesson.id}/scored-game`);
        }
      }, 1000);
    } else if (resultTime > 1) {
      timeoutId = setTimeout(() => {
        setResultTime((old) => old - 1);
      }, 1000);
    }
    console.log(resultTime);
    return () => clearTimeout(timeoutId);
  }, [resultTime, currentQuestion]);

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
