import React, { useEffect, useState } from "react";
import lessonApi from "../../../../api/lessonApi";
import { useParams } from "react-router-dom";

export const RoomContext = React.createContext();

function RoomProvider({ children }) {
  const [lesson, setLesson] = useState();
  const [fetching, setFetching] = useState(false);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answerList, setAnswerList] = useState([]);
  const [count, setCount] = useState(-1);
  const [resultTime, setResultTime] = useState(-1);
  const { lessonId } = useParams();
  useEffect(() => {
    if (lessonId) {
      setFetching(true);
      lessonApi
        .getById(lessonId)
        .then((lesson) => {
          setLesson(lesson.data);
          setFetching(false);
        })
        .catch((e) => {
          console.error(e);
          setFetching(false);
        });
    }
  }, [lessonId]);
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
    if (answerList.length === 0) return false;
    return (
      answerList[answerList.length - 1].questionAnswerParts.filter(
        (questionAnswerPart) => !questionAnswerPart.rightAnswer
      ).length === 0
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
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}

export default RoomProvider;
