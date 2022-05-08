import axios from "axios";

const deleteVideoFromHistoryOfUserService = (authToken, videoId) => {
  axios.delete(`/api/user/history/${videoId}`, {
    headers: { authorization: authToken }
  });
};

export { deleteVideoFromHistoryOfUserService };
