import React, { useEffect, useState } from "react";
import lessonApi from "../../../../api/lessonApi";
import { useLocation, useParams } from "react-router-dom";

export const RoomContext = React.createContext();

function RoomProvider({ children }) {
  const [lesson, setLesson] = useState();
  const [started, setStarted] = useState(false);
  const [answerTime, setAnswerTime] = useState();
  const [fetching, setFetching] = useState(false);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answerList, setAnswerList] = useState([]);
  const [count, setCount] = useState(-1);
  const [resultTime, setResultTime] = useState(-1);
  const [point, setPoint] = useState();
  const { lessonId } = useParams();
  const location = useLocation();
  useEffect(() => {
    if (lessonId) {
      setFetching(true);
      lessonApi
        .getById(lessonId)
        .then((lesson) => {
          setLesson(lesson.data);
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          setFetching(false);
        });
    }
  }, [lessonId]);
  useEffect(() => {
    setAnswerTime();
    setCurrentQuestionIdx(0);
    setAnswerList([]);
    setCount(-1);
    setResultTime(-1);
    setStarted(false);
  }, [location.pathname]);
  const handleAddAnswer = (data) => {
    setAnswerList((old) => {
      return [...old, data];
    });
  };
  const getCurrentQuestion = () => {
    if (
      lesson &&
      lesson.questions &&
      lesson.questions.length &&
      lesson.questions.length > currentQuestionIdx
    ) {
      if (lesson.questions.length - 1 === currentQuestionIdx) {
        return {
          ...lesson.questions[currentQuestionIdx],
          isLast: true,
        };
      }
      return lesson.questions[currentQuestionIdx];
    }
  };
  const handleSubmit = () => {};
  const handleNextQuestion = () => {
    setCurrentQuestionIdx((old) => old + 1);
    setResultTime(-1);
    setCount(-1);
  };
  const checkLastQuestionResult = () => {
    const currentQuestion = getCurrentQuestion();
    if (
      answerList.length === 0 ||
      !currentQuestion ||
      !currentQuestion.numberOfKeys
    )
      return false;
    return (
      answerList[answerList.length - 1].questionAnswerParts.filter(
        (questionAnswerPart) => questionAnswerPart.rightAnswer
      ).length === currentQuestion.numberOfKeys
    );
  };
  return (
    <RoomContext.Provider
      value={{
        lesson,
        fetching,
        answerList,
        handleAddAnswer,
        getCurrentQuestion,
        handleSubmit,
        handleNextQuestion,
        setLesson,
        count,
        setCount,
        resultTime,
        setResultTime,
        checkLastQuestionResult,
        currentQuestionIdx,
        answerTime,
        setAnswerTime,
        setFetching,
        setStarted,
        started,
        point,
        setPoint,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}

export default RoomProvider;
