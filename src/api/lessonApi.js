import axiosClient from "./axiosClient";

const lessonApi = {
  getAll: () => {
    const url = `/resource/lessons/`;
    return axiosClient.get(url);
  },
  getById: (id) => {
    const url = `/resource/lessons/${id}/`;
    return axiosClient.get(url);
  },
  getByRoomId: (roomId) => {
    const url = `/test/rooms/${roomId}/lessons/`;
    return axiosClient.get(url);
  },
};

export default lessonApi;
