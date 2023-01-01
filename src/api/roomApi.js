import axiosClient from "./axiosClient";

const roomApi = {
  get: (id) => {
    const url = `/room/rooms/${id}/`;
    return axiosClient.get(url);
  },
  add: (data) => {
    const url = `/room/rooms/`;
    return axiosClient.post(url, data);
  },
};

export default roomApi;
