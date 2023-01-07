import axiosClient from "./axiosClient";

const statisticApi = {
  getAnswerTimeStatistic: (answerTimeId) => {
    const url = `/room/statistic/answer-times/${answerTimeId}/`;
    return axiosClient.get(url);
  },
  getAllRoomStatistic: () => {
    const url = `/room/statistic/rooms/`;
    return axiosClient.get(url);
  },
  getRoomStatistic: (roomId) => {
    const url = `/room/statistic/rooms/${roomId}`;
    return axiosClient.get(url);
  },
  getAfterQuestionRank: (answerTimeId, questionId) => {
    const url = `/room/statistic/answer-times/${answerTimeId}/questions/${questionId}/chart`;
    return axiosClient.get(url);
  },
};

export default statisticApi;
