import axios from "axios";

const addVideoToHistoryOfUserService = (authToken, video) => {
  axios.post(
    "/api/user/history",
    { video },
    { headers: { authorization: authToken } }
  );
};

export { addVideoToHistoryOfUserService };
