import axiosBase from "./axiosBase";

const roomApi = {
  get: (id) => {
    const url = `/resource/lessons/${id}/`;
    return axiosBase.get(url);
  },
};

export default roomApi;
