import axiosClient from "./axiosClient";

const roomApi = {
  get: (id) => {
    const url = `/resource/lessons/${id}/`;
    return axiosClient.get(url);
  },
};

export default roomApi;
