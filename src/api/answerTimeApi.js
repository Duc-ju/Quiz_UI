import axiosClient from "./axiosClient";

const answerTimeApi = {
  add: (data) => {
    const url = `/room/answer-times/`;
    return axiosClient.post(url, data);
  },
  getById: (id) => {
    const url = `/room/answer-times/${id}/`;
    return axiosClient.get(url);
  },
};

export default answerTimeApi;
