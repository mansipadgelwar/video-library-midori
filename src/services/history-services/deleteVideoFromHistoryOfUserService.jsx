import axios from "axios";

const deleteVideoFromHistoryOfUserService = (authToken, videoId) => {
  return axios.delete(`/api/user/history/${videoId}`, {
    headers: { authorization: authToken },
  });
};

export { deleteVideoFromHistoryOfUserService };
