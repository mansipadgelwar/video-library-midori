import axios from "axios";

const getHistoryOfUserService = (authToken) => {
  axios.get("/api/user/history", { headers: { authorization: authToken } });
};

export { getHistoryOfUserService };
