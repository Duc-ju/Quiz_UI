import axiosBase from "./axiosBase";

const answerTimeApi = {
  add: (data) => {
    const url = `test/answer-times/`;
    return axiosBase.post(url, data);
  },
};

export default answerTimeApi;
