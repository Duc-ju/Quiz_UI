import axiosClient from "./axiosClient";

const answerTimeApi = {
  add: (data) => {
    const url = `/test/answer-times/`;
    return axiosClient.post(url, data);
  },
  getById: (id) => {
    const url = `/test/answer-times/${id}/`;
    return axiosClient.get(url);
  },
};

export default answerTimeApi;
