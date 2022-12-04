import React, { useEffect, useState } from "react";
import lessonApi from "../../../../api/lessonApi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import answerTimeApi from "../../../../api/answerTimeApi";

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
  const navigate = useNavigate();
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
          toast.error("Có lỗi xảy ra");
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
  const currentQuestion = (() => {
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
  })();
  const handleSubmit = () => {};
  const handleNextQuestion = () => {
    setCurrentQuestionIdx((old) => old + 1);
    setResultTime(-1);
    setCount(-1);
  };
  const handleGoToNextQuestion = () => {
    if (currentQuestionIdx !== lesson.questions.length - 1) {
      setAnswerList((answers) => [
        ...answers,
        {
          questionId: currentQuestion.id,
          numberOfRightAnswer: currentQuestion.numberOfKeys,
          point: 0,
          questionAnswerParts: [],
          duration: currentQuestion.duration,
        },
      ]);
      handleNextQuestion();
    } else {
      submitAnswerTime();
    }
  };

  const submitAnswerTime = () => {
    const dataObject = {
      lessonId: lesson.id,
      userId: null,
      socketId: null,
      nickName: null,
      room: null,
      questionAnswers: answerList.filter((answers) => !!answers),
    };
    setFetching(true);
    answerTimeApi
      .add(dataObject)
      .then((response) => {
        setAnswerTime(response.data);
        navigate(`/join/game/${lesson.id}/scored-game/${response.data.id}`);
        toast.info("Bạn đã hoàn thành bài kiểm tra!");
      })
      .catch((e) => {
        toast.error("Có lỗi xảy ra");
        console.log(e);
        navigate(`/join/game/${lesson.id}/pre-game`);
      })
      .finally(() => setFetching(false));
  };

  const handleGoToPreviousQuestion = () => {
    setCurrentQuestionIdx((old) => old - 1);
    setAnswerList((answers) => answers.slice(0, answers.length - 1));
    setResultTime(-1);
    setCount(-1);
  };

  const checkLastQuestionResult = () => {
    if (
      answerList.length === 0 ||
      !currentQuestion ||
      !currentQuestion.numberOfKeys
    )
      return false;
    return (
      answerList[answerList.length - 1] &&
      answerList[answerList.length - 1].questionAnswerParts &&
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
        currentQuestion,
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
        handleGoToNextQuestion,
        handleGoToPreviousQuestion,
        submitAnswerTime,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}

export default RoomProvider;
