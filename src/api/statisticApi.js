import axiosClient from "./axiosClient";

const statisticApi = {
  getLessonTimeStatistic: (id) => {
    const url = `/room/statistic/answer-times/${id}/`;
    return axiosClient.get(url);
  },
  getAfterQuestionRank: (answerTimeId, questionId) => {
    const url = `/room/statistic/answer-times/${answerTimeId}/questions/${questionId}/chart`;
    return axiosClient.get(url);
  },
};

export default statisticApi;
