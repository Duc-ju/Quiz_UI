import axiosBase from "./axiosBase";

const answerTimeApi = {
  add: (data) => {
    const url = `/test/answer-times/`;
    return axiosBase.post(url, data);
  },
  getById: (id) => {
    const url = `/test/answer-times/${id}/`;
    return axiosBase.get(url);
  },
};

export default answerTimeApi;
