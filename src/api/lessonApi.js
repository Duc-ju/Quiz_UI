import axiosBase from "./axiosBase";

const lessonApi = {
  getAll: () => {
    const url = `/resource/lessons/`;
    return axiosBase.get(url);
  },
  getById: (id) => {
    const url = `/resource/lessons/${id}/`;
    return axiosBase.get(url);
  },
  getByRoomId: (roomId) => {
    const url = `/test/rooms/${roomId}/lessons/`;
    return axiosBase.get(url);
  },
};

export default lessonApi;
