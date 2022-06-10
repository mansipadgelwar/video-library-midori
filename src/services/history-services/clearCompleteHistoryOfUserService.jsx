import axios from "axios";

const clearCompleteHistoryOfUserService = (authToken) => {
  return axios.delete("/api/user/history/all", {
    headers: { authorization: authToken },
  });
};

export { clearCompleteHistoryOfUserService };
