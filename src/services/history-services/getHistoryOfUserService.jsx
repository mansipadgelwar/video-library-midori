import axios from "axios";

const getHistoryOfUserService = (authToken) => {
  return axios.get("/api/user/history", {
    headers: { authorization: authToken },
  });
};

export { getHistoryOfUserService };
