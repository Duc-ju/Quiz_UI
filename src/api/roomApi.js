import axiosClient from "./axiosClient";

const roomApi = {
  get: (id) => {
    const url = `/lesson/lessons/${id}/`;
    return axiosClient.get(url);
  },
};

export default roomApi;
