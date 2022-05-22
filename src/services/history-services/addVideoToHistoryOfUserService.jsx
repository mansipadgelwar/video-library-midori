import axios from "axios";

const addVideoToHistoryOfUserService = (authToken, video) => {
  return axios.post(
    "/api/user/history",
    { video },
    { headers: { authorization: authToken } }
  );
};

export { addVideoToHistoryOfUserService };
